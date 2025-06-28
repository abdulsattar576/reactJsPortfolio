 import React,   { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!form.name || !form.email || !form.message) {
      setError('Please fill all fields');
      setLoading(false);
      return;
    }

    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Abdul Sattar',
        from_email: form.email,
        to_email: 'sattargkl4@gmail.com',
        message: form.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(() => {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      setError('Something went wrong. Please try again.');
      console.error(error);
    })
    .finally(() => {
      setLoading(false);
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 10,
      },
    },
  };

  

  return (
    <motion.section 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
      >
        Get In <span className="text-purple-400">Touch</span>
      </motion.h2>

      <motion.div 
        variants={itemVariants}
        className="bg-gray-800/50 backdrop-blur-md rounded-xl p-6 md:p-8 lg:p-12 border border-gray-700 shadow-lg"
      >
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-4 md:space-y-6"
        >
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-4 py-2.5 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="john@example.com"
              />
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Your message here..."
            ></textarea>
          </motion.div>

          {error && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-sm"
            >
              {error}
            </motion.p>
          )}

          {success && (
            <motion.p 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 text-sm"
            >
              Message sent successfully! I'll get back to you soon.
            </motion.p>
          )}

          <motion.button
            variants={itemVariants}
            type="submit"
            disabled={loading}
            className={`w-full md:w-auto px-6 py-3 md:px-8 md:py-3 rounded-lg font-medium transition-all duration-300 ${
              loading
                ? 'bg-purple-800 cursor-not-allowed'
                : 'bg-purple-600 hover:bg-purple-700 transform hover:scale-105'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : (
              'Send Message'
            )}
          </motion.button>
        </form>

        <motion.div 
          variants={itemVariants}
          className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700"
        >
          <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center">Or reach out directly</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center p-3 md:p-4 bg-gray-700/50 rounded-lg hover:bg-purple-900/20 transition-all border border-gray-700"
            >
              <div className="p-2 md:p-3 bg-purple-900 rounded-full mb-2 md:mb-3">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
              </div>
              <p className="text-xs md:text-sm text-gray-400">Phone</p>
              <p className="text-sm md:text-base">+92 342 9717391</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center p-3 md:p-4 bg-gray-700/50 rounded-lg hover:bg-purple-900/20 transition-all border border-gray-700"
            >
              <div className="p-2 md:p-3 bg-purple-900 rounded-full mb-2 md:mb-3">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <p className="text-xs md:text-sm text-gray-400">Email</p>
              <p className="text-sm md:text-base">sattargkl4@gmail.com</p>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="flex flex-col items-center p-3 md:p-4 bg-gray-700/50 rounded-lg hover:bg-purple-900/20 transition-all border border-gray-700"
            >
              <div className="p-2 md:p-3 bg-purple-900 rounded-full mb-2 md:mb-3">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <p className="text-xs md:text-sm text-gray-400">Location</p>
              <p className="text-sm md:text-base">Quaidabad, Punjab, Pakistan</p>
            </motion.div>
          </div>

           
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Contact;