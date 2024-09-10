// File: src/app/page.js
import Link from 'next/link';

export default function Home() {
  return (
    <div className="home-container">
      <div className="banner">
        <h1>Welcome to My AI Model Website</h1>
        <p>Exploring the frontiers of artificial intelligence</p>
      </div>
      <div className="card-container">
        <Link href="/ai-models" className="card">
          <h2>AI Models</h2>
          <p>Discover cutting-edge AI models</p>
        </Link>
        <Link href="/projects" className="card">
          <h2>Projects</h2>
          <p>Explore my latest AI projects</p>
        </Link>
        <Link href="/research" className="card">
          <h2>Research</h2>
          <p>Read about AI advancements</p>
        </Link>
      </div>
      <div className="card-container">
        <Link href="/contact" className="card contact-card">
          <h2>Contact</h2>
          <p>Get in touch with me</p>
        </Link>
      </div>
    </div>
  );
}