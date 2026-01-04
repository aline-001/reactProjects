import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const themeStyle = {
    backgroundColor: darkMode ? '#0f172a' : '#ffffff',
    color: darkMode ? '#f8fafc' : '#1e293b',
    transition: 'all 0.3s ease',
    minHeight: '100vh'
  };

  return (
    <div style={themeStyle}>
      <Header 
        darkMode={darkMode} 
        onThemeToggle={() => setDarkMode(!darkMode)}
        activeSection={activeSection}
        onNavClick={setActiveSection}
      />

      <Hero darkMode={darkMode} onNavClick={setActiveSection} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Contact darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}