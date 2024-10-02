import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    console.log(req)
    const region = req.body.region || 'World'; // Get the selected region from the form data
    return {
      folder: region, // Set the folder to the selected region
      public_id: file.originalname.split('.')[0], // Keep the original file name
      resource_type: 'auto'
    };
  }
});

const upload = multer({ storage: storage }).array('files', 10); // Accept up to 10 files under the key 'files'

export default function handler(req, res) {
  if (req.method === 'POST') {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        return res.status(500).json({ error: "A Multer error occurred: " + err.message });
      } else if (err) {
        // An unknown error occurred when uploading.
        return res.status(500).json({ error: "An unknown error occurred: " + err.message });
      }

      // Everything went fine.
      return res.status(200).json({ message: 'Files uploaded successfully!', files: req.files.map(file => file.filename) });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}

export const config = {
  api: {
    bodyParser: false,
  },
};
