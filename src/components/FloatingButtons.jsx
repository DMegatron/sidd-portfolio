import React, { useState, useEffect } from 'react';
import { FaArrowUp, FaEnvelope } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed right-6 bottom-6 z-40 flex flex-col gap-3">
          {/* Contact Me Button */}
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToContact}
            className="group relative bg-purple-600 dark:bg-cyan-400 text-white dark:text-slate-900 p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Contact Me"
          >
            <FaEnvelope className="text-xl" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Contact Me
            </span>
          </motion.button>

          {/* Back to Top Button */}
          <motion.button
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={scrollToTop}
            className="group relative bg-slate-700 dark:bg-slate-600 text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300"
            aria-label="Back to Top"
          >
            <FaArrowUp className="text-xl" />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-3 py-1 rounded-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              Back to Top
            </span>
          </motion.button>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingButtons;
