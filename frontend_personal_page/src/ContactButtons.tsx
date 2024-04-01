import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import "./assets/contact_buttons.css"


function ContactButtons(){
    return(
        <>
            <div className='contact__buttons'>
                <div className='linkedin__contact'>
                    <a href='https://www.linkedin.com/in/carles-lloret-ramon-2b3b3ab3/'>
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        Connect on LinkedIn
                    </a>
                </div>
            </div>
        </>
    )
}

export default ContactButtons;