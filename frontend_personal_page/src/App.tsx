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
import RouterProvider from './context/routerContext'


function App() {

  return (
    <>
        <RouterProvider>
          <TopBar />
          <br />
          <About />
          <Experience />
          <Skills />
          <Strength />
          <Contact />
        </RouterProvider>
    </>
  )
}

export default App
