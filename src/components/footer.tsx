'use client';

import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'; // Import icons from react-icons

function Footer() {
  return (
    <div>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6">
          <div className="flex items-center">
            <a href="https://www.linkedin.com/in/ismail-ahmed-shah-2455b01ba/" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaLinkedin className="text-2xl mr-2" />
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://github.com/ISMAIL-AHMED-SHAH" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaGithub className="text-2xl mr-2" />
              <span>GitHub</span>
            </a>
          </div>
          <div className="flex items-center">
            <a href="https://wa.me/+923322241405" target="_blank" rel="noopener noreferrer" className="flex items-center">
              <FaWhatsapp className="text-2xl mr-2" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;