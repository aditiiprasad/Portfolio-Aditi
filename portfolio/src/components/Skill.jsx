import React from 'react'
import './Skill.css'
import s1 from './images/s1.png'
import s2 from './images/s2.png'
import skill from './images/skill.png'
import java from './images/java.png'
import c from './images/c.png'
import js from './images/js.png'
import html from './images/html.png'
import css from './images/css.png'
import node from './images/node.png'
import react from './images/react.png'
import bootstrap from './images/Bootstrap.png'
import tailwind from './images/tailwind.png'
import express from './images/express.png'
import mongo from './images/mongo.png'
import sql from './images/sql.png'
import git from './images/git.png'
import github from './images/github.png'
import pm from './images/postman.png'
import clouds from './images/cloud.mp4'



const Skill = () => {
  return (
    <div className='skill'>
      <div className="skills-container">

      <img src={s1} className="skill-image s1" alt="Skill 1" />
      <img src={skill} className="skill-image skill-main" alt="Skill Main" />
      <img src={s2} className="skill-image s2" alt="Skill 2" />

      </div>
     <div className='centre'>
      <div className='skills'>
  <video className="skills-bg-video" autoPlay muted loop>
    <source src={clouds} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="skills-content">
    <div className="languages-container">
      Languages
      <div className='jjc'>
        <img src={java} alt="Java" />
        <img src={js} alt="JavaScript" />
        <img src={c} alt="C" />
      </div>
    </div>
    <div className="languages-container">
      Full Stack Development
      <div className='jjc'>
        <img src={html} alt="HTML" />
        <img src={css} alt="CSS" />
        <img src={bootstrap} alt="Bootstrap" />
        <img src={tailwind} alt="Tailwind" />
        <img src={react} alt="React" />
        <img src={node} alt="Node.js" />
        <img src={express} alt="Express" />
        <img src={mongo} alt="MongoDB" />
        <img src={sql} alt="SQL" />
      </div>
    </div>
    <div className="languages-container">
      Tools
      <div className='jjc'>
        <img src={git} alt="Git" />
        <img src={github} alt="GitHub" />
        <img src={pm} alt="Postman" />
      </div>
    </div>
  </div>
</div>

</div>  
     
    </div>
  )
}

export default Skill
