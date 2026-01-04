import React, { useState } from 'react';
import { CV_DATA } from '../constants';

export default function Projects({ darkMode }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Get unique categories
  const categories = ['all', ...new Set(CV_DATA.projects.map(p => p.cat))];
  
  // Filter projects
  const filteredProjects = activeFilter === 'all' 
    ? CV_DATA.projects 
    : CV_DATA.projects.filter(p => p.cat === activeFilter);

  return (
    <section id="projects" className="max-w-6xl mx-auto py-10 md:py-20 px-4 md:px-10">
      <h2 className={`text-3xl md:text-4xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Featured Systems</h2>
      
      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 md:gap-3 mb-12">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-3 md:px-6 py-2 rounded-full font-semibold transition capitalize text-xs md:text-sm ${
              activeFilter === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : darkMode 
                  ? 'bg-slate-800 text-slate-300 hover:bg-slate-700' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid sm:grid-cols-2 gap-4 md:gap-8 mb-8">
        {filteredProjects.map((proj, i) => (
          <div
            key={i}
            onClick={() => setSelectedProject(proj)}
            className={`p-8 rounded-2xl border transition-all duration-300 cursor-pointer ${
              darkMode
                ? 'bg-slate-900/50 border-slate-800 hover:border-blue-500 hover:shadow-xl text-white'
                : 'bg-white border-slate-100 hover:shadow-2xl text-slate-900'
            }`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-2xl font-bold">{proj.title}</h3>
              <span className="text-blue-400 text-xs font-bold bg-blue-500/10 px-2 py-1 rounded">{proj.cat}</span>
            </div>
            <p className={`mb-6 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{proj.desc}</p>
            <div className="flex flex-wrap gap-2">
              {proj.tech.map(t => (
                <span 
                  className="text-[10px] font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full uppercase border border-blue-500/20" 
                  key={t}
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-4 text-blue-500 font-semibold text-sm hover:translate-x-1 transition">
              View Details →
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className={`rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto ${
              darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
            }`}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedProject(null)}
              className="float-right text-2xl font-bold text-blue-500 hover:text-blue-600"
            >
              ✕
            </button>
            <h2 className="text-4xl font-bold mb-4">{selectedProject.title}</h2>
            <span className={`inline-block text-sm font-bold px-3 py-1 rounded-full mb-6 ${
              darkMode ? 'bg-slate-800 text-blue-400' : 'bg-slate-100 text-blue-600'
            }`}>
              {selectedProject.cat}
            </span>
            <p className={`text-lg leading-relaxed mb-8 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              {selectedProject.desc}
            </p>
            <div className="mb-6">
              <h3 className="font-bold mb-4 text-lg">Technologies Used:</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tech.map(t => (
                  <span 
                    key={t}
                    className="px-4 py-2 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-semibold"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
