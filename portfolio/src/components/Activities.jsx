import React from "react";
import "./Activities.css"; // Add styling here
import nss from './images/nss.jpg'
import ak from "./images/2.jpg"

const Activities = () => {
  return (
    <div className="activities">
      <h2 className="activities-heading">Extra Curriculars</h2>
      <div className="activities-container">
        <div className="activities-image">
          <img
            src={nss}
            alt="Volunteer Work"
            className="circle-image"
          />
        </div>
        <div className="activities-content">
          <h4 className="activities-title">Volunteer @ National Service Scheme</h4>
          <p className="act-year">2023-present</p>
          <p className="activities-description">
          Contributed to educational initiatives, positively impacting 50+ students in
          Jharkhand, India by bridging the learning gap.
          </p>
        </div>
      </div>
      <div className="activities-container">
        <div className="activities-image">
          <img
            src={ak}
            alt="Volunteer Work"
            className="circle-image"
          />
        </div>
        <div className="activities-content">
          <h4 className="activities-title">Member @ Aakshar (Literary Society of BIT Mesra)</h4>
          <p className="act-year">2024-present</p>
          <p className="activities-description">
          ◦ Directed content creation strategies, growing engagement by 30% across social media platforms. </p>
          <p className="activities-description">◦ Hosted and anchored major college fests and literary events, engaging an audience of 500+ students.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
