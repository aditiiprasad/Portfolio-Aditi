import React from 'react'
import './Banner.css'
import ReactTypingEffect from 'react-typing-effect';
import { FaMapMarkerAlt } from "react-icons/fa";
import song from "./images/song.mp3"


const Banner = () => {


  return (

    <div className='banner'>
    
     <div className='photos'>
     <div className='frame'>
        <div className='photo'>
            
        </div>
     </div>

     </div>
      <div className='info'>

            <h5 className='type'>
              <ReactTypingEffect
                text={["Programmer", "Aspiring Software Developer", "MERN Developer"]}
                speed={100}
                eraseSpeed={100}
                eraseDelay={2000}
                typingDelay={500}
              />
            </h5>
            <h4 className='name'>Aditi</h4>
            <div className='bang' style={{ display: "flex", alignItems: "center", fontSize: "18px" }}>
             <FaMapMarkerAlt className='iconloc'  />
             <span className='bng'>Bangalore</span>
             </div>
            <p className='intro'>Welcome! Let's embark on a journey through this Retro themed portfolio. Ready to collaborate?</p>
            <div className="audio-container">
            <audio className="custom-audio" controls autoPlay loop >
                  <source src={song} type="audio/mp3" />
                  Your browser does not support the audio element.
            </audio>
          </div>


      </div>
      


    </div>
  )
}

export default Banner
