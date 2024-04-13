import "./assets/contact_buttons.css"
import LinkedInButton from './LinkedinButton';


function ContactButtons(){
    const url = 'https://www.linkedin.com/in/carles-lloret-ramon-2b3b3ab3/'
    const text = 'Connect on LinkedIn'
    return(
        <>
            <div className='contact__buttons'>
                <div className='linkedin__contact'>
                   <LinkedInButton 
                        url = {url}
                        text = {text}
                   />
                </div>
            </div>
        </>
    )
}

export default ContactButtons;