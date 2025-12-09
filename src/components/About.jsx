import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-900 dark:text-cyan-400"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:w-1/2 text-slate-700 dark:text-slate-300 text-lg leading-relaxed font-medium"
          >
            <p className="mb-4">
              I am a dedicated Banking professional with over 3 years of experience as an Assistant Manager at Bandhan Bank. My expertise lies in branch operations, compliance, and customer service.
            </p>
            <p className="mb-4">
              I have a proven track record of achieving growth in branch deposits, reducing NPAs through effective loan recovery, and ensuring 100% KYC compliance. I am certified in NISM and IRDA, demonstrating my commitment to professional development and industry standards.
            </p>
            <p>
              Currently, I am seeking better opportunities to contribute my expertise and drive growth in the financial services industry. I excel in team handling, people management, and vigilance.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 border-2 border-purple-600 dark:border-cyan-400 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute top-4 left-4 w-full h-full bg-white dark:bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl overflow-hidden">
                <img 
                  src="/Sidd.webp" 
                  alt="Siddhartha Bhunia - Assistant Bank Manager at Bandhan Bank" 
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
