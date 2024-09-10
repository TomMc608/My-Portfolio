// File: src/app/contact/page.js
export default function Contact() {
    return (
      <div className="container">
        <h1 className="text-center mt-4 mb-4">Contact Me</h1>
        <div className="card">
          <h2>Get in Touch</h2>
          <p>I'm always open to discussing AI research, new projects, or opportunities. Feel free to reach out!</p>
          <ul className="mt-3">
            <li>Email: your.email@example.com</li>
            <li>LinkedIn: linkedin.com/in/yourprofile</li>
            <li>Twitter: @your_twitter_handle</li>
            {/* Add more contact methods as needed */}
          </ul>
        </div>
        <div className="card mt-4">
          <h2>Send a Message</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="block mb-2">Name:</label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="block mb-2">Email:</label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="block mb-2">Message:</label>
              <textarea id="message" name="message" rows="4" className="w-full p-2 border rounded" required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
          </form>
        </div>
      </div>
    );
  }