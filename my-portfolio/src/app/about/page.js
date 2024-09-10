// File: src/app/about/page.js
export default function About() {
    return (
      <div className="container">
        <h1 className="text-center mt-4 mb-4">About Me</h1>
        <div className="card">
          <h2>Who I Am</h2>
          <p>Hello! I'm [Your Name], a passionate AI researcher and developer. I specialize in [Your Specialties] and have been working in the field for [Number] years.</p>
        </div>
        <div className="card mt-4">
          <h2>My Experience</h2>
          <p>I've worked on various AI projects, including [Brief List of Projects or Areas]. My goal is to [Your Professional Goal or Mission].</p>
        </div>
        <div className="card mt-4">
          <h2>Skills</h2>
          <ul>
            <li>Machine Learning</li>
            <li>Deep Learning</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            {/* Add more skills as needed */}
          </ul>
        </div>
      </div>
    );
  }