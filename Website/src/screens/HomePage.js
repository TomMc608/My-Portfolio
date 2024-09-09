import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const HomePage = () => (
  <div className="home">
    <header className="hero">
      <h1>Welcome to My AI Model Website</h1>
      <p>Exploring the frontiers of artificial intelligence</p>
    </header>
    <section className="features">
      <Link to="/projects" className="feature-card">
        <h2>AI Models</h2>
        <p>Discover cutting-edge AI models</p>
      </Link>
      <Link to="/projects" className="feature-card">
        <h2>Projects</h2>
        <p>Explore my latest AI projects</p>
      </Link>
      {/* Link to the Published Papers section of the About page */}
      <Link to="/about#research" className="feature-card">
        <h2>Research</h2>
        <p>Read about AI advancements</p>
      </Link>
      {/* Link to the Contact section of the About page */}
      <Link to="/about#contact" className="feature-card">
        <h2>Contact</h2>
        <p>Get in touch with me</p>
      </Link>
    </section>
  </div>
);

export default HomePage;
