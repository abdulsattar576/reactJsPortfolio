 import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaArrowDown } from 'react-icons/fa';
import profile from '../assets/profile (1).png';

const Home = ({ setActiveSection }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
        when: "beforeChildren"
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
        duration: 0.6
      }
    }
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/abdulsattar576" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/abdul-sattar-se/" },
    { icon: <FaTwitter />, url: "https://x.com/sattar1941" },
    { icon: <FaInstagram />, url: "https://instagram.com" },
    { icon: <FaFacebook />, url: "https://facebook.com" }
  ];

  // Helper function to scroll to section and set active section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -80; // adjust if you have a fixed header
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setActiveSection(id);
  };

  return (
    <section 
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-90"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>

      {/* Text Content */}
      <motion.div 
        className="md:w-1/2 space-y-4 md:space-y-6 order-2 md:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-gradient">ABDUL SATTAR</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 my-4 rounded-full"></div>
        </motion.div>
        
        <motion.h2 
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300"
        >
          Fullstack Developer
        </motion.h2>
        
        <motion.p 
          variants={itemVariants}
          className="text-base md:text-lg text-gray-300 max-w-lg leading-relaxed"
        >
          I craft high-performance web and mobile applications with modern technologies like React, Node.js, and Three.js.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-3 pt-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(167, 139, 250, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-6 py-3 md:px-8 md:py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            onClick={() => scrollToSection('projects')}
          >
            View Projects
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "rgba(139, 92, 246, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-6 py-3 md:px-8 md:py-3.5 border border-purple-400 rounded-lg font-medium text-sm sm:text-base hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </motion.button>
        </motion.div>

        <motion.div 
          variants={itemVariants}
          className="flex gap-3 md:gap-5 pt-4"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.1, color: "#a855f7" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="text-gray-400 hover:text-purple-400 p-2 md:p-3 rounded-full hover:bg-gray-800/50"
            >
              {React.cloneElement(social.icon, { className: "w-5 h-5 md:w-6 md:h-6" })}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Visual Elements - Optimized for Mobile */}
      <motion.div 
        className={`${isMobile ? 'w-full' : 'md:w-1/2'} relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] mt-8 md:mt-0 order-1 md:order-2`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        {!isMobile ? (
          <>
            <div className="absolute inset-0 w-full h-full">
              <Canvas>
                <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={4} enablePan={false} enableRotate={false} />
                <ambientLight intensity={0.9} />
                <directionalLight position={[3, 2, 1]} intensity={0.6} />
                <pointLight position={[-2, -1, -3]} intensity={0.5} />
                <Sphere args={[1, 64, 64]} scale={1.6}>
                  <MeshDistortMaterial
                    color="#7e22ce"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0.2}
                    metalness={0.1}
                  />
                </Sphere>
              </Canvas>
            </div>
            
            <motion.div 
              className="absolute inset-0 flex items-center justify-center"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.8 }}
            >
              <img 
                src={profile}
                alt="Abdul Sattar"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover z-10 border-4 border-purple-500/30 shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              />
            </motion.div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 120, damping: 15, delay: 0.8 }}
            >
              <img 
                src={profile}
                alt="Abdul Sattar"
                className="w-48 h-48 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-purple-500/30 shadow-xl hover:shadow-purple-500/40 transition-all duration-300"
              />
            </motion.div>
          </div>
        )}
      </motion.div>

      {/* Scroll indicator - hidden on mobile */}
      {!isMobile && (
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: [0, 1, 0], y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          onClick={() => scrollToSection('about')}
        >
          <div className="flex flex-col items-center cursor-pointer">
            <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
            <FaArrowDown className="text-gray-400 text-xl animate-bounce" />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Home;