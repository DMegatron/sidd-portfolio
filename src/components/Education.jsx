import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: 'Post Graduate Diploma in Banking and Finance',
      institution: 'MAKAUT',
      year: '2022'
    },
    {
      degree: 'Bachelor of Technology',
      institution: 'UEM Jaipur',
      year: '2018'
    },
    {
      degree: 'Higher Secondary',
      institution: 'Asadtala Binode Vidyapith',
      year: '2014'
    },
    {
      degree: 'Secondary',
      institution: 'Asadtala Binode Vidyapith',
      year: '2012'
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-900 dark:text-cyan-400"
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg border-l-4 border-indigo-600 dark:border-cyan-400 border-t border-r border-b border-indigo-100 dark:border-slate-800 hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <FaGraduationCap className="text-indigo-600 dark:text-cyan-400 text-2xl mr-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-50">{edu.degree}</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 font-medium">{edu.institution}</p>
              <p className="text-indigo-500 dark:text-cyan-500 text-sm mt-2 font-semibold">{edu.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
