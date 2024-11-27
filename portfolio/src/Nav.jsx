import React, { useRef, useState } from 'react';
import './Nav.css';

import About from './components/About';
import Edu from './components/Edu';
import Skill from './components/Skill';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Pprojects from './components/Pprojects';
import PixelArt from './components/PaintCanvas';
import Footer from './Footer';
import Quiz from './components/Quiz';

const Nav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
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
    setDrawerOpen(false); // Close drawer after navigation
  };

  return (
    <div className="app-1">
      {/* Drawer Toggle Button */}
      <button className="drawer-toggle-btn" onClick={() => setDrawerOpen(!drawerOpen)}>
        MENU
      </button>

      {/* Drawer */}
      <div className={`drawer-1 ${drawerOpen ? 'open' : ''}`}>
        <button className="drawer-btn" onClick={() => scrollToSection('about')}>About</button>
        <button className="drawer-btn" onClick={() => scrollToSection('education')}>Education</button>
        <button className="drawer-btn" onClick={() => scrollToSection('skills')}>Skills</button>
        <button className="drawer-btn" onClick={() => scrollToSection('projects')}>Projects</button>
        <button className="drawer-btn" onClick={() => scrollToSection('activities')}>Extra Curriculars</button>
      </div>

      {/* Sections */}
      <div ref={AboutRef} className="about-section-1">
        <About />
      </div>
      <div ref={EduRef} className="education-section-1">
        <Edu />
      </div>
      <div ref={SkillRef} className="skills-section-1">
        <Skill />
        <PixelArt />
      </div>
      <div ref={ProjectsRef} className="projects-section-1">
        <Projects />
        <Pprojects />
      </div>
      <div ref={ActivitiesRef} className="activities-section-1">
        <Activities />
        <Quiz />
      </div>
    </div>
  );
};

export default Nav;
