// File: src/components/Navbar.js
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <Link href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '1.2rem', fontWeight: 'bold' }}>
          Your Name
        </Link>
        <ul style={{ float: 'right' }}>
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#projects">Projects</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
          <li><Link href="/ai-models">AI Models</Link></li>
        </ul>
      </div>
    </nav>
  );
}