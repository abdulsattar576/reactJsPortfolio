import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaMobileAlt,
  FaDatabase,
  FaServer,
  FaPaintBrush,
  FaDownload,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiGraphql,
  SiDjango,
} from "react-icons/si";
import profile from '../assets/profile (1).png'


const About = ({ setActiveSection }) => {
  const skills = [
    {
      category: "Frontend",
      icon: <FaReact className="w-6 h-6" />,
      technologies: ["React", "Next.js", "Tailwind CSS", "Redux"],
      color: "from-blue-500 to-blue-600",
      iconColor: "text-blue-400",
    },
    {
      category: "Backend",
      icon: <FaNodeJs className="w-6 h-6" />,
      technologies: ["Node.js", "Express", "Django", "REST APIs"],
      color: "from-green-500 to-green-600",
      iconColor: "text-green-400",
    },
    {
      category: "Mobile",
      icon: <FaMobileAlt className="w-6 h-6" />,
      technologies: ["React Native", "Expo", "Android", "iOS"],
      color: "from-purple-500 to-purple-600",
      iconColor: "text-purple-400",
    },
    {
      category: "Database",
      icon: <FaDatabase className="w-6 h-6" />,
      technologies: ["MongoDB", "PostgreSQL", "Firebase", "MySQL"],
      color: "from-yellow-500 to-yellow-600",
      iconColor: "text-yellow-400",
    },
    {
      category: "DevOps",
      icon: <FaServer className="w-6 h-6" />,
      technologies: ["Docker", "AWS", "CI/CD", "Nginx", "GitHub Actions"],
      color: "from-red-500 to-red-600",
      iconColor: "text-red-400",
    },
    {
      category: "UI/UX",
      icon: <FaPaintBrush className="w-6 h-6" />,
      technologies: ["Figma", "Adobe XD", "User Research", "Prototyping"],
      color: "from-pink-500 to-pink-600",
      iconColor: "text-pink-400",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col lg:flex-row items-center justify-center gap-16"
      >
        {/* Image Section - Now First in the DOM */}
        <motion.div
          variants={item}
          className="lg:w-1/2 w-full flex flex-col items-center relative order-1"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Profile image - Now the first element to appear */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center z-10"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 100,
                delay: 0.1
              }}
              viewport={{ once: true }}
            >
              <img
                src={profile}
                alt="Abdul Sattar"
                className="w-full h-full rounded-full object-cover border-4 border-purple-400/50 shadow-xl hover:shadow-purple-500/40 transition-all"
              />
            </motion.div>

            {/* Decorative background elements */}
            <motion.div 
              className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-900/80 to-blue-900/80 backdrop-blur-sm z-0"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 rounded-full"></div>
            </motion.div>
            
            {/* Decorative border */}
            <motion.div 
              className="absolute -inset-4 border-2 border-purple-400/30 rounded-full z-[-1]"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
            />
          </div>

          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30"
            >
              <FaDownload />
              Download Resume
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Content Section - Now Second in the DOM */}
        <motion.div variants={item} className="lg:w-1/2 space-y-10 order-2">
          <div className="text-center lg:text-left">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Me</span>
            </motion.h2>
            
            <motion.p
              className="text-lg lg:text-xl text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              I'm a passionate fullstack developer with 5+ years of experience
              building web and mobile applications. I specialize in creating
              performant, scalable solutions with modern technologies and clean
              code practices.
            </motion.p>
            
            <motion.button
              onClick={() => setActiveSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
              className="hidden lg:inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/30"
            >
              Let's Work Together
            </motion.button>
          </div>

          {/* Skills Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            variants={container}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ 
                  y: -8,
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)"
                }}
                className={`bg-gray-800/50 backdrop-blur-sm p-5 rounded-xl border border-gray-700 hover:border-transparent transition-all group`}
              >
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity -z-10`}></div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg ${skill.iconColor} bg-gray-700/50`}>
                    {skill.icon}
                  </div>
                  <h3 className="font-bold text-lg">{skill.category}</h3>
                </div>
                <ul className="space-y-2.5">
                  {skill.technologies.map((tech, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * i }}
                      viewport={{ once: true }}
                      className="text-gray-400 text-sm flex items-center gap-2 hover:text-white transition-colors"
                    >
                      <span className={`w-2 h-2 rounded-full ${skill.iconColor}`}></span>
                      {tech}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;