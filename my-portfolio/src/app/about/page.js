// pages/about.js or app/about/page.js (depending on your Next.js version)
import Image from 'next/image';

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
            src="" 
            alt="Tom McIver"
            layout="fill"
            objectFit="cover"
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
        <p className="text-xl">
          Feel free to explore my research and projects, and if you'd like to connect, don't hesitate to reach out!
        </p>
        <a href="mailto:tom.mciver@example.com" className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
          Get in Touch
        </a>
      </div>
    </div>
  );
}