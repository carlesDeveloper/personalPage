import React from 'react'
import "./assets/about.css"
import ContactButtons from './ContactButtons';

function About() {
    return(
        <>
            <div className='title__page'>
                <h2>About me</h2>
            </div>
            <div className='content__page'>
                <p>Web Developer with 5 years of experience, responsible for creating software solutions. </p>
                <p>Possesses advanced proficiency in JavaScript, React JS, Docker, R, Python, 
                    and expertise in the Linux operating system. Focused on problem-solving, meticulous 
                    attention to detail, effective time management, and accustomed to collaborative teamwork. </p>
                <p>Holds a degree in Business Statistics and a Master's in Web analytics, 
                    combining my two major passions—software development and data.</p>
            </div>
            <ContactButtons />
        </>
    )
}

export default About;