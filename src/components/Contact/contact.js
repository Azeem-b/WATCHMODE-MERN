import React from 'react';
import './contact.css';

const ContactUs = () => (
  <div className="contact-container">
    <h1>Contact Us</h1>
    <p>
      We had love to hear from you! Reach out to us through any of the following ways:
    </p>

    <div className="contact-info">
      <p>
        <strong>Email:</strong>
        {' '}
        support@watchmovies.com
      </p>
      <p>
        <strong>Phone:</strong>
        {' '}
        +1 (800) 123-4567
      </p>
      <p>
        <strong>Address:</strong>
        {' '}
        123 Movie Street, Hollywood, CA, USA
      </p>
    </div>

    <form className="contact-form">
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" rows="5" required />
      <button type="submit">Send Message</button>
    </form>
  </div>
);

export default ContactUs;
