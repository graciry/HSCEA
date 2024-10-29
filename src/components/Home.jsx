import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  const [showMembershipInfo, setShowMembershipInfo] = useState(false);
  const [showContactInfo, setShowContactInfo] = useState(false);

  const handleJoinUs = () => {
    setShowMembershipInfo(!showMembershipInfo); // Toggle membership information display
  };

  const handleConnectUs = () => {
    setShowContactInfo(!showContactInfo); // Toggle contact information display
  };

  return (
    <div className="home-container">
      <div className="overlay"></div> {/* Overlay element */}
      <div className="innercontainer">
        <div className="text-center mb-8">
          <h1 className="main-heading">Welcome to the Holy Spirit Church of East Africa</h1>
          <p className="sub-heading">Embracing the Power of the Holy Spirit</p>
        </div>

        {/* Buttons */}
        <div className="button-container">
          <button className="btn join-btn" onClick={handleJoinUs}>
            {showMembershipInfo ? 'Hide Membership Info' : 'Join Us'}
          </button>
          <button className="btn connect-btn" onClick={handleConnectUs}>
            {showContactInfo ? 'Hide Contact Info' : 'Connect with Us'}
          </button>
        </div>

        {/* Membership Information */}
        {showMembershipInfo && (
          <div className="membership-info">
            <h2>Become a Member</h2>
            <p>
              Join our church community and be a part of our mission to spread the Word of God. 
              As a member, you’ll enjoy the following benefits:
            </p>
            <ul>
              <li>Weekly worship services</li>
              <li>Access to church events and community groups</li>
              <li>Spiritual growth programs</li>
              <li>Opportunities to serve in various ministries</li>
              <li>Fellowship with a loving church family</li>
            </ul>
            <p>Contact us for more information on how to join.</p>
          </div>
        )}

        {/* Contact Information */}
        {showContactInfo && (
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>Feel free to reach out through the following channels:</p>
            <ul>
              <li>Phone: +254 721 460 367</li>
              <li>Email: <a href="mailto:collinsosore5@gmail.com">collinsosore5@gmail.com</a></li>
              <li>Facebook: <a href="https://facebook.com/groups/546863782119008/" target="_blank" rel="noopener noreferrer">Holy Spirit Church of E.A (Bukoyani HQ)</a></li>
              <li>Postal Address: P.O BOX 78, Maragoli (50300)</li>
            </ul>
            <p>We look forward to connecting with you!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
