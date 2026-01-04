import React from 'react';

export default function Header({ darkMode, onThemeToggle, activeSection, onNavClick }) {
  const scrollToSection = (section) => {
    onNavClick(section);
    // Smooth scroll to element
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`flex justify-between p-6 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'} sticky top-0 bg-inherit z-50`}>
      <h1 className={`font-black text-xl tracking-tighter cursor-pointer transition ${darkMode ? 'text-white hover:text-blue-500' : 'text-slate-900 hover:text-blue-500'}`}>
        ALINE<span className="text-blue-500">_</span>
      </h1>
      <div className="flex gap-8 items-center font-medium">
        <button 
          onClick={onThemeToggle} 
          className={`p-2 rounded-full transition ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
          title="Toggle theme"
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
        {['home', 'about', 'projects', 'contact'].map((item) => (
          <button 
            key={item}
            onClick={() => scrollToSection(item)} 
            className={`capitalize transition ${activeSection === item ? 'text-blue-500 font-bold' : (darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-blue-500')}`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
