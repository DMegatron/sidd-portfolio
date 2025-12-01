import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-slate-900 dark:text-cyan-400"
        >
          Get In Touch
        </motion.h2>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-50 mb-6">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              I am currently seeking better opportunities to contribute my expertise and drive growth in the financial services industry. Feel free to reach out!
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <FaEnvelope className="text-indigo-600 dark:text-cyan-400 text-xl mr-4" />
                <a href="mailto:mrsiddharthabhunia@gmail.com" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors font-medium">
                  mrsiddharthabhunia@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-indigo-600 dark:text-cyan-400 text-xl mr-4" />
                <a href="tel:+918967164046" className="text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors font-medium">
                  +91 8967164046
                </a>
              </div>
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-indigo-600 dark:text-cyan-400 text-xl mr-4" />
                <span className="text-slate-700 dark:text-slate-200 font-medium">
                  Bhekutia, Nandigram, Purba Medinipur, West Bengal, 721656
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:w-1/2 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-indigo-100 dark:border-slate-800"
          >
            <form className="space-y-4">
              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Name</label>
                <input type="text" className="w-full bg-indigo-50 dark:bg-slate-950 border border-indigo-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Email</label>
                <input type="email" className="w-full bg-indigo-50 dark:bg-slate-950 border border-indigo-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all" placeholder="Your Email" />
              </div>
              <div>
                <label className="block text-slate-700 dark:text-slate-300 mb-2 font-medium">Message</label>
                <textarea className="w-full bg-indigo-50 dark:bg-slate-950 border border-indigo-200 dark:border-slate-700 rounded-lg p-3 text-slate-900 dark:text-slate-100 h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-cyan-500 transition-all" placeholder="Your Message"></textarea>
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 rounded-lg hover:bg-indigo-700 dark:bg-cyan-600 dark:hover:bg-cyan-700 transition-colors shadow-md">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
