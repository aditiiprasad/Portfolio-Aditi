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


const Skill = () => {
  return (
    <div className='skill'>
      <div className="skills-container">

      <img src={s1} className="skill-image s1" alt="Skill 1" />
      <img src={skill} className="skill-image skill-main" alt="Skill Main" />
      <img src={s2} className="skill-image s2" alt="Skill 2" />

      </div>
      
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
        <img src={html} alt="Java" />
        <img src={css} alt="JavaScript" />
        <img src={react} alt="C" />
        <img src={node} alt="C" />
        </div>
      </div>
      <div className="languages-container">
       Tools
       <div className='jjc'>
        <img src={java} alt="Java" />
        <img src={js} alt="JavaScript" />
        <img src={c} alt="C" />
        </div>
      </div>


      
     
    </div>
  )
}

export default Skill
