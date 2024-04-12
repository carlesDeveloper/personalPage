import React from 'react'
import "./assets/clifton_strength.css"

function Strength() {
    return(
        <>
            <div className="clifton__strength__section" id='strength'>
                <p className='title__section'>Clifton Strengths</p>
            
                <div className="strength__skills">
                    <div className="skill strategy_thinking">Analytical</div>
                    <div className="skill strategy_thinking">Learner</div>
                    <div className="skill influencing">Communication</div>
                    <div className="skill executing">Achiever</div>
                    <div className="skill relationship_building">Empathy</div>
                    <div className="skill relationship_building">Positivity</div>
                </div>
            </div>
        </>
    )
}

export default Strength;