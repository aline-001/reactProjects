import React, { useState } from 'react';
import Skills from './Skills';
import { CV_DATA } from '../constants';

export default function About({ darkMode }) {
  const [activeTab, setActiveTab] = useState('experience');

  const tabs = ['experience', 'education', 'softskills'];

  return (
    <section id="about" className="max-w-6xl mx-auto py-10 md:py-20 px-4 md:px-10">
      <div className={`rounded-3xl border p-6 md:p-12 ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>About Me</h2>
        
        <p className={`text-sm md:text-lg leading-relaxed mb-4 ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
          {CV_DATA.bio}
        </p>
        <p className={`text-sm md:text-lg leading-relaxed mb-12 ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>
          {CV_DATA.summary}
        </p>

        {/* Tabs */}
        <div className="flex gap-2 md:gap-4 mb-8 overflow-x-auto border-b border-slate-300 dark:border-slate-700">
          {tabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`capitalize py-2 md:py-3 px-3 md:px-6 font-semibold transition whitespace-nowrap text-xs md:text-base ${
                activeTab === tab
                  ? `border-b-2 border-blue-500 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`
                  : darkMode ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Experience Tab */}
        {activeTab === 'experience' && (
          <div className="space-y-6 mb-12">
            {CV_DATA.experience.map((exp, i) => (
              <div key={i} className={`p-6 rounded-xl border-l-4 border-blue-500 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{exp.title}</h4>
                    <p className="text-blue-500 font-semibold">{exp.company}</p>
                    {exp.program && <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{exp.program}</p>}
                  </div>
                  <span className="text-blue-500 font-semibold text-sm">{exp.period}</span>
                </div>
                <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{exp.location}</p>
                <ul className={`space-y-2 list-disc list-inside ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                  {exp.highlights.map((highlight, j) => (
                    <li key={j} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Education Tab */}
        {activeTab === 'education' && (
          <div className="space-y-6 mb-12">
            {CV_DATA.education.map((edu, i) => (
              <div key={i} className={`p-6 rounded-xl border-l-4 border-green-500 ${darkMode ? 'bg-slate-800/50' : 'bg-white'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{edu.school}</h4>
                    <p className="text-green-500 font-semibold">{edu.degree}</p>
                  </div>
                  <span className="text-green-500 font-semibold text-sm">{edu.period}</span>
                </div>
                <p className={`text-sm mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{edu.location}</p>
                <ul className={`space-y-2 list-disc list-inside ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                  {edu.highlights.map((highlight, j) => (
                    <li key={j} className="text-sm">{highlight}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {/* Soft Skills Tab */}
        {activeTab === 'softskills' && (
          <div className="mb-12">
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {CV_DATA.softSkills.map((skill, i) => (
                <div key={i} className={`p-4 rounded-lg border ${darkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
                  <p className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>✓ {skill}</p>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Languages</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {CV_DATA.languages.map((lang, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className={`font-semibold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{lang.name}</span>
                      <span className="text-yellow-500">{'⭐'.repeat(lang.level)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {CV_DATA.hobbies.length > 0 && (
              <div>
                <h4 className={`text-lg font-bold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Hobbies & Interests</h4>
                <div className="flex flex-wrap gap-2">
                  {CV_DATA.hobbies.map((hobby, i) => (
                    <span key={i} className={`px-4 py-2 rounded-full text-sm font-semibold ${darkMode ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-900'}`}>
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        <Skills skills={CV_DATA.skills} darkMode={darkMode} />
      </div>
    </section>
  );
}
