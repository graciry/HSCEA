import React from 'react';
import './About.css';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="background-image-container">
        <div className="about-overlay">
          <div className="about-content">
            <div className="text-content">
              <h2>About Our Church</h2>
              <h3>Our Faith</h3>
              <p>We believe in one Triune God—Father, Son, and Holy Spirit—and worship the Father through Jesus Christ, revealed by the Holy Spirit. We uphold Christ's atoning death, resurrection, and salvation by grace through faith, and strive to spread God’s kingdom until Christ's return (Matthew 28:18-20).</p>
              <p>We affirm the authority of the Old and New Testaments and commit to aligning our church's practices with Scripture as revealed by the Holy Spirit.</p>
              <p>We believe the Holy Spirit, as promised by Jesus (John 14:16, 26), empowers believers with various gifts such as wisdom, knowledge, faith, healing, tongues, and interpretation of tongues. These gifts are meant to build up the Body of Christ and include roles like apostles, prophets, teachers, and healers (1 Cor. 12:1-3). We recognize and validate these gifts if they align with Scripture.</p>
              <p>We practice open confession and repentance of sins (Eph. 4:31) during worship and fellowship. We also believe in prayer for the sick, forgiveness of sins, spiritual strengthening, expelling evil spirits, and health restoration.</p>
              <p>We affirm the Apostles' Creed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
