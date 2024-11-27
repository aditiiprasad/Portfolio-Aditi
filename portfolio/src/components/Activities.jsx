import React from "react";
import "./Activities.css"; // Add styling here
import nss from './images/nss.jpg'


const Activities = () => {
  return (
    <div className="activities">
      <h2 className="activities-heading">Volunteer Work</h2>
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
    </div>
  );
};

export default Activities;
