import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Taskbar from './Taskbar'
import Title from './Title'
import Banner from './components/Banner'
import About from './components/About'

function App() {
  

  return (
    <>
      <Title/>
      <Taskbar />
      <Banner/>
      <About/>
    </>
  )
}

export default App
