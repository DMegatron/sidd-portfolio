import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const BackgroundAnimations = () => {
  const { theme } = useTheme();

  // Determine colors based on theme (simplified logic as actual theme resolution happens in CSS/Context)
  // Since we can't easily access computed styles here without more complex logic, 
  // we'll use classes that adapt to dark/light mode via Tailwind.
  
  const shapes = Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute rounded-full opacity-30 dark:opacity-10 bg-gradient-to-r from-indigo-300 to-purple-300 dark:from-cyan-900 dark:to-teal-900 blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "linear",
            delay: shape.delay,
          }}
        />
      ))}
    </div>
  );
};

export default BackgroundAnimations;
