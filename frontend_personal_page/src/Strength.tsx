import React from 'react'
import "./assets/clifton_strength.css"

function Strength() {
    return(
        <>
            <div className="clifton__strength__section" id='strength'>
                <p className='title__section'>Clifton Strengths</p>
            
                <div className="strength__skills">
                    <div className="skill strategy_thinking skill1">Analytical</div>
                    <div className="skill strategy_thinking skill2">Learner</div>
                    <div className="skill influencing skill3">Communication</div>
                    <div className="skill executing skill4">Achiever</div>
                    <div className="skill relationship_building skill5">Empathy</div>
                    <div className="skill relationship_building skill6">Positivity</div>
                </div>
            </div>
        </>
    )
}

export default Strength;