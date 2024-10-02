'use client'

import { useState } from 'react';
import Dropzone from './Dropzone';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./uploader.css";

const HomePage = () => {
  const [images, setImages] = useState([]);
  const [activeRegion, setActiveRegion] = useState('World');
  const handleDrop = (file) => {
    setImages(currentImages => [...currentImages, file]);
  };

  const handleSubmit = async () => {
    const chunkSize = 2; // Number of images to upload per request
    let remainingImages = [...images];

    for (let i = 0; i < images.length; i += chunkSize) {
      const chunk = remainingImages.slice(i, i + chunkSize);
      const formData = new FormData();
      formData.append('region', activeRegion);  // Append the selected region to the form data
      chunk.forEach(image => formData.append('files', image));  // Use 'files' for all image uploads

      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        const result = await response.json();
        console.log(result);  // Handle result accordingly
        toast.success('Files uploaded successfully!');
        
        // Remove successfully uploaded images from remainingImages
        remainingImages = remainingImages.slice(chunkSize);
        setImages(remainingImages);
        
      } catch (error) {
        console.error('Error uploading files:', error);
        toast.error('Error uploading files.');
        break; // Stop further uploads if there's an error
      }
    }
  };

  const handleRegionClick = (region) => {
    setActiveRegion(region);
  };

  return (
    <div className="card">
      <div className="card-body">
        <h1 className="card-title text-center">Transfer Files</h1>
        <Dropzone onDrop={handleDrop} />
        {images.map((file, index) => (
          <div key={index} style={{ marginTop: '20px', textAlign: 'center' }}>
            <img src={URL.createObjectURL(file)} alt="Preview" style={{ maxHeight: '200px' }} />
          </div>
        ))}
        <div className="button-group" style={{ textAlign: 'center', marginTop: '20px' }}>
          {['Asia', 'Europe', 'MIDDLE_EAST', 'WORLD', 'INDIA'].map((region) => (
            <button
              key={region}
              className={`custom-button ${activeRegion === region ? 'active' : ''}`}
              onClick={() => handleRegionClick(region)}
            >
              {region}
            </button>
          ))}
        </div>
        <button className="custom-button" onClick={handleSubmit}>Submit to Cloud</button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default HomePage;
