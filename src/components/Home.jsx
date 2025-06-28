 import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaArrowDown } from 'react-icons/fa';
import BlobAnimation from './BlobAnimation';
import profile from '../assets/profile (1).png'
const Home = ({ setActiveSection, activeSection }) => {
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
    { icon: <FaGithub className="w-5 h-5" />, url: "https://github.com/abdulsattar576" },
    { icon: <FaLinkedin className="w-5 h-5" />, url: "https://www.linkedin.com/in/abdul-sattar-se/" },
    { icon: <FaTwitter className="w-5 h-5" />, url: "https://x.com/sattar1941" },
    { icon: <FaInstagram className="w-5 h-5" />, url: "https://instagram.com" },
    { icon: <FaFacebook className="w-5 h-5" />, url: "https://facebook.com" }
  ];

  return (
    <section 
      id="home"
      className="relative flex flex-col md:flex-row items-center justify-center min-h-screen py-16 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-90"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-600/20 blur-3xl"></div>
      </div>

      {/* Text Content */}
      <motion.div 
        className="md:w-1/2 space-y-6 md:pr-12 order-2 md:order-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
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
          className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed"
        >
          I craft high-performance web and mobile applications with modern technologies like React, Node.js, and Three.js.
        </motion.p>
        
        <motion.div 
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-4"
        >
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 15px rgba(167, 139, 250, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium text-sm sm:text-base hover:shadow-lg hover:shadow-purple-500/30 transition-all"
            onClick={() => setActiveSection('projects')}
          >
            View Projects
          </motion.button>
          
          <motion.button 
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(139, 92, 246, 0.1)"
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            className="px-8 py-3.5 border border-purple-400 rounded-lg font-medium text-sm sm:text-base hover:bg-purple-900/30 hover:shadow-lg hover:shadow-purple-500/10 transition-all"
            onClick={()=>setActiveSection('contact')}
          >
            Contact Me
          </motion.button>
        </motion.div>

        {/* Social Media Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex gap-5 pt-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                y: -5,
                scale: 1.1,
                color: "#a855f7"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 500 }}
              className="text-gray-400 hover:text-purple-400 transition-colors p-2 rounded-full hover:bg-gray-800/50"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Visual Elements */}
      <motion.div 
        className="md:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] mt-12 md:mt-0 order-1 md:order-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        <BlobAnimation />
        
        <div className="absolute inset-0 w-full h-full">
          <Canvas>
            <OrbitControls 
              enableZoom={false} 
              autoRotate 
              autoRotateSpeed={4}
              enablePan={false}
              enableRotate={false}
            />
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
          transition={{ 
            type: "spring", 
            stiffness: 120, 
            damping: 15,
            delay: 0.8
          }}
        >
          <img 
            src={profile}
            
            alt="Abdul Sattar"
            className="w-44 h-44 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64 rounded-full object-cover z-10 border-4 border-purple-500/30 shadow-2xl hover:shadow-purple-500/40 transition-all duration-300"
          />
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 10, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
        onClick={() => setActiveSection('about')}
      >
        <div className="flex flex-col items-center cursor-pointer">
          <p className="text-sm text-gray-400 mb-2">Scroll Down</p>
          <FaArrowDown className="text-gray-400 text-xl animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Home;