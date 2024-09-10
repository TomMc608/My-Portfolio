
import React from 'react';
import { Link } from 'react-router-dom';
import './AIModels.css';

const AIModels = () => {
  const models = [
    { id: 1, name: "Cloud AI Model", description: "Image classification using cloud-based AI", link: "/ai-model/cloud-ai" },
    { id: 2, name: "AI Model 2", description: "Description for AI Model 2", link: "#" },
    { id: 3, name: "AI Model 3", description: "Description for AI Model 3", link: "#" }
  ];

  return (
    <div className="ai-models">
      <h2>My Projects</h2>
      <div className="model-grid">
        {models.map(model => (
          <div key={model.id} className="model-card">
            <h3>{model.name}</h3>
            <p>{model.description}</p>
            <Link to={model.link} className="model-link">Learn More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AIModels;