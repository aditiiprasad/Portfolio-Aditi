// src/Taskbar.js

import React, { useState } from 'react';
import './Taskbar.css';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import mailicon from "./assets/mailicon.png";
import linkedinicon from "./assets/linkedinicon.png";
import githubicon from "./assets/githubicon.png";
import leetcode from "./assets/leetcode.png";
import ModalFeed from './ModalFeed';  // Import the ModalFeed component

function Taskbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for opening the modal
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // Handler for closing the modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Handler for downloading resume
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/assets/resume.pdf';  // Update the link to your resume file
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <header className="top-bar">
      <div className="social-media-links">
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/aditiiprasad" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <img src={linkedinicon} alt="LinkedIn" />
        </a>
        {/* GitHub */}
        <a href="https://github.com/aditiiprasad" target="_blank" rel="noopener noreferrer" title="Github">
          <img src={githubicon} alt="Github" />
        </a>
        {/* LeetCode */}
        <a href="https://leetcode.com/aditiiprasad" target="_blank" rel="noopener noreferrer" title="LeetCode">
          <img src={leetcode} alt="LeetCode" />
        </a>
        {/* Email */}
        <a href="mailto:aditi03prasad@gmail.com" title="Email">
          <img src={mailicon} alt="Email" />
        </a>
      </div>

      <button onClick={handleDownloadResume} className="button">Download Resume</button>
      <button onClick={handleOpenModal} className="feedback">Send Feedback</button>

      {/* Feedback Modal */}
      <ModalFeed isOpen={isModalOpen} onClose={handleCloseModal} />
    </header>
  );
}

export default Taskbar;
