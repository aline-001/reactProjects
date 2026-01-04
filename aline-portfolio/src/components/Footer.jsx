import React from 'react';
import { CV_DATA } from '../constants';

export default function Footer({ darkMode }) {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'GitHub', url: CV_DATA.github, icon: 'fab fa-github' },
    { name: 'Email', url: `mailto:${CV_DATA.email}`, icon: 'fas fa-envelope' },
    { name: 'Instagram', url: 'https://www.instagram.com/alineasiimwe/', icon: 'fab fa-instagram' }
  ];

  return (
    <footer className={`border-t ${darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-slate-50'}`}>
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className={`font-black text-lg md:text-xl tracking-tighter mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
              ALINE<span className="text-blue-500">_</span>
            </h3>
            <p className={`text-xs md:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              IT Student | Full-Stack Developer
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-bold mb-4 text-xs md:text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>Contact</h4>
            <div className={`space-y-2 text-xs md:text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <p>
                <a href={`mailto:${CV_DATA.email}`} className="hover:text-blue-500 transition break-all">
                  {CV_DATA.email}
                </a>
              </p>
              <p>{CV_DATA.phone}</p>
              <p>{CV_DATA.location}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`font-bold mb-4 text-xs md:text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>Quick Links</h4>
            <div className="space-y-2">
              {['Home', 'About', 'Projects', 'Contact'].map(link => (
                <a 
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`block text-xs md:text-sm transition ${
                    darkMode 
                      ? 'text-slate-400 hover:text-blue-500' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className={`font-bold mb-4 text-xs md:text-base ${darkMode ? 'text-white' : 'text-slate-900'}`}>Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(social => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition text-lg ${
                    darkMode
                      ? 'bg-slate-800 hover:bg-blue-600 text-white'
                      : 'bg-slate-200 hover:bg-blue-600 text-slate-900 hover:text-white'
                  }`}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className={`border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'} pt-8`}>
          <p className={`text-center text-sm ${darkMode ? 'text-slate-500' : 'text-slate-600'}`}>
            © {currentYear} Asimwe Aline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
