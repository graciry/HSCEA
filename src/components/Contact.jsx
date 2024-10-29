import React, { useState } from 'react';
import './Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form Submitted', formData);

    setFormData({
      name: '',
      email: '',
      message: '',
    });

    setSuccess(true);
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us. We would love to hear from you!</p>
      
      <div className="contact-section">
        <h3>Contact Information</h3>
        <p>Phone Number: <a href="callus:+254721460367">+254721460367</a></p>
        <p>Email: <a href="mailto:collinsosore5@gmail.com">collinsosore5@gmail.com</a></p>
        <p>Facebook: <a href="https://facebook.com/groups/546863782119008/" target="_blank" rel="noopener noreferrer">Holy Spirit Church of E.A(Bukoyani H.Q)</a></p>
        <p>Postal Address: P.O BOX 78, Maragoli(50300)</p>
      </div>

      <div className="contact-section">
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        {success === true && <p className="success-message">Thank you! Your message has been sent.</p>}
        {success === false && <p className="error-message">Oops! Something went wrong. Please try again.</p>}
      </div>

      {/* Centered Locations Section */}
      <div className="our-locations">
        <h3>Our Locations</h3>
        <ul>
          <li>Vihiga Diocese, Vihiga</li>
          <li>Nairobi East Diocese, Nairobi</li>
          <li>Sabatia Diocese, Sabatia</li>
          <li>Madiola Diocese, Madiola</li>
          <li>Kakamega Diocese, Kakamega</li>
          <li>Transnzoia Diocese, Transnzoia</li>
          <li>Central Diocese, Central Province</li>
          <li>South Nyanza Diocese, Nyanza</li>
          <li>Dagoretti Diocese, Nairobi</li>
          <li>Lugari Diocese, Lugari</li>
          <li>Butere Mumias Diocese, Butere</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
