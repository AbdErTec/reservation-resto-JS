import React from 'react';
import '../styles/Contact.css'; // Updated path to link CSS

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
