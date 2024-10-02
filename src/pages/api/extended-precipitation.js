import cloudinary from "cloudinary";
import { differenceInDays } from "date-fns";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const { region } = req.query;
  const currentDate = new Date(); // Current date to calculate the week difference

  if (req.method === "GET") {
    try {
      const prefix = `${region.toLowerCase()}/extended_total_precipitation_`; // Prefix for all extended precipitation images

      // Fetch images from Cloudinary with the specified prefix
      const result = await new Promise((resolve, reject) => {
        cloudinary.v2.api.resources(
          {
            type: "upload",
            prefix,
            max_results: 50000,
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

      console.log("Cloudinary results: ", result);

      // Map to store the best image for each week
      const weekImageMap = new Map();

      result.resources.forEach((resource) => {
        const parts = resource.public_id.match(
          /^.*extended_total_precipitation_(\d{2}-\d{2}-\d{4})_(00UTC|12UTC)_(\d{2}-\d{2}-\d{4})$/i
        );

        if (!parts) return;

        const [, , utcType, endDate] = parts;
        console.log("UTC TYPE, END date", utcType, endDate);

        // Parse the endDate directly as it appears in the format of "dd-MM-yyyy"
        const [day, month, year] = endDate.split("-");
        const parsedEndDate = new Date(`${year}-${month}-${day}`);

        // Calculate the difference in days between the end date and the current date
        const daysDifference = differenceInDays(parsedEndDate, currentDate);

        // Only consider future or current weeks (positive or zero days difference)
        if (daysDifference >= 0) {
          const weekIndex = Math.floor(daysDifference / 7); // 0 for current week, 1 for 2nd week, etc.
          const weekKey = weekIndex === 0 ? "Current week" : `${weekIndex + 1}nd week`;

          const existingEntry = weekImageMap.get(weekKey);

          // Prioritize '12UTC' and the latest created_at
          const is12UTCPreferred = utcType === "12UTC" && (!existingEntry || existingEntry.utcType === "00UTC");
          const isLaterImage = !existingEntry || new Date(resource.created_at) > new Date(existingEntry.created_at);

          if (isLaterImage || is12UTCPreferred) {
            weekImageMap.set(weekKey, {
              url: resource.secure_url,
              created_at: resource.created_at,
              utcType,
            });
          }
        }
      });

      // Convert the map to an object to send as a response
      const weeklyUrls = Object.fromEntries(
        Array.from(weekImageMap.entries()).map(([key, entry]) => [key, entry.url])
      );

      console.log("Weekly URLs: ", weeklyUrls);

      // Send the response as key-value pairs
      if (Object.keys(weeklyUrls).length > 0) {
        res.status(200).json(weeklyUrls);
      } else {
        res.status(304).end(); // No new images found
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
