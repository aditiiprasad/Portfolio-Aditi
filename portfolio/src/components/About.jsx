import React ,{ useEffect }from 'react';
import './About.css';
import aboutimg from "./images/about.png";


const About = () => {

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         if (entry.isIntersecting) {
  //           entry.target.classList.add('in-view');
  //         }
  //       });
  //     },
  //     { threshold: 0.1 }
  //   );

  //   const content = document.querySelector('.abtcontent');
  //   if (content) observer.observe(content);

  //   return () => observer.disconnect();
  // }, []);



  return (
    <div className='abtcontainer'>
     
      <div className='abtcontent'>
        <p>Aditi is a BTech Computer Science student at BIT Mesra with a strong interest in web development, specializing in the MERN stack. Known for a passion for creating, she actively contributes to collaborative projects and embrace challenges. Her diverse schooling across India has fostered adaptability and expanded her perspective. Focused on crafting engaging web experiences, she is eager to work alongside like-minded individuals.</p>
      </div>
    
      <img src={aboutimg} className="abtimage" alt="About" />
      
    </div>
  );
};

export default About;
