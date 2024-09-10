// File: src/app/not-found.js
export default function NotFound() {
    return (
      <div className="container text-center mt-4">
        <h1>404 - Page Not Found</h1>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link href="/">Go back home</Link>
      </div>
    );
  }