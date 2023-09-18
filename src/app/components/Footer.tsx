import React from 'react';

import '@fortawesome/fontawesome-svg-core/styles.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const current_year = new Date().getFullYear();
  return (
    <footer className="bg-blue-500 p-4 text-white text-center">
      <p>&copy; {current_year} ChepCodes</p>

      <div className="flex justify-center space-x-4">
        <a 
          href="https://twitter.com/conorchepenik" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-300 transition duration-500"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a
          href="https://youtube.com/@conorchepenik"
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-red-500 transition duration-500"
        >
          <FontAwesomeIcon icon={faYoutube} size="2x" />
        </a>

        <a
          href="https://github.com/chepenik"
          target="_blank"
          rel="noopener noreferrer"  
          className="hover:text-gray-400 transition duration-500"        
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
    </footer>
  );
}