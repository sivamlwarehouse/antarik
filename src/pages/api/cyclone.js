import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const listOfPossibleNames = ['EP_Cyclone', 'IO_Cyclone', 'WP_Cyclone', 'AO_Cyclone'];

export default async function handler(req, res) {
  const { date, region } = req.query; // Expected format: '12-07-2024' for date and region code like 'IO'
  console.log("Query details: ", req.query);

  if (req.method === "GET") {
    try {
      let imageMap = new Map();

      // Loop through all possible cyclone names
      for (const cycloneName of listOfPossibleNames) {
        const prefix = `${region}/${cycloneName}_`; // Construct prefix with region and cyclone name
        console.log('Cyclone prefix: ', prefix);

        // Fetch images using the constructed prefix
        const result = await new Promise((resolve, reject) => {
          cloudinary.v2.api.resources(
            {
              type: "upload",
              prefix,
              max_results: 50000, // Adjust based on your expected inventory size
            },
            (error, result) => {
              if (error) {
                console.error("Failed to fetch images:", error);
                reject(error);
              } else {
                resolve(result);
              }
            }
          );
        });

        console.log("Cloudinary results for ", cycloneName, ": ", result);

        // Process the results to store only the latest image with priority on 12UTC
        result.resources.forEach((resource) => {
          const utcMatch = resource.public_id.match(/_(00UTC|12UTC)$/i);
          if (!utcMatch) return;

          const utcType = utcMatch[1]; // Extract the UTC type (00UTC or 12UTC)
          const key = `${cycloneName}`;
          const existingEntry = imageMap.get(key);

          const isLaterImage = !existingEntry || new Date(resource.created_at) > new Date(existingEntry.created_at);
          const is12UTCPreferred = utcType === "12UTC" && (!existingEntry || existingEntry.utcType === "00UTC");

          // Update the map if the current image is later or it's a 12UTC image replacing a 00UTC image
          if (isLaterImage || is12UTCPreferred) {
            imageMap.set(key, {
              url: resource.secure_url,
              created_at: resource.created_at,
              utcType, // Store UTC type to check in future iterations
            });
          }
        });
      }

      // Convert the map to an object to send as key-value pairs in the response
      const preferredUrls = Object.fromEntries(
        Array.from(imageMap.entries()).map(([key, entry]) => [key, entry.url])
      );

      // Log the number of images retrieved
      console.log(
        `Retrieved ${Object.keys(preferredUrls).length} images for date ${date} and region ${region}`
      );
      console.log('Preferred: ', preferredUrls);
      
      // Send the response with key-value pairs
      if (Object.keys(preferredUrls).length > 0) {
        res.status(200).json(preferredUrls);
      } else {
        // If no new images found, send a 304 Not Modified response
        res.status(304).end();
      }
    } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
