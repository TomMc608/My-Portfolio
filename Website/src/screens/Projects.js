import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const Projects = () => (
  <div className="projects">
    <h2>My Projects</h2>

    <div className="project-section">
      <h3>AI Models</h3>
      <div className="model-grid">
        <div className="model-card">
          <h3>Cloud AI Model</h3>
          <p>A cloud-based AI for image classification</p>
          <Link to="/ai-models/cloud-ai" className="model-link">Learn More</Link>
        </div>
        {/* Add more AI models here */}
      </div>
    </div>

    <div className="project-section">
      <h3>Games</h3>
      <div className="model-grid">
        <div className="model-card">
          <h3>Game 1</h3>
          <p>Some description about Game 1</p>
          <Link to="#" className="model-link">Learn More</Link>
        </div>
        <div className="model-card">
          <h3>Game 2</h3>
          <p>Some description about Game 2</p>
          <Link to="#" className="model-link">Learn More</Link>
        </div>
      </div>
    </div>
    
    {/* Add more sections for other projects here */}
  </div>
);

export default Projects;
