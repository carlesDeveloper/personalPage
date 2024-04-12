import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { RouterContext } from './context/routerContext';
import "./assets/topbar.css"

function TopBar(){
    const { activeAbout, setActiveAbout,
        activeExperience, setActiveExperience,
        activeSkills, setActiveSkills,
        activeContact, setActiveContact} = useContext(RouterContext)

    const goToUrl = (url) => {
        window.location.href = "#" + url;
        
        setActiveAbout(false)
        setActiveExperience(false)
        setActiveSkills(false)
        setActiveContact(false)

        if(url === "about"){
            setActiveAbout(true)
        } else if(url === "experience"){
            setActiveExperience(true)
        } else if(url === "skills"){
            setActiveSkills(true)
        }else {
            setActiveContact(true)
        }
    };

    return(
        <>
            <div className='topbar'>
                <ul>
                    {/* <Link to="/#about">About</Link>
                    <Link to="/#experience">Experience</Link>
                    <Link to="/#skills">Skills</Link>
                    <Link to="/#contact">Contact</Link> */}
                    <li className={activeAbout ? 'active' : ''} onClick={(e) => goToUrl("about")}>About</li>
                    <li className={activeExperience ? 'active' : ''} onClick={(e) => goToUrl("experience")}>Experience</li>
                    <li className={activeSkills ? 'active' : ''} onClick={(e) => goToUrl("skills")}>Skills</li>
                    <li className={activeContact ? 'active' : ''} onClick={(e) => goToUrl("contact")}>Contact</li>
                </ul>
            </div>
            
        </>
    )
}

export default TopBar;