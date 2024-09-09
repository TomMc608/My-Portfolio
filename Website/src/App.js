import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import NavBar from './navigation/NavBar';
import HomePage from './screens/HomePage';
import Projects from './screens/Projects';
import AIModels from './screens/AIModels';
import CloudAIModel from './components/CloudAIModel';  // Corrected import for AI Model Details
import About from './screens/About';  // Added the About page import (commented out in your previous code)

function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Router>
      <div>
        <NavBar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />  {/* Uncommented and added the About page route */}
          <Route path="/projects" element={<Projects />} />
          <Route path="/ai-models/cloud-ai" element={<CloudAIModel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
