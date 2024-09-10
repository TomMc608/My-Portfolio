'use client';

   import Link from 'next/link';
   import { useState } from 'react';

   export default function Navbar() {
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     return (
       <nav className="navbar">
         <div className="container">
           <ul className={isMenuOpen ? 'nav-links open' : 'nav-links'}>
             <li><Link href="/">Home</Link></li>
             <li><Link href="/projects">Projects</Link></li>
             <li><Link href="/about">About</Link></li>
             <li><Link href="/contact">Contact</Link></li>
           </ul>
           <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
             ☰
           </button>
         </div>
       </nav>
     );
   }