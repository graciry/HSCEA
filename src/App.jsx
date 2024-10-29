// src/App.jsx

import React, { useState } from 'react';
import Home from './components/Home';
import About from './components/About';
import VisionMissionOrdinances from './components/VisionMissionOrdinances';
import ChurchPractices from './components/ChurchPractices';
import Ministries from './components/Ministries';
import Membership from './components/Membership';
import Contact from './components/Contact';
import Header from './components/Header';
import Ministers from './components/Ministers';





const App = () => {

    return (
        <div className="flex flex-col min-h-screen">
    
            <Header />
            <main className="flex-grow">




                <section id="home">
                    <Home />
                </section>
                <section id="about">
                    <About />
                </section>
                <section id="vision-mission-ordinances">
                    <VisionMissionOrdinances />
                </section>
                <section id="church-practices">
                    <ChurchPractices />
                </section>
                <section id="ministries">
                    <Ministries />
                </section>
                <section id="membership">
                    <Membership />
                </section>
                <section id="ministers">
                    <Ministers />
                </section>
                <section id="contact">
                    <Contact />
                </section>
            </main>
            <footer className="bg-gray-800 text-white p-4 text-center">
                &copy; 2024 Holy Spirit Church
            </footer>
           


        </div>
    );
};

export default App;
