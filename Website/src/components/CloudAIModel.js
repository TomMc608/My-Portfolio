import React, { useState } from 'react';
import './CloudAIModel.css';

const CloudAIModel = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [prediction, setPrediction] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    setPrediction(null);
  };

  const makePrediction = async () => {
    // Here you would typically make an API call to your AI model
    // For now, we'll just simulate a prediction
    setPrediction("This is a simulated prediction for the uploaded image.");
  };

  return (
    <div className="cloud-ai-model">
      <h1>Cloud AI Model</h1>
      <p>Upload an image to get a prediction from our cloud-based AI model.</p>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected" className="preview-image" />
          <button onClick={makePrediction}>Make Prediction</button>
        </div>
      )}
      {prediction && (
        <div className="prediction-result">
          <h2>Prediction:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
};

export default CloudAIModel;