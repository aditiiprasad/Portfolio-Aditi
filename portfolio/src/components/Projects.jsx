import React from 'react';
import './Projects.css';

import tt from './images/tt.png';
import cc from './images/cc.png';
import gupshup from './images/gupshup.png';

const Projects = () => {
  return (
    <div>
      <div className="glitch" data-text="Project">
        Project
      </div>
      <div className="projects-container">
         {/* Project 3 */}
         <div className="project">
          <div className="project-image">
            <img src={gupshup} alt="Project 3" />
          </div>
          <div className="project-details">
            <h5>Real-time Chat application(Ongoing Project)</h5>
            <p>◦ Developing a secure chat app with real-time messaging, typing indicators, and group chats.</p>
<p>◦ Leveraging Socket.io for 100% live communication and encrypted MongoDB storage.</p>
<p>◦ Tools & Technologies: MERN Stack, Socket.io, Chakra UI, Tailwind CSS.</p>
            <div className="project-buttons">
              
              <a href="https://github.com/aditiiprasad/GupShup" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            </div>
          </div>
        </div>

           {/* Project 2 */}
           <div className="project">
          <div className="project-image">
            <img src={cc} alt="Project 2" />
          </div>
          <div className="project-details">
          <h5>Markdown Editor with Live Preview</h5>
            <p>◦ A markdown editor with live preview, word count, and reading time calculation, boosting content creation efficiency
by 30%.</p>
<p>◦ Tested by 15+ users to ensure seamless functionality and a user-friendly experience.</p>
            <div className="project-buttons">
              <a href="https://code-canvas-eight.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Project</a>
              <a href="https://github.com/aditiiprasad/Code-Canvas" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            </div>
          </div>
        </div>  


        {/* Project 1 */}
        <div className="project">
          <div className="project-image">
            <img src={tt} alt="Project 1" />
          </div>
          <div className="project-details">
          <h5>YouTube playlist Length Calculator</h5>
            <p>◦ Engineered a playlist length calculator using the MERN stack, and Tailwind CSS processing URLs with 90% accuracy.</p>
            <p>◦ Integrated the YouTube API for dynamic data fetching, boosting engagement by 20%.</p>
            <div className="project-buttons">
              <a href="https://tube-timer.netlify.app/" target="_blank" rel="noopener noreferrer" className="btn">Live Project</a>
              <a href="https://github.com/aditiiprasad/Tube-Timer" target="_blank" rel="noopener noreferrer" className="btn">GitHub</a>
            </div>
          </div>
        </div>

     

       
      </div>
    </div>
  );
};

export default Projects;
