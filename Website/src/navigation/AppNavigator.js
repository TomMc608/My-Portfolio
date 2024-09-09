import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './screens/HomePage';
import AIModels from '../screens/AIModels';
import CloudAIModel from '../components/CloudAIModel';
import About from './screens/About';
import Contact from '../screens/Contact';
import NavBar from './NavBar';

function AppNavigator() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ai-models" element={<AIModels />} />
        <Route path="/ai-model/cloud-ai" element={<CloudAIModel />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default AppNavigator;