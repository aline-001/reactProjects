// src/components/Skills.jsx
import React, { useState, useEffect } from 'react';

export default function Skills({ skills, darkMode }) {
  const [animatedSkills, setAnimatedSkills] = useState({});

  useEffect(() => {
    // Animate skill bars on mount
    const timer = setTimeout(() => {
      const animated = {};
      skills.forEach((group, i) => {
        group.items.forEach((_, j) => {
          animated[`${i}-${j}`] = true;
        });
      });
      setAnimatedSkills(animated);
    }, 100);
    return () => clearTimeout(timer);
  }, [skills]);

  const skillProficiency = {
    'React.js': 90,
    'Tailwind CSS': 85,
    'Django': 88,
    'Python': 90,
    'C++': 80,
    'Qt Framework': 75,
    'Embedded Systems': 78,
    'Robotics': 82,
    'JavaScript': 85,
    'PostgreSQL': 80,
    'Node.js': 75,
  };

  const getSkillLevel = (skill) => skillProficiency[skill] || 75;

  return (
    <div className="py-10">
      <h3 className={`text-2xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
        Technical Stack
      </h3>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group, groupIdx) => (
          <div 
            key={groupIdx} 
            className={`p-6 rounded-xl border transition-colors ${
              darkMode ? 'bg-slate-900 border-slate-700' : 'bg-slate-50 border-slate-100'
            }`}
          >
            <p className="text-blue-500 font-bold text-xs uppercase tracking-widest mb-6">
              {group.category}
            </p>
            <div className="space-y-4">
              {group.items.map((skill, skillIdx) => {
                const proficiency = getSkillLevel(skill);
                const isAnimated = animatedSkills[`${groupIdx}-${skillIdx}`];
                return (
                  <div key={skill}>
                    <div className="flex justify-between mb-2">
                      <span className={`text-sm font-medium ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {skill}
                      </span>
                      <span className="text-xs text-blue-500 font-bold">{proficiency}%</span>
                    </div>
                    <div className={`h-2 rounded-full overflow-hidden ${darkMode ? 'bg-slate-800' : 'bg-slate-200'}`}>
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isAnimated ? `${proficiency}%` : '0%'
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}