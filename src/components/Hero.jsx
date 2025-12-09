import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="h-screen flex items-center justify-center text-center px-4 pt-16">
      <div className="container mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-purple-700 dark:text-cyan-400 text-lg mb-4 font-medium tracking-wide"
        >
          Hi, my name is
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-slate-50 mb-4 tracking-tight"
        >
          Siddhartha Bhunia.
        </motion.h1>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-slate-500 dark:text-slate-400 mb-8"
        >
          I am an Banking Professional.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg mb-12 leading-relaxed"
        >
          I have 3 years of experience as an Assistant Manager. I am skilled in branch operations, compliance, and customer service.
        </motion.p>
        <div className="flex flex-wrap gap-4 justify-center">
          <motion.a 
            href="#contact"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="border-2 border-purple-600 text-purple-700 px-8 py-4 rounded-full hover:bg-purple-600 hover:text-white dark:border-cyan-400 dark:text-cyan-400 dark:hover:bg-cyan-400/10 transition-all duration-300 font-bold shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-cyan-400/20"
          >
            Get In Touch
          </motion.a>
          <motion.a 
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="bg-purple-600 text-white px-8 py-4 rounded-full hover:bg-purple-700 dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-500 transition-all duration-300 font-bold shadow-lg hover:shadow-purple-500/30 dark:hover:shadow-cyan-400/20"
          >
            View Resume
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
