import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import BackgroundAnimations from './components/BackgroundAnimations';
import FloatingButtons from './components/FloatingButtons';

function App() {
  return (
    <ThemeProvider>
      <div className="bg-indigo-50 dark:bg-slate-950 min-h-screen text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300 relative">
        <BackgroundAnimations />
        <div className="relative z-10">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Skills />
            <Contact />
          </main>
          <Footer />
          <ThemeToggle />
          <FloatingButtons />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
