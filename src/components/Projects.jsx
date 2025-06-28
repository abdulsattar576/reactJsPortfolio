  
 import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import shoppingbag from "../assets/shoppingbag.png";
import Sensiview from '../assets/Sensiview.jpg';
import newsapp from '../assets/newsmonkeyapp.PNG';
import chatapp from '../assets/chatapp.PNG';
import Uber from '../assets/uberClone.JPG';
import TextUtill from "../assets/TextUtills.PNG";
import { useState } from 'react';

const Projects = () => {
  const [projects] = useState([
    {
      id: 1,
      title: "Real Time Object Detection",
      description: "Sensiview assists blind users with real-time object detection, currency recognition, text reading, and locating items like seats, doors, and tables.",
      image: Sensiview,
      technologies: ["React Native", "Django Rest Framework", "SQLite", "YOLO"],
      githubLink: "https://github.com/abdulsattar576/SENSIVIEW",
    },
    {
      id: 2,
      title: "News App",
      description: "A responsive news website that fetches and displays live news articles categorized into General, Entertainment, Sports, and more using the NewsAPI.",
      image: newsapp,
      technologies: ["React", "Bootstrap"],
      githubLink: "https://github.com/abdulsattar576/NewsMonkeysApp",
    },
    {
      id: 3,
      title: "ChatApp",
      description: "A real-time chat app for one-on-one conversations between users. It displays online/offline status and enables instant messaging with live updates.",
      image: chatapp,
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      githubLink: "https://github.com/abdulsattar576/CHATAPP",
    },
    {
      id: 4,
      title: "Uber Clone",
      description: "A real-time ride-booking app with location suggestions, fare calculation, and vehicle selection. Users can request rides, and nearby drivers receive and accept ride requests in real-time.",
      image: Uber,
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Socket.io", "Google Maps API"],
      githubLink: "https://github.com/abdulsattar576/UBER_CLONE2",
    },
    {
      id: 5,
      title: "Text Utill",
      description: "A text utility app that transforms text to uppercase or lowercase, clears content, removes extra spaces, and copies text. It also provides live word and character count statistics.",
      image: TextUtill,
      technologies: ["React", "Bootstrap"],
      githubLink: "https://github.com/abdulsattar576/TextUtilityApp",
    },
    {
      id: 6,
      title: "Shopping Bag",
      description: "A shopping bag website where users can view products and add them to their cart. An admin panel allows product management, making items visible to users in real-time.",
      image: shoppingbag,
      technologies: ["React", "Tailwind CSS", "EJS", "Node.js", "Express", "MongoDB"],
      githubLink: "https://github.com/abdulsattar576/SHOPINGBAG",
    },
  ]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.h2 
        className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Projects</span>
      </motion.h2>

      <motion.p 
        className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto text-center mb-8 md:mb-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Here are some of my featured projects. Each one was built to solve specific problems and showcase different aspects of my development skills.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            key={project.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 hover:border-purple-400/30 transition-all duration-300 group"
          >
            <div className="h-40 sm:h-48 bg-black/80 relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-800 rounded-full hover:bg-purple-600 transition-colors"
                      aria-label="GitHub repository"
                    >
                      <FiGithub className="w-4 h-4 md:w-5 md:h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            
            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-gray-300 mb-3 md:mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-1 md:gap-2">
                {project.technologies.map((tech, index) => (
                  <motion.span 
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="px-2 py-1 bg-gray-700 rounded-full text-xs md:text-sm hover:bg-purple-900/80 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;