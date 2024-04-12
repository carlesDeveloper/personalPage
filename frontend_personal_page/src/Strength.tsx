import React, { useContext } from 'react'
import "./assets/clifton_strength.css"
import { RouterContext } from './context/routerContext';

function Strength() {
    const { activeSkills } = useContext(RouterContext)
    return(
        <>
            <div className="clifton__strength__section" id='strength'>
                <p className='title__section'>Clifton Strengths</p>
            
                <div className="strength__skills">
                    <div className={`skill strategy_thinking ${activeSkills ? 'skill1' : ''}`}>Analytical</div>
                    <div className={`skill strategy_thinking ${activeSkills ? 'skill2' : ''}`}>Learner</div>
                    <div className={`skill influencing ${activeSkills ? 'skill3' : ''}`}>Communication</div>
                    <div className={`skill relationship_building ${activeSkills ? 'skill4' : ''}`}>Achiever</div>
                    <div className={`skill relationship_building ${activeSkills ? 'skill5' : ''}`}>Empathy</div>
                    <div className={`skill relationship_building ${activeSkills ? 'skill6' : ''}`}>Positivity</div>
                </div>
            </div>
        </>
    )
}

export default Strength;