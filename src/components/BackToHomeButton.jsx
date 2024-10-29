import React from 'react';
import './BackToHomeButton.css'; // Optional: for custom styling

const BackToHomeButton = ({ navigateTo }) => {
    return (
        <button className="back-to-home-btn" onClick={() => navigateTo('Home')}>
            <span className="arrow">&#8679;</span> {/* Up arrow */}
            Back to Home
        </button>
    );
};

export default BackToHomeButton;
