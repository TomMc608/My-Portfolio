// File: src/app/projects/page.js
export default function Projects() {
    return (
      <div className="container">
        <h1 className="text-center mt-4 mb-4">My Projects</h1>
        <div className="card-container">
          <div className="card">
            <h2>Project 1</h2>
            <p>Description of Project 1. This is where you can briefly explain what the project is about.</p>
          </div>
          <div className="card">
            <h2>Project 2</h2>
            <p>Description of Project 2. Highlight the key features or technologies used in this project.</p>
          </div>
          <div className="card">
            <h2>Project 3</h2>
            <p>Description of Project 3. You can also mention the impact or results of this project.</p>
          </div>
        </div>
      </div>
    );
  }