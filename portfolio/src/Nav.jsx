import React, { useRef } from 'react';
import './Nav.css';

import About from './components/About';
import Edu from './components/Edu';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Pprojects from './components/Pprojects'
import PixelArt from './components/PaintCanvas'
import Footer from './Footer'
import Quiz from './components/Quiz'

const Nav = () => {
  const AboutRef = useRef(null);
  const EduRef = useRef(null);
  const SkillRef = useRef(null);
  const ProjectsRef = useRef(null);
  const ActivitiesRef = useRef(null);

  const scrollToSection = (section) => {
    switch (section) {
      case 'about':
        AboutRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'education':
        EduRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'skills':
        SkillRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'projects':
        ProjectsRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'activities':
        ActivitiesRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  };

  return (
    <div className="app-1">
      <div className="navbar-1">
        <button className="navbar-btn-1" onClick={() => scrollToSection('about')}>Go to About</button>
        <button className="navbar-btn-2" onClick={() => scrollToSection('education')}>Go to Education</button>
        <button className="navbar-btn-3" onClick={() => scrollToSection('skills')}>Go to Skills</button>
        <button className="navbar-btn-4" onClick={() => scrollToSection('projects')}>Go to Projects</button>
        <button className="navbar-btn-5" onClick={() => scrollToSection('activities')}>Go to Activities</button>
      </div>

      <div ref={AboutRef} className="about-section-1">
        <About />
      </div>
      <div ref={EduRef} className="education-section-1">
        <Edu />
      </div>
      <div ref={SkillRef} className="skills-section-1">
        <Skill />
        <PixelArt/>
      </div>
      <div ref={ProjectsRef} className="projects-section-1">
        <Projects />
        <Pprojects/>
        
       
      </div>
      <div ref={ActivitiesRef} className="activities-section-1">
        <Activities />
        <Quiz/>
        
      </div>
    </div>
  );
};

export default Nav;
