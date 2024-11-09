// src/Taskbar.js

import React from 'react';
import './Taskbar.css';  // We will create Taskbar.css for styling
import { FaLinkedin, FaGithub, FaEnvelope, FaCode } from 'react-icons/fa';
import mailicon from "./assets/mailicon.png"
import instaicon from "./assets/instaicon.png"
import linkedinicon from "./assets/linkedinicon.png"
import githubicon from "./assets/githubicon.png"
import leetcode from "./assets/leetcode.png"


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
     

      <div className="social-media-links">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/aditiiprasad" target="_blank" rel="noopener noreferrer" title="LinkedIn">
        <img src={linkedinicon} alt="" />
        </a>

        {/* GitHub */}
        <a href="https://github.com/aditiiprasad" target="_blank" rel="noopener noreferrer" title="Github">
        <img src={githubicon} alt="" />
        </a>

        {/* LeetCode */}

        <a href="https://leetcode.com/aditiiprasad" target="_blank" rel="noopener noreferrer" title="leetcode">
        <img src={leetcode} alt="" />
        </a>

        {/* Email */}
        
        <a href="mailto:aditi03prasad@gmail.com" title="Email"> 
          <img src={mailicon} alt="" />
        </a>

        {/* instagram */}
        
        {/* <a href="https://instagram.com/aditiiprasad" title="Instagram">
          <img src={instaicon} alt="" />
        </a> */}

      </div>

      <button onClick={handleDownloadResume} className="button">Download Resume</button>
      <button onClick={Feedback} className=" feedback">Send Feedback</button>
      
    </header>
  );
}

export default Taskbar;
