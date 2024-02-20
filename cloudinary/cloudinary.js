
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'YOUR_CLOUD_NAME',
  api_key: 'YOUR_API_KEY',
  api_secret: 'YOUR_API_SECRET'
});

async function uploadToCloudinary(fileBuffer) {
  try {
    const result = await cloudinary.uploader.upload(fileBuffer, {
      resource_type: 'auto' 
    });
    return result;
  } catch (error) {
    throw new Error('Failed to upload file to Cloudinary');
  }
}

module.exports = {
  uploadToCloudinary
};
