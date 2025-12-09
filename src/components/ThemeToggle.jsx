import React from 'react';
import { FaSun, FaMoon, FaDesktop } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const options = [
    { value: 'light', icon: FaSun },
    { value: 'dark', icon: FaMoon },
    { value: 'system', icon: FaDesktop },
  ];

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex gap-2">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => setTheme(option.value)}
          className={`p-2 rounded-full transition-colors duration-200 ${
            theme === option.value
              ? 'bg-purple-600 text-white dark:bg-cyan-600'
              : 'text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700'
          }`}
          aria-label={`Switch to ${option.value} theme`}
        >
          <option.icon className="text-sm" />
        </button>
      ))}
    </div>
  );
};

export default ThemeToggle;
