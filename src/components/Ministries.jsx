import React from 'react';
import './Ministries.css';

const Ministries = () => {
  return (
    <section className='Ministries-section'>
      <h1>Ministries Of The Church</h1>
      <div className="ministries-timeline">
        <div className="container left-container">
          <div className="text-box">
            <h2>General Ministries</h2>
            <small>1-3 Categories</small>
            <p>
              (1) The Pastoral Ministry: Deacons, Pastors, Senior Pastors, Bishops, Archbishops. <br />
              (2) The Administrative Ministry: Secretaries (including General Secretary), Treasurers (including National Treasurer), Trustees.<br />
              (3) The Spiritual Ministry: Prophets, Priests, Apostles, Teachers, Evangelists.
            </p>
            <span className="arrow left-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <h2>Specific Ministries</h2>
            <small>1-2 Categories</small>
            <p>
              (1) Women Ministries <br />
              (2) Youth Ministries
            </p>
            <span className="arrow right-arrow"></span>
          </div>
        </div>
        <div className="container left-container">
          <div className="text-box">
            <h2>Oath of Service</h2>
            <small>1 Category</small>
            <p>
              New ministers take an oath declaring their faith, swearing to uphold the church's rules and obey the authorities.
            </p>
            <span className="arrow left-arrow"></span>
          </div>
        </div>
        <div className="container right-container">
          <div className="text-box">
            <h2>Transfers of Ministers</h2>
            <small>1-2 Categories</small>
            <p>Transfers between ministries or locations.</p>
            <span className="arrow right-arrow"></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ministries;
