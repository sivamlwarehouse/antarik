import cloudinary from "cloudinary";

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req, res) {
  const { date, region } = req.query; // Expected format: '12-07-2024' and region
  console.log("date details: ", date, "Region: ", region);

  if (req.method === "GET") {
    try {
      const prefix = `${region}/mme_pre_`; // Ensure the region folder and date are formatted correctly

      // Using async/await with a Promise-based approach for cloudinary.v2.api.resources
      const result = await new Promise((resolve, reject) => {
        cloudinary.v2.api.resources(
          {
            type: "upload",
            prefix, // Assuming all relevant images start with '{region}/mme_pre_'
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
      console.log("Cloudinary: ", result.resources);

      // Maps to store URLs based on logic
      // const weeklyImageMap = new Map();
      // const monthlyImageMap = new Map();

      // const now = new Date(); // Get the current date to compare

      // result.resources.forEach((resource) => {
      //   // Try matching with the weekly logic first (with start and end dates)
      //   let parts = resource.public_id.match(
      //     /^.*mme_pre_(\d{2}-\d{2}-\d{4})_(00UTC|12UTC)_(\d{2}-\d{2}-\d{4})$/i
      //   );

      //     if (parts) {
      //       const [, startDate, utcType,endDate] = parts;
      //       console.log("Matched with monthly logic:", startDate, utcType);

      //       const [day, month, year] = endDate.split("-").map(Number); // Extract day, month, and year
      //       console.log("Month: ",month)
      //       console.log("Year: ",year);

      //       const imageDate = new Date(year, month-1); // Construct a date object (Note: months in JS Date are 0-indexed)
      //       console.log("Constructed date: ",imageDate)

      //       const endOfRange = new Date(now.getFullYear(), now.getMonth() + 4, 0);

      //       // Only include months that are the current month or later
      //       if (imageDate >= now && imageDate <= endOfRange)  {
      //         const existingEntry = monthlyImageMap.get(endDate);

      //         const isLaterImage = !existingEntry || new Date(resource.created_at) > new Date(existingEntry.created_at);
      //         if (isLaterImage) {
      //           monthlyImageMap.set(startDate, { url: resource.secure_url, created_at: resource.created_at });
      //         }
      //       }
      //     }
      //   }
      // );

      // // Convert maps to objects to send as JSON response
      // // const weeklyUrls = Array.from(weeklyImageMap.values()).map((item) => item.url);
      // const monthlyUrls = Object.fromEntries(Array.from(monthlyImageMap.entries()).map(([key, value]) => [key, value.url]));

      const monthlyImageMap = new Map();
      const now = new Date();
      const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      // Calculate the end date for the 4-month range
      const endOfRange = new Date(now.getFullYear(), now.getMonth() + 5, 0); // Last day of the month 4 months from now

      result.resources.forEach((resource) => {
        // Match with the updated filename structure
        let parts = resource.public_id.match(
          /^.*mme_pre_(\d{2}-\d{2}-\d{4})_(00UTC|12UTC)_(\d{2}-\d{2}-\d{4})$/i
        );

        if (parts) {
          const [, startDate, utcType, endDate] = parts;
          console.log("Matched with monthly logic:", endDate, utcType);
          // console.log(new Date(2024,1,0));

          const [endDay, endMonth, endYear] = endDate.split("-").map(Number); // Extract day, month, and year from endDate
          const imageDate = new Date(endYear, endMonth - 1, endDay); // Construct date object (months are 0-indexed)
          console.log("Constructed date: ", imageDate);

          // Check if imageDate falls within the range from now to endOfRange
          if (imageDate >= now && imageDate <= endOfRange) {
            const existingEntry = monthlyImageMap.get(startDate);
            console.log("Existing Entry: ", existingEntry);
            const isLaterImage =
              !existingEntry ||
              new Date(resource.created_at) >
                new Date(existingEntry.created_at);
            console.log("Is later image: ", isLaterImage);

            if (isLaterImage) {
              console.log("endmonth: ", endMonth);
              monthlyImageMap.set(monthNames[endMonth - 1], {
                url: resource.secure_url,
                created_at: resource.created_at,
              });
            }
          }
        }
      });

      console.log("monthly image map: ", monthlyImageMap);

      // Convert map to object to send as JSON response
      const monthlyUrls = Object.fromEntries(
        Array.from(monthlyImageMap.entries()).map(([key, value]) => [
          key,
          value.url,
        ])
      );

      // Log the number of images retrieved
      console.log(
        `Retrieved ${
          Object.keys(monthlyUrls).length
        } monthly images for date ${date} and region ${region}`
      );
      console.log("monthly Urls", monthlyUrls);

      // Log the number of images retrieved
      console.log(
        `Retrieved ${
          Object.keys(monthlyUrls).length
        } monthly images for date ${date} and region ${region}`
      );
      // console.log("weekly Urls", weeklyUrls);
      console.log("monthly Urls", monthlyUrls);

      // Send both weekly and monthly logic results
      res.status(200).json({
        // weekly: weeklyUrls,
        monthly: monthlyUrls,
      });
      console.log(new Date(2024, 1, 0));
    } catch (error) {
      console.error("Error handling request:", error);
      res.status(500).json({ error: "Server error" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

// if (parts) {
//   const [, startDate, utcType, endDate] = parts;
//   console.log("Matched with weekly logic:", startDate, utcType, endDate);

//   console.log("endDate: ", endDate);
//   console.log("date: ",date);

//   if (endDate === date) {
//   const key = `${endDate}_${utcType}`;
//     console.log("failing here");
//     console.log("key: ", key);

//     // Prioritize storing '12UTC' over '00UTC' if '12UTC' is present
//   if (utcType === "12UTC" || !weeklyImageMap.has(endDate) || new Date(resource.created_at) > new Date(weeklyImageMap.get(key)?.created_at)) {
//     weeklyImageMap.set(key, { url: resource.secure_url, created_at: resource.created_at });
//   }
//   }
// } else {
// Fallback to monthly logic if no end date is found in the filename
//  let parts = resource.public_id.match(
//     /^.*mme_pre_(\d{2}-\d{2}-\d{4})_(00UTC|12UTC)$/i
//   );

// console.log("Parts: ",parts);
