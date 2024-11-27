import React from "react";
import "./Footer.css";
import clou from './assets/clou.webm'; // Ensure the video file is correctly placed

const Footer = () => {
  return (
    
      <div className="footer-container">
        <video className="skills-bg-video" autoPlay muted loop>
          {/* Add both formats for better compatibility */}
          <source src={clou} type="video/webm" />
          <source src="./assets/clou.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="footer-content">
          <h2 className="footer-heading">Thank you for visiting!</h2>
          <div className="footer-buttons">
            <a href="https://www.linkedin.com/" target="_blank" className="footer-button">LinkedIn</a>
            <a href="https://github.com/" target="_blank" className="footer-button">GitHub</a>
            <a href="https://leetcode.com/" target="_blank" className="footer-button">LeetCode</a>
            <a href="mailto:your-email@gmail.com" className="footer-button">Gmail</a>
            {/* <a href="/resume.pdf" target="_blank" className="footer-button">Resume</a>
            <a href="/feedback" className="footer-button">Feedback</a> */}
          </div>
        </div>
      </div>

     
    
  );
};

export default Footer;
