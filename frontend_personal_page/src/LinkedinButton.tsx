import React from 'react';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const LinkedInButton = ({ url, text }) => {
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