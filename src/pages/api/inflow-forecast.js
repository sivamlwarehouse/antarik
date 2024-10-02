import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const { date, region } = req.query; // Expected format: '12-07-2024' for date and region code like 'India'
  console.log("Query details: ", req.query);
  console.log(req.query.date)

  if (req.method === "GET") {
    try {
      let imageMap = new Map();
      const TEN_DAYS_IN_MS = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds
      const now = new Date();

      const prefix = `${region}/India_Flood_Inflow_`; // Construct prefix for all flood inflow images
      console.log("Flood Inflow prefix: ", prefix);

      // Fetch images using the constructed prefix
      const result = await new Promise((resolve, reject) => {
        // cloudinary.v2.api.delete_resources(
        //   [
        //     // 'INDIA/India_Flood_Inflow_Godavari_River_02_09_2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Godavari_River_06-09-2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Godavari_River_10-09-2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Godavari_River_19-09-2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Godavari_River_29_08_2024_00UTC',
        //     // 'INDIA/India_Flood_Inflow_Narmada_River_02_09_2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Narmada_River_06-09-2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Narmada_River_10-09-2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Narmada_River_19-09-2024_00UTC',
        //     // 'INDIA/India_Flood_inflow_Narmada_River_29_08_2024_00UTC',
        //     'INDIA/India_Flood_Inflow_Srisailam_02_09_2024_00UTC',
        //     'INDIA/India_Flood_inflow_Srisailam_21-09-2024_00UTC'
        //   ]
        //   , (err, res) => {
        //     console.log(`Error: `, err);
        //     console.log(`Res: `, res);

        //   })
        cloudinary.v2.api.resources(
          {
            type: "upload",
            prefix,
            max_results: 50000,
            // public_ids:['INDIA/India_Flood_Inflow_Srisailam_21-09-2024_00UTC'] // Adjust based on your expected inventory size
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

      console.log("result: ",result)

      console.log("Cloudinary results for Flood Inflow: ", result.resources.map(r => r.public_id));
      console.log("Length: ", result.resources.length);

      // Process the results to store only the latest image for each unique river name
      result.resources.forEach((resource) => {
        // Extract the river name and UTC type from tdhe public ID
        const offset = resource.public_id?.toLowerCase().includes("river") ? 0 : -1;
        const parts = resource.public_id?.split('India_Flood_Inflow_')[1]?.split('_');
        if (!parts || parts.length < 4 + offset) return;

        const riverName = parts.slice(0, -3 - offset).join('_'); // River name is before the date
        const utcType = parts[parts.length - 1]; // The last part contains the UTC type

        const createdAtDate = new Date(resource.created_at); // Get the created_at date from Cloudinary
        console.log('Created At Date:', createdAtDate);

        // Skip images older than 10 days
        console.log("Now: ", now)
        console.log("created at date: ", createdAtDate);
        console.log("Ten days in Ms", TEN_DAYS_IN_MS)
        console.log("difference", now - createdAtDate)
        console.log("RiverName", riverName);
        if (now - createdAtDate > TEN_DAYS_IN_MS) {
          console.log("Exiting from here")
          return; // Skip this image as it is older than 10 days
        }

        const key = riverName; // Use river name as the key
        const existingEntry = imageMap.get(key);

        const isLaterImage = !existingEntry || createdAtDate > new Date(existingEntry.created_at);
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

      // Convert the map to an object to send as key-value pairs in the response
      const preferredUrls = Object.fromEntries(
        Array.from(imageMap.entries()).map(([key, entry]) => [key, entry.url])
      );

      // Log the number of images retrieved
      console.log(
        `Retrieved ${Object.keys(preferredUrls).length} images for date ${date} and region ${region}`
      );
      console.log("Preferred: ", preferredUrls);

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
