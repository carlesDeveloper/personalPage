import { useEffect, useContext } from 'react'
import './App.css'
import Skills from './Skills'
import Experience from './Experience'
import Contact from './Contact'
import Strength from './Strength'
import TopBar from './TopBar'
import About from './About'
import { RouterContext } from './context/routerContext'



function App() {
  const {setActiveAbout,
    setActiveExperience,
    setActiveSkills,
    setActiveContact} = useContext(RouterContext)

  useEffect(() => {
    const handleScroll = () => {
        
        setActiveAbout(false)
        setActiveExperience(false)
        setActiveSkills(false)
        setActiveContact(false)

        const scrollTop = window.scrollY;
        if(scrollTop < 780){
            setActiveAbout(true)
        } else if(scrollTop < 1600){
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
