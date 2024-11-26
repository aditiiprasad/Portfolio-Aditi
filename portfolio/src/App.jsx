import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskbar from './Taskbar'
import Title from './Title'
import Banner from './components/Banner'
import About from './components/About'
import Edu from './components/Edu'

import Skill from './components/Skill'
import Projects from './components/Projects'
import Pprojects from './components/Pprojects'
import PixelArt from './components/PaintCanvas'
import Footer from './Footer'


function App() {
  

  return (
    <>
      <Title/>
      <Taskbar />
      <Banner/>
      <About/>
      <Edu/>
     
      <Skill/>
      <PixelArt/>
      <Projects/>
      <Pprojects/>
      <Footer/>
    </>
  )
}

export default App
