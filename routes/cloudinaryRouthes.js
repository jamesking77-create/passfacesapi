// const express = require('express');
// const router = express.Router();
// const cloudinary = require('../cloudinary/cloudinary');



// router.post('/upload', async (req, res) => {
//   try {
//     const fileBuffer = req.body.file; 
//     const uploadResult = await cloudinary.uploadToCloudinary(fileBuffer);
//     res.json({ url: uploadResult.secure_url }); 
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Failed to upload file' });
//   }
// });

// module.exports = router;
