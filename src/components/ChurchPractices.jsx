import React from 'react';
import './ChurchPractices.css'; // Import the CSS file for styling
import { FaFlag, FaCross, FaMusic, FaPray } from 'react-icons/fa'; // Import icons from React Icons
import { GiClothes } from 'react-icons/gi'; // Another icon from React Icons

const practices = [
  {
    id: 1,
    title: 'Flag',
    icon: <FaFlag />,
    color: '#FFD700', // Gold
    description: 'The flag of the church is red (upper half) and green (lower half), with a white border and a white cross at the centre. The significance of the flag is to be found in Numbers 2: 2. When a local church (kijiji) is officially recognised, it shall be given a flag as a sign of its acceptance as a congregation of the church.'
  },
  {
    id: 2,
    title: 'Robes',
    icon: <GiClothes />,
    color: '#8A2BE2', // Blue Violet
    description: 'The basic robe(kanzu) the believer wears for worship and church events is white with a large red cross on the chest/breast. White hats, turbans, or headscarves are also worn with a red cross. These clothes symbolise the purity and holiness of the believer, who has been washed by the blood of Jesus who died on the cross for us.'
  },
  {
    id: 3,
    title: 'Cross',
    icon: <FaCross />,
    color: '#FF6347', // Tomato Red
    description: 'A wooden cross painted in red and white may be given to mature leaders whose spirituality has been tested and proved over time.This cross is a symbol of the Holy Spirit.'


  },
  {
    id: 4,
    title: 'Music',
    icon: <FaMusic />,
    color: '#32CD32', // Lime Green
    description: ' Worship is conducted with singing, and dancing and the use of drums, tambourines, and percussion instruments (Psalms 150: 4-6).'
  },
  {
    id: 5,
    title: 'Prayer & Fasting',
    icon: <FaPray />,
    color: '#1E90FF', // Dodger Blue
    description: 'The church values prayer and fasting as a means of drawing closer to God, discerning his will for our lives, and subduing the fiesh.'
  }
];

const ChurchPractices = () => {
  return (
    <section className="practices-section">
      <h2 className="section-title">Church Practices</h2>
      <h3 className='section-content'>We use the following signs and symbols of our faith in the life of our church:</h3>
      <div className="practices-container">
        {practices.map((practice) => (
          <div key={practice.id} className="practice-card" style={{ backgroundColor: practice.color }}>
            <div className="icon-container">{practice.icon}</div>
            <h3>{practice.title}</h3>
            <p>{practice.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChurchPractices;
