import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-tertiary py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-textSecondary">
              © {new Date().getFullYear()} Youssra Ettaleby. Tous droits réservés.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://github.com/YoussraEttaleby12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/youssra-ettaleby-8b3b53292/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
            >
              <FaLinkedin size={20} />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 