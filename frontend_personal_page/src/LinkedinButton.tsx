import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ButtonInterface } from './interfaces/ButtonInterface';


const LinkedInButton = ({ url, text }:ButtonInterface ) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="linkedin-button"
    >
       <FontAwesomeIcon icon={faLinkedinIn} /> 
      {text}
    </a>
  );
};

export default LinkedInButton;