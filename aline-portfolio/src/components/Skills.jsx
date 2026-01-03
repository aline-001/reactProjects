// src/components/Skills.jsx
import React from 'react';

export default function Skills({ skills, darkMode }) {
  return (
    <div className="py-10">
      <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        Technical Stack
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, i) => (
          <div 
            key={i} 
            className={`p-6 rounded-xl border transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'
            }`}
          >
            <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-4">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-3">
              {group.items.map(skill => (
                <span 
                  key={skill} 
                  className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                    darkMode 
                    ? 'bg-slate-800 border-slate-600 text-white' 
                    : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}