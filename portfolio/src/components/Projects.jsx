import React from 'react'
import './Projects.css'

import tt from './images/tt.png'
import cc from './images/cc.png'
import gupshup from './images/gupshup.png'



const Projects = () => {
  return (
    <div>
        <div className="glitch" data-text="Project">
      Project
       </div>
    <div className="projects-container">
      {/* Project 1 */}
      <div className="project">
        <div className="project-image">
          <img src={tt} alt="Project 1" />
        </div>
        <div className="project-details">
          <h3>Project 1: Task Tracker</h3>
          <p>A web app to track your daily tasks and productivity.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project">
        <div className="project-image">
          <img src={cc} alt="Project 2" />
        </div>
        <div className="project-details">
          <h3>Project 2: Chat Companion</h3>
          <p>An AI-based chatbot for customer support.</p>
        </div>
      </div>

      {/* Project 3 */}
      <div className="project">
        <div className="project-image">
          <img src={gupshup} alt="Project 3" />
        </div>
        <div className="project-details">
          <h3>Project 3: Gupshup</h3>
          <p>A fun and interactive chat platform for friends.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
