// src/Taskbar.js

import React from 'react';
import './Taskbar.css';  // We will create Taskbar.css for styling
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';

function Taskbar() {
  // Handler for downloading resume (example link, replace with actual path)
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/path-to-your-resume.pdf';  // Update the link to your resume file
    link.download = 'resume.pdf';  // The default name for the downloaded file
    link.click();
  };

  // Handler for "Connect with Me" button
  const Feedback = () => {
    
  };

//   const handleConnectWithMe = () => {
//     window.location.href = 'mailto:your-email@example.com';  // Replace with your email
//   };

  

  return (
    <header className="top-bar">
      <button onClick={handleDownloadResume} className="button">Download Resume</button>

      <div className="social-media-links">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>

        {/* LeetCode */}
        <a href="https://leetcode.com/your-leetcode-profile" target="_blank" rel="noopener noreferrer">
          <FaCode className="icon" />
        </a>

        {/* Email */}
        <a href="mailto:your-email@example.com">
          <FaEnvelope className="icon" />
        </a>
      </div>


      <button onClick={Feedback} className="button">Send Feedback</button>
      
    </header>
  );
}

export default Taskbar;
