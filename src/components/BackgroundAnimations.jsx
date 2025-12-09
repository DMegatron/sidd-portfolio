import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const BackgroundAnimations = () => {
  const { theme } = useTheme();

  // Generate the atmospheric blobs (background base)
  const blobs = Array.from({ length: 12 }).map((_, i) => ({
    id: `blob-${i}`,
    size: Math.random() * 400 + 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 5,
  }));

  // Generate random geometric shapes (foreground accents)
  const shapes = Array.from({ length: 50 }).map((_, i) => {
    const shapeTypes = ['circle', 'square', 'triangle', 'cross', 'donut'];
    return {
      id: `shape-${i}`,
      type: shapeTypes[Math.floor(Math.random() * shapeTypes.length)],
      size: Math.random() * 30 + 10, // Slightly smaller for higher density
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 20 + 10,
      delay: Math.random() * 5,
      rotation: Math.random() * 360,
    };
  });

  const renderShape = (shape) => {
    // Common style for shapes: outlines or subtle fills
    const outlineClass = "border border-purple-400 dark:border-cyan-800/30";
    const solidClass = "bg-purple-300 dark:bg-cyan-800/20";
    
    switch (shape.type) {
      case 'square':
        return <div className={`w-full h-full rounded-lg ${Math.random() > 0.5 ? outlineClass : solidClass}`} />;
      case 'circle':
        return <div className={`w-full h-full rounded-full ${Math.random() > 0.5 ? outlineClass : solidClass}`} />;
      case 'donut':
         return <div className={`w-full h-full rounded-full border-4 border-purple-300 dark:border-cyan-800/20`} />;
      case 'triangle':
        return (
          <svg viewBox="0 0 24 24" className="w-full h-full fill-purple-300 dark:fill-cyan-800/20 opacity-60">
            <path d="M12 2L2 22h20L12 2z" />
          </svg>
        );
      case 'cross':
        return (
           <div className="w-full h-full flex items-center justify-center text-purple-400 dark:text-cyan-800/30 font-thin select-none" style={{ fontSize: '2em' }}>
              +
           </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 1. Atmospheric Blobs Layer */}
      {blobs.map((blob) => (
        <motion.div
          key={blob.id}
          className="absolute rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-[80px] opacity-40 dark:opacity-10 bg-gradient-to-br from-purple-200 to-indigo-200 dark:from-cyan-900/30 dark:to-blue-900/30"
          style={{
            width: blob.size,
            height: blob.size,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "linear",
            delay: blob.delay,
          }}
        />
      ))}

      {/* 2. Geometric Shapes Layer */}
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className="absolute opacity-30 dark:opacity-20"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [0, -30, 0], // Floating up and down
            rotate: [shape.rotation, shape.rotation + 360],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: shape.delay,
          }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundAnimations;
