import React from 'react'
import "./assets/topbar.css"

function TopBar(){
    return(
        <>
            <div className='topbar'>
                <ul>
                    <li className='active'>About</li>
                    <li>Experience</li>
                    <li>Skills</li>
                    <li>Contact</li>
                </ul>
            </div>
            
        </>
    )
}

export default TopBar;