import React from 'react'
import './Edu.css';
import busimg from './images/edu.png'
import bit from './images/bit.png'
import kv from './images/kv.png'
import revbus from './images/revbus.png'

const Edu = () => {
  return (
    <div className='edu'>
      <div className='bus'>
      <img src={busimg} className="busimg" alt="edu" />
     
      </div>
      <div className='bitinfo'>
      <div className='bit'>
    <p className="college-name">Birla Institute of Technology, Mesra</p>
    <p className="year">2023-2027</p>
    <p className="degree">Btech in Computer Science</p>
      </div>
        <div className='bitimg'>
        <img src={bit} className="biti" alt="bit" />
        </div>
      </div>
      <div className='bitinfo'>
     
        <div className='bitimg'>
        <img src={kv} className="biti" alt="bit" />
        </div>
        <div className='bit'>
    <p className="college-name">Kendriya Vidyalaya</p>
   
    <p className="degree">PCMB</p>
      </div>
      </div>
      <div className='bus'>
      <img src={revbus} className="revbusimg" alt="edu" />
     
      </div>
   </div>
  )
}

export default Edu
