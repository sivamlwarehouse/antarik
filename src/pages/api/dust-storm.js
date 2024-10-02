import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const { date, region } = req.query; // Expected format: '12-07-2024' and region
  console.log("Query details: ", req.query);
  if (req.method === "GET") {
    try {
      const prefix = `${region.toLowerCase()}/dust_`; // Ensure the region folder and date are formatted correctly

      // Using async/await with a Promise-based approach for cloudinary.v2.api.resources
      const result = await new Promise((resolve, reject) => {
        cloudinary.v2.api.resources(
          {
            type: "upload",
            prefix, // Assuming all relevant images start with '{region}/wind_gust_10m_{date}_'
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
      console.log("Cloudinary: ", result);

      // Create a map to handle prioritizing '12UTC' over '00UTC'
      const imageMap = new Map();

      result.resources.forEach((resource) => {
        const parts = resource.public_id.match(
          /^.*dust_(\d{2}-\d{2}-\d{4})_(00UTC|12UTC)_(\d{2}-\d{2}-\d{4})$/i
        );
        console.log("PARTS: ", parts);
        if (!parts) return;

        const [, startDate, utcType, endDate] = parts;
        console.log(
          "StartDate, UTC TYPE, END date",
          startDate,
          utcType,
          endDate
        );
        // Checking the end date match

        //NEED TO MODIFY THE CODE. NEED TO CHANGE THE START AND END DATE
        // Checking the end date match
        if (endDate === date) {
          const key = `${endDate}_${utcType}`;
          // Prioritize storing '12UTC' over '00UTC' if '12UTC' is present
          if (utcType === "12UTC") {
            imageMap.set(key, resource.secure_url);
          } else if (utcType === "00UTC" && !imageMap.has(endDate)) {
            imageMap.set(key, resource.secure_url);
          }
        }
      });

      // Convert the map values to an array to send as response
      const preferredUrls = Array.from(imageMap.values());

      // Log the number of images retrieved
      console.log(
        `Retrieved ${preferredUrls.length} images for date ${date} and region ${region}`
      );

      // Send the response only if there are new images
      if (preferredUrls.length > 0) {
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
