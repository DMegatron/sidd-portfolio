import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: 'Assistant Manager',
      company: 'Bandhan Bank',
      location: 'Math Chandipur',
      period: '2022 – Present',
      description: [
        'Manage portfolio with a focus on incremental growth.',
        'Oversee retail branch banking operations, including staff management, resource allocation, and sales growth.',
        'Engage with HNI clients, government agencies, and TASC clients to drive liability GL growth.',
        'Drive business development initiatives to enhance revenue generation.',
        'Promote and sell retail assets to improve Asset GL and overall branch profitability.',
        'Ensure KYC compliance for NTB and ERV customers.',
        'Advise customers on banking services and products; address and resolve queries and complaints.',
        'Ensure compliance with banking regulations and RBI guidelines.',
        'Oversee branch operations and overall branch activities.',
        'Lead loan recovery efforts, monitoring delinquent accounts and reducing NPAs.',
        'Conduct staff training and mentoring sessions to improve performance and service quality.',
        'Coordinate with internal teams and auditors to ensure smooth audits and regulatory compliance.',
        'Implement strategies to enhance customer acquisition, retention, and satisfaction levels.'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-900 dark:text-cyan-400"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 mb-8 border border-indigo-100 dark:border-slate-800 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600 dark:bg-cyan-500 group-hover:w-3 transition-all duration-300"></div>
              <div className="flex items-center mb-6 pl-4">
                <FaBriefcase className="text-indigo-600 dark:text-cyan-400 text-3xl mr-5" />
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{exp.title}</h3>
                  <p className="text-indigo-500 dark:text-cyan-500 font-semibold text-lg">{exp.company} | {exp.location}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">{exp.period}</p>
                </div>
              </div>
              <ul className="list-disc list-inside text-slate-700 dark:text-slate-300 space-y-3 pl-4">
                {exp.description.map((item, i) => (
                  <li key={i} className="leading-relaxed">{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
