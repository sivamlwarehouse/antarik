// components/Dropzone.js
import { useCallback } from 'react';

const Dropzone = ({ onDrop }) => {
  const handleDrop = useCallback((e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  }, [onDrop]);

  const handleChange = useCallback((e) => {
    const files = e.target.files;
    handleFiles(files);
  }, [onDrop]);

  const handleFiles = (files) => {
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        onDrop(file);
      } else {
        alert('Please drop or select an image file.');
      }
    });
  };

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className='dropZone'
      style={{ width: '100%', height: '300px', border: '2px dashed #ccc', textAlign: 'center'}}
    >
      <p>Drag and drop image files here</p>
      <p>or</p>
      <label htmlFor="file" className='labelForFileSelect'>Select a file</label>
      <br />
      <input type="file" id='file' name='file' className='file' accept="image/*" onChange={handleChange} multiple />
    </div>
  );
};

export default Dropzone;
