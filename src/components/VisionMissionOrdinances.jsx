import React from 'react';
import './VisionMissionOrdinances.css';

const ordinances = [
  {
    id: 1,
    title: 'Baptism',
    icon: '🛁', // Emoji icon for simplicity; replace with image if needed
    message: 'A sacred act of initiation into the faith community, symbolizing purification and rebirth.'
  },
  {
    id: 2,
    title: 'Dedication',
    icon: '🙏', // Emoji icon for simplicity; replace with image if needed
    message: 'A ceremonial dedication of children to the Lord, affirming their place in the faith and community.'
  },
  {
    id: 3,
    title: 'Forty Days',
    icon: '⏳', // Emoji icon for simplicity; replace with image if needed
    message: 'A period of reflection and spiritual renewal, representing a time of preparation and growth in faith.'
  }
];

const VisionMissionOrdinances = () => {
  return (
    <section className="vision-mission-ordinances">
      <div className="vision-mission-container">
        <div className="vision slide-in">
          <h2>Our Vision</h2>
          <p>
            To encourage our members to depend on the power of the Holy Spirit who strengthens and guides to spread the Word of God throughout the world.
          </p>
          <p>
            To enable believers to worship God, to grow in their knowledge of Him and in the practice of faith, love, and fellowship with other believers.
          </p>
        </div>
        <div className="mission slide-in">
          <h2>Our Mission</h2>
          <ul>
            <li>Healing, preaching, through prayer and fasting, and repentance</li>
            <li>Church planting and teaching</li>
            <li>Enabling people to meet their spiritual and physical needs including education, good health, and through the alleviation of poverty and by addressing other social needs as they emerge.</li>
            <li>Making public statements on matters of concern to the church and community</li>
          </ul>
        </div>
      </div>
      <div className="ordinance-boxes">
        {ordinances.map(ordinance => (
          <div key={ordinance.id} className="ordinance-card slide-in">
            <div className="ordinance-icon">{ordinance.icon}</div>
            <div className="overlay-content">
              <h3>{ordinance.title}</h3>
              <p>{ordinance.message}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionOrdinances;
