import React, { useState } from 'react';
import { CV_DATA } from './constants';
import Skills from './components/Skills';
import Contact from './components/Contact';

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
      {/* Navbar: border color changes in dark mode */}
      <nav className={`flex justify-between p-6 border-b ${darkMode ? 'border-slate-800' : 'border-slate-200'} sticky top-0 bg-inherit z-50`}>
        <h1 className={`font-black text-xl tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>
          ALINE<span className="text-blue-500">_</span>
        </h1>
        <div className="flex gap-8 items-center font-medium">
          <button 
            onClick={() => setDarkMode(!darkMode)} 
            className={`p-2 rounded-full transition ${darkMode ? 'bg-slate-800 text-yellow-400' : 'bg-slate-100 text-slate-600'}`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
          {/* Nav links change color based on dark mode */}
          {['home', 'projects', 'contact'].map((item) => (
            <button 
              key={item}
              onClick={() => setActiveSection(item)} 
              className={`capitalize transition ${activeSection === item ? 'text-blue-500 font-bold' : (darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-blue-500')}`}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      {activeSection === 'home' && (
        <main className="max-w-6xl mx-auto py-20 px-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">Full-Stack Engineer</span>
              <h2 className={`text-6xl font-extrabold mb-6 mt-4 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Building <br/>
                <span className="text-blue-500">Digital</span> System.
              </h2>
              <p className={`text-xl leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                {CV_DATA.bio} 
              </p>
              <div className="flex gap-4">
                <button onClick={() => setActiveSection('projects')} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20">
                  View My Work
                </button>
                <button className={`px-8 py-4 rounded-lg font-bold border transition ${darkMode ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}>
                  Resume
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center">
              <div className={`relative w-80 h-96 rounded-2xl border-2 ${darkMode ? 'border-slate-700' : 'border-slate-100'} overflow-hidden shadow-2xl`}>
                <img 
                  src="https://via.placeholder.com/400x500" 
                  alt="Asimwe Aline" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
                  <p className="text-sm font-bold">Based in Kigali</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            {/* PASSING darkMode here is critical */}
            <Skills skills={CV_DATA.skills} darkMode={darkMode} />
          </div>
        </main>
      )}

      {activeSection === 'projects' && (
        <section className="max-w-6xl mx-auto py-20 px-10">
          <h2 className={`text-4xl font-bold mb-12 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Featured Systems</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {CV_DATA.projects.map((proj, i) => (
              <div key={i} className={`p-8 rounded-2xl border transition-all duration-300 ${darkMode ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500 text-white' : 'bg-white border-slate-100 hover:shadow-2xl text-slate-900'}`}>
                <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{proj.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {proj.tech.map(t => (
                    <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full uppercase border border-blue-500/20" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'contact' && <Contact darkMode={darkMode} />}

      <footer className={`text-center py-12 text-sm mt-20 border-t ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'}`}>
        <p>© 2026 Asimwe Aline • Showcasing my skills</p>
      </footer>
    </div>
  );
}