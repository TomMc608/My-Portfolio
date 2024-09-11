import Image from 'next/image';
import Link from 'next/link';
import profilePic from './me.png';

export const metadata = {
  title: 'About Me - Tom McIver',
  description: 'Learn more about Tom McIver, an AI researcher based in Dunedin, New Zealand.',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">About Me</h1>
      
      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="w-64 h-64 relative rounded-full overflow-hidden shadow-lg">
          <Image
            src={profilePic}
            alt="Tom McIver"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
        
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold">Hello, I'm Tom McIver</h2>
          <p className="text-lg">
            AI researcher | Final-year IT student | Quantum computing enthusiast
          </p>
          <p className="text-gray-600">
            Based in Dunedin, New Zealand
          </p>
        </div>
      </div>
      
      <div className="mt-8 space-y-6 text-lg">
        <p>
          As a final-year IT student specializing in Artificial Intelligence, my passion lies in pushing the boundaries of technology, particularly in the intersection of quantum computing and neural networks.
        </p>
        <p>
          I recently published a paper on Quantum Neural Networks inspired by the Orchestrated Objective Reduction (Orch OR) theory, aiming to explore how quantum processes might contribute to the emergence of consciousness. My research focuses on integrating quantum mechanics into AI, unlocking new ways of thinking about computation, intelligence, and the future of technology.
        </p>
        <p>
          In addition to my academic work, I am passionate about fitness, tech innovation, and continuous learning. Whether it's running long-distance races or tackling complex code, I'm always looking for ways to challenge myself and grow.
        </p>
      </div>
      
      <div className="mt-8 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-4">Research Interests</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Quantum Neural Networks</li>
          <li>Artificial Consciousness</li>
          <li>Machine Learning Optimization</li>
          <li>Quantum Computing Applications in AI</li>
        </ul>
      </div>
      
      <div className="mt-8 text-center">
  <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
  <div className="flex justify-center space-x-4">
    <Link 
      href="https://www.linkedin.com/in/tom-mciver-89171a278/" 
      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
      target="_blank"
      rel="noopener noreferrer"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect x="2" y="9" width="4" height="12"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
      <span>LinkedIn</span>
    </Link>
    <Link 
      href="mailto:tomm9010@gmail.com" 
      className="flex items-center space-x-2 text-blue-600 hover:text-blue-800"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
      <span>Email</span>
    </Link>
  </div>
</div>
    </div>
  );
}