// File: src/app/layout.js
import '../styles/globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my personal portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <footer>
          {/* We'll add a Footer component here later */}
        </footer>
      </body>
    </html>
  );
}