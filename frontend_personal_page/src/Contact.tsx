import ContactButtons from './ContactButtons';
import "./assets/contact.css"
import PersonalLogo from '../public/images/imagenCV.jpg'

function Contact() {
    return(
        <>
            <div className="contact__content" id='contact'>
                <div className="contact__title">Let's connect</div>
                <div className="contact__modal">
                    <div className="personal__logo">
                        <img src={PersonalLogo}></img>
                    </div>
                    <div className="personal__name">Carles Lloret</div>
                    <div className="personal__description">Thanks for visiting! Send me a connection request on Linkedin!</div>
                    <ContactButtons />
                </div>
            </div>
            

        </>
    )
}

export default Contact;