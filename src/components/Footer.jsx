import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/abdulsattar576" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abdul-sattar-se/" },
    { icon: <FaTwitter />, url: "https://x.com/sattar1941" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaFacebook />, url: "https://facebook.com" }
  ];
// Ensure the footer takes full width by removing any max-width constraints on the container
// Optionally, you can remove or adjust the "max-w-8xl mx-auto" class in the footer's inner div if you want the content to also stretch full width.
return (
    <footer className="w-full bg-gray-900/90 backdrop-blur-md border-t border-gray-800 py-8 px-4 sm:px-6 lg:px-8 z-50">
        <div className="max-w-8xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center ">
                {/* Logo and copyright */}
                <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-2 mb-4 md:mb-0 w-full md:w-auto">
                    <div className="text-2xl font-bold flex-shrink-0">
                        <span className="text-purple-400">A</span>
                        <span className="text-white">S</span>
                    </div>
                    <span className="hidden md:inline text-gray-400">|</span>
                    <p className="text-xs md:text-sm text-gray-400 text-center md:text-left w-full md:w-auto">
                        © {new Date().getFullYear()} Sattar Devs. All rights reserved.
                    </p>
                </div>
                <nav className="hidden md:flex space-x-6">
                    <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors">Home</a>
                    <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors">About</a>
                    <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors">Projects</a>
                    <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors">Services</a>
                    <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact</a>
                </nav>

                {/* Social links */}
                <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-purple-400 p-2 rounded-full hover:bg-gray-800 transition-colors"
                            aria-label={`Social link ${index}`}
                        >
                            {React.cloneElement(social.icon, { className: "w-5 h-5" })}
                        </a>
                    ))}
                </div>
            </div>

            {/* Mobile navigation */}
            <nav className="md:hidden flex justify-center space-x-4 mt-6">
                <a href="#home" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Home</a>
                <a href="#about" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">About</a>
                <a href="#projects" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Projects</a>
                <a href="#services" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Services</a>
                <a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors text-sm">Contact</a>
            </nav>

            {/* Credits */}
            <div className="mt-8 text-center text-xs text-gray-500">
                <p>Built with React, Tailwind CSS, and Framer Motion</p>
                <p className="mt-1">Made with ❤️ by Abdul Sattar</p>
            </div>
        </div>
    </footer>
);
};

export default Footer;