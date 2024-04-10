import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Strength from './Strength'
import TopBar from './TopBar'
import About from './About'

function App() {

  return (
    <>
      <TopBar />
      <br />
      <About />
      
      <Skills />
      <Strength />
      {/* 
      <Skills />
      
      <Contact /> */}
    </>
  )
}

export default App
