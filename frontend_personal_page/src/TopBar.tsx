import { useContext } from 'react'
import { RouterContext } from './context/routerContext';
import "./assets/topbar.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

function TopBar(){
    const { activeAbout, setActiveAbout,
        activeExperience, setActiveExperience,
        activeSkills, setActiveSkills,
        activeContact, setActiveContact} = useContext(RouterContext)

    // const [menuOpen, setMenuOpen] = useState<boolean>(false)
    
    // const toggleMenu = (manuOpen: boolean) => {
    //     setMenuOpen(!menuOpen)
    // } 
    const goToUrl = (url: string) => {
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
            <div className='topbar sticky'>
                {/* <button className="burguer-button" onClick={() => toggleMenu(menuOpen)}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button> */}
                {/* {menuOpen ? ( */}
                <ul>
                    <li className={activeAbout ? 'active' : ''} onClick={() => goToUrl("about")}>About</li>
                    <li className={activeExperience ? 'active' : ''} onClick={() => goToUrl("experience")}>Experience</li>
                    <li className={activeSkills ? 'active' : ''} onClick={() => goToUrl("skills")}>Skills</li>
                    <li className={activeContact ? 'active' : ''} onClick={() => goToUrl("contact")}>Contact</li>
                </ul>
                {/* ): null} */}
                
            </div>
            
        </>
    )
}

export default TopBar;