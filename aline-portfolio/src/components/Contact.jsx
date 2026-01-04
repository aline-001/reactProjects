// src/components/Contact.jsx
import React, { useState } from 'react';

export default function Contact({ darkMode }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      // Form is valid - here you would send to backend
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 3 seconds
      setTimeout(() => setSubmitted(false), 3000);
    } else {
      setErrors(newErrors);
    }
  };

  const inputClass = `w-full p-4 rounded-xl border outline-none transition focus:ring-2 focus:ring-blue-500 
    ${darkMode 
      ? 'bg-slate-900 border-slate-800 text-white placeholder-slate-500' 
      : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'}`;

  return (
    <section id="contact" className="max-w-4xl mx-auto py-10 md:py-20 px-4 md:px-6">
      <div className={`p-6 md:p-10 rounded-3xl border ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-slate-50 border-slate-200'}`}>
        <h2 className={`text-3xl md:text-4xl font-extrabold mb-4 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Get In Touch</h2>
        <p className={`mb-10 text-sm md:text-base ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
          Whether it's a robotics project or an Élégance Lady inquiry, my inbox is open.
        </p>

        {submitted && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 font-semibold text-sm md:text-base">
            ✓ Message sent successfully! I'll get back to you soon.
          </div>
        )}

        <form className="grid gap-6" onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className={`${inputClass} ${errors.name ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="text-red-500 text-xs md:text-sm mt-2">{errors.name}</p>}
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className={`${inputClass} ${errors.email ? 'border-red-500 focus:ring-red-500' : ''}`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs md:text-sm mt-2">{errors.email}</p>}
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Tell me more about your requirements..."
              className={`${inputClass} ${errors.message ? 'border-red-500 focus:ring-red-500' : ''}`}
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="text-red-500 text-xs md:text-sm mt-2">{errors.message}</p>}
          </div>
          <button type="submit" className="bg-blue-600 text-white font-bold py-3 md:py-4 rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-600/20 text-sm md:text-base">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}