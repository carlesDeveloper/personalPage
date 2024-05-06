import "./assets/contact_buttons.css"
import LinkedInButton from './LinkedinButton';
import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContactButtons(){
    const url = 'https://www.linkedin.com/in/carles-lloret-ramon-2b3b3ab3/'
    const linkedinText = 'Connect on LinkedIn'

    const calendlyText = 'Schedule a meeting'
    const calendlyUrl = 'https://calendly.com/carles-lloret'

    const goBookAppointment = (URL) => {
        window.open(URL,'_blank', 'rel=noopener noreferrer')
    }
    return(
        <>
            <div className='contact__buttons'>
                <div className="calendly-div">
                    <button className="calendly-button" onClick={() => goBookAppointment(calendlyUrl)}>
                        {/* <img src={logoCalendly} id="calendly-logo"></img> */}
                        <FontAwesomeIcon icon={faCalendar} className="calendly-icon"></FontAwesomeIcon>
                        <span className="calendly-text">
                            {calendlyText}
                        </span>
                    </button>
                </div>
                <div className='linkedin__contact'>
                   <LinkedInButton 
                        url = {url}
                        text = {linkedinText}
                   />
                </div>
            </div>
        </>
    )
}

export default ContactButtons;