import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Key Skills',
      skills: ['Team Handling', 'Banking Operations', 'People Management', 'Customer Service', 'AML – KYC', 'Vigilance']
    },
    {
      title: 'Software Proficiency',
      skills: ['Oracle Flexcube', 'FIS Banking Software', 'Microsoft Office 365 Suite']
    },
    {
      title: 'Languages',
      skills: ['English', 'Hindi', 'Bengali']
    }
  ];

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-900 dark:text-cyan-400"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-lg border border-purple-200 dark:border-slate-800 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-bold text-purple-700 dark:text-cyan-400 mb-6 text-center">{category.title}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="bg-purple-50 dark:bg-slate-950 text-purple-900 dark:text-cyan-100 px-4 py-2 rounded-full text-sm border border-purple-200 dark:border-cyan-900/50 hover:bg-purple-600 hover:text-white dark:hover:bg-cyan-600 dark:hover:text-white transition-colors duration-300 cursor-default font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
