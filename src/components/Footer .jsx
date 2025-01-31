import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright Section */}
          <div className="text-sm text-gray-300">
            © 2025 Akash Shinde
          </div>
          
          {/* Navigation Links */}
          <nav className="flex space-x-6">
            <a 
              href="#" 
              className="text-sm text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-sm text-gray-300 hover:text-blue-500 transition-colors duration-300"
            >
              Contact
            </a>
          </nav>
          
          {/* Social Links */}
          <div className="flex space-x-4">
            <a 
              href="https://github.com/akashshinde0775" 
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/akashshinde0775" 
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://twitter.com/akashshinde0775" 
              className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
