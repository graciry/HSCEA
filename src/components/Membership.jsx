import React from 'react';
import './Membership.css'; // Import the CSS file

const Membership = () => {
  return (
    <section className="membership-section">
      <div className="intro">
        <h2>Membership of the Church - Uanachama</h2>
        <p className="section-intro">One can become a member of the church in two ways:</p>
      </div>
      <div className="membership-types">
        <h3>Methods of Membership</h3>
        <ul className="membership-list">
          <li>By birth: As a child to parents of whom at least one is a full member of the church.</li>
          <li>By public declaration: Making, as an adult of 18 years or older, a public confession of faith and intent to join the church.</li>
        </ul>

        <h3>Categories of Membership</h3>
        <ul className="membership-list">
          <li>
            <strong>Junior Membership:</strong> Children under the age of 18 are registered as junior members and must make a voluntary declaration of faith at 18 to become full members.
          </li>
          <li>
            <strong>Full Membership:</strong> Adults over 18 shall be full members after making a public confession of faith and being baptized according to the Scriptures.
          </li>
        </ul>

        <h3>Contributions of Members</h3>
        <p>Every active member is encouraged to contribute according to their means, through the following:</p>
        <ul className="contribution-list">
          <li><strong>Tithe:</strong> 10% every month of earnings</li>
          <li><strong>Offerings:</strong> Voluntary offerings at every church service</li>
          <li><strong>Harvest (Mavuno):</strong> An annual offering by grains, kind, or cash</li>
          <li><strong>Kipawa:</strong> An annual contribution to the church budget</li>
          <li><strong>Any other offering:</strong> As agreed by the Governing Council</li>
        </ul>

        <h3>Conditions for Membership</h3>
        <p>Any member who falls into arrears with tithes or is absent for more than six months may be removed from active membership, as decided by the Assembly Committee.</p>
      </div>
    </section>
  );
};

export default Membership;
