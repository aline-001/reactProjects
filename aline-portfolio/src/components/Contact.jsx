// src/components/Contact.jsx
import React, { useState } from 'react';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const inputClass = `w-full p-4 rounded-xl border outline-none transition focus:ring-2 focus:ring-blue-500 
    ${darkMode 
      ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' 
      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'}`;

  return (
    <section className="max-w-4xl mx-auto py-20 px-6">
      <div className={`p-10 rounded-3xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <h2 className="text-4xl font-extrabold mb-4">Get In Touch</h2>
        <p className={`mb-10 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Whether it's a robotics project or an Élégance Lady inquiry, my inbox is open.
        </p>

        <form className="grid gap-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className={inputClass}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className={inputClass}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Tell me more about your requirements..."
            className={inputClass}
            rows="5"
            onChange={handleChange}
          ></textarea>
          <button className="bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}