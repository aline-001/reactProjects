import React from 'react';
import { CV_DATA } from '../constants';

export default function Hero({ darkMode, onNavClick }) {
  const handleDownloadResume = () => {
    // Download resume from public folder
    const link = document.createElement('a');
    link.href = '/asimwe_aline_cv.pdf'; // Place your PDF in the public/ folder
    link.download = 'asimwe_aline_cv.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="home" className="max-w-6xl mx-auto py-10 md:py-20 px-4 md:px-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
        <div className="flex-1">
          <span className="text-blue-500 font-bold tracking-widest uppercase text-xs md:text-sm">Full-Stack Engineer</span>
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 mt-4 leading-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            Building <br/>
            <span className="text-blue-500">Digital</span> System.
          </h2>
          <p className={`text-base md:text-lg lg:text-xl leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            {CV_DATA.bio} 
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavClick('projects')} 
              className="bg-blue-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-500/20 text-sm md:text-base"
            >
              View My Work
            </button>
            <button 
              onClick={handleDownloadResume}
              className={`px-6 md:px-8 py-3 md:py-4 rounded-lg font-bold border transition text-sm md:text-base ${darkMode ? 'border-slate-700 text-white hover:bg-slate-800' : 'border-slate-200 text-slate-900 hover:bg-slate-50'}`}
            >
              Download Resume
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center w-full">
          <div className={`relative w-64 h-80 sm:w-72 sm:h-96 md:w-80 md:h-96 rounded-2xl border-2 ${darkMode ? 'border-slate-700' : 'border-slate-100'} overflow-hidden shadow-2xl`}>
            <img 
              src="/profile.jpg" 
              alt="Asimwe Aline" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent text-white">
              <p className="text-sm font-bold">Based in Kigali</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
