 import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaServer, FaPaintBrush, FaRobot, FaChartLine } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      title: "Fullstack Web Development",
      description: "End-to-end web solutions with modern frameworks like React, Next.js, Node.js, and Express. From concept to deployment, I build scalable and performant web applications.",
      icon: <FaCode className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-blue-400"
    },
    {
      title: "Mobile App Development",
      description: "Cross-platform mobile applications using React Native and Flutter. I create native-feeling apps for both iOS and Android from a single codebase.",
      icon: <FaMobileAlt className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-purple-400"
    },
    {
      title: "Backend & API Development",
      description: "Robust backend systems with Node.js, Django, or Laravel. RESTful and GraphQL APIs with proper documentation and security measures.",
      icon: <FaServer className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-green-400"
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces with Figma or Adobe XD. User-centered design principles with responsive layouts and interactive prototypes.",
      icon: <FaPaintBrush className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-pink-400"
    },
    {
      title: "DevOps & Cloud Solutions",
      description: "CI/CD pipelines, Docker containers, and cloud deployment (AWS, GCP, Azure). Infrastructure as code and automated testing workflows.",
      icon: <FaRobot className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-yellow-400"
    },
    {
      title: "Performance Optimization",
      description: "Application tuning for speed and efficiency. Database optimization, code splitting, and bundle size reduction for better user experience.",
      icon: <FaChartLine className="w-6 h-6 md:w-8 md:h-8" />,
      color: "text-red-400"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center">
          My <span className="text-purple-400">Services</span>
        </h2>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto text-center mb-8 md:mb-12">
          As a fullstack developer, I offer comprehensive solutions from frontend to backend and everything in between.
        </p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 backdrop-blur-sm p-5 md:p-6 rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <div className={`${service.color} mb-4 text-3xl md:text-4xl group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">{service.title}</h3>
              <p className="text-sm md:text-base text-gray-400 mb-4 md:mb-5">{service.description}</p>
              <div className="pt-3 md:pt-4 border-t border-gray-700 group-hover:border-purple-500/50 transition-all">
                <button className="text-xs md:text-sm font-medium text-purple-400 hover:text-purple-300 flex items-center">
                  Learn more
                  <svg className="w-3 h-3 md:w-4 md:h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;