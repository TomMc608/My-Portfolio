import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      {/* About Me Section */}
      <section id="about-me" className="about-section">
        <h2>About Me</h2>
        <p>I am an AI enthusiast with a passion for developing cutting-edge AI models and software solutions.</p>
        {/* ... */}
      </section>

      {/* Published Papers Section */}
      <section id="research" className="about-section">
        <h2>Published Papers</h2>
        <ul>
          <li>Paper 1: "The Future of AI in Image Classification"</li>
          <li>Paper 2: "Cloud AI: A New Era for Machine Learning"</li>
          <li>Paper 3: "Deep Learning in the Age of AI"</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="about-section">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me for collaborations, job opportunities, or any questions you may have!
        </p>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <p>GitHub: <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">github.com/your-github-username</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin-profile</a></p>
      </section>
    </div>
  );
};

export default About;
