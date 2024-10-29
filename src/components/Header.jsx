// src/components/Header.jsx
import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    HSCEA
                </div>

                {/* Hamburger icon for mobile */}
                <button className="menu-toggle" onClick={toggleMenu}>
                    <div className="menu-icon"></div>
                </button>

                {/* Navigation links */}
                <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#vision-mission-ordinances">Vision & Mission</a></li>
                        <li><a href="#church-practices">Practices</a></li>
                        <li><a href="#ministries">Ministries</a></li>
                        <li><a href="#membership">Membership</a></li>
                        <li><a href="#ministers">Ministers</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
