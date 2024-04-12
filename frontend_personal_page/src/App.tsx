import React, { useState, useEffect, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Strength from './Strength'
import TopBar from './TopBar'
import About from './About'
import { RouterContext } from './context/routerContext'



function App() {
  const {activeAbout, setActiveAbout,
    activeExperience, setActiveExperience,
    activeSkills, setActiveSkills,
    activeContact, setActiveContact} = useContext(RouterContext)

  useEffect(() => {
    const handleScroll = () => {
        
        setActiveAbout(false)
        setActiveExperience(false)
        setActiveSkills(false)
        setActiveContact(false)

        const scrollTop = window.scrollY;
        if(scrollTop < 880){
            setActiveAbout(true)
        } else if(scrollTop < 1700){
            setActiveExperience(true)
        } else if(scrollTop < 3300){
            setActiveSkills(true)
        }else{
            setActiveContact(true)
        }
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
        
        <TopBar />
        {/* <br /> */}
        <About />
        <Experience />
        <Skills />
        <Strength />
        <Contact />
    </>
  )
}

export default App
