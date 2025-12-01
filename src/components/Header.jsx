import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.a 
          href="#hero"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img 
            src="/Sidd.webp" 
            alt="Siddhartha Bhunia - Banking Professional" 
            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-600 dark:border-cyan-400"
          />
          <span className="text-2xl font-bold text-indigo-600 dark:text-cyan-400">SB</span>
        </motion.a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
            >
              {link.name}
            </motion.a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-slate-900 dark:text-white text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full bg-white dark:bg-slate-900 md:hidden flex flex-col items-center py-4 shadow-lg border-t dark:border-slate-800"
          >
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={toggleMenu}
                className="py-2 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-cyan-400 transition-colors duration-300 font-medium"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;
