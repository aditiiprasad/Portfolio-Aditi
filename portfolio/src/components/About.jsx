import React from 'react'
import './About.css'
import aboutimg from "./images/about.png"

const About = () => {
  return (
    <div>
     <img src={aboutimg} className="aboutimg" alt="About" />
    </div>
  )
}

export default About
