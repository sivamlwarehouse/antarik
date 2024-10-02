import cloudinary from 'cloudinary';

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

export default async function handler(req, res) {
    const { type, region } = req.query; // Expected format: 'min_11-05-2024' and region
    console.log('Type: ', type, 'Region: ', region);
    if (req.method === 'GET') {
        try {
            const prefix = `${region}/temp_`; // Adjust the prefix to include the region folder

            cloudinary.v2.api.resources(
                {
                    type: 'upload',
                    prefix, // Assuming all relevant images start with '{region}/temp_'
                    max_results: 50000 // Adjust based on your expected inventory size
                },
                function (error, result) {
                    if (error) {
                        console.error('Failed to fetch images:', error);
                        return res.status(500).json({ error: "Unable to retrieve images" });
                    }

                    // Create a map to handle prioritizing '12UTC' over '00UTC'
                    const imageMap = new Map();
                    
                    result.resources.forEach(resource => {
                        // console.log(resource);
                        
                        const parts = resource.public_id.match(/^.*temp_([^_]+)_(\d{2}-\d{2}-\d{4})_(00UTC|12UTC)_(\d{2}-\d{2}-\d{4})$/);
                        // console.log('PARTS: ', parts);
                        if (!parts) return;
                        
                        const [, fileType, , utcType, endDate] = parts;
                        const queryParts = type.split('_'); // 'min_11-05-2024'
                        const queryType = queryParts[0];    // 'min'
                        const queryDate = queryParts[1];    // '11-05-2024'

                        // Checking type and end date match
                        if (fileType === queryType && endDate === queryDate) {
                            const key = `${fileType}_${endDate}`;
                            console.log('KEY: ', key);
                            
                            // Prioritize storing '12UTC' over '00UTC'
                            if (!imageMap.has(key) || utcType === '12UTC') {
                                imageMap.set(key, resource.secure_url);
                            }
                        }
                    });

                    // Convert the map values to an array to send as response
                    const preferredUrls = Array.from(imageMap.values());
                    console.log('Preferred Urls', imageMap);
                    
                    res.status(200).json(preferredUrls);
                }
            );
        } catch (error) {
            console.error('Error handling request:', error);
            res.status(500).json({ error: "Server error" });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
