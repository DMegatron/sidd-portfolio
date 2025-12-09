import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-8 text-center border-t border-purple-200 dark:border-slate-900 transition-colors duration-300">
      <p className="text-slate-500 dark:text-slate-500">
        &copy; {new Date().getFullYear()} Siddhartha Bhunia. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
