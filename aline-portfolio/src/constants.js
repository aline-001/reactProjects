export const CV_DATA = {
  // Added this so App.jsx doesn't crash
  bio: "Full-Stack Engineer with a passion for blending high-end fashion tech with industrial robotics. Based in Kigali, Rwanda.",
  
  // Added this so Skills.jsx doesn't crash
  skills: [
    { 
      category: "Web & Software", 
      items: ["React.js", "Tailwind CSS", "Django", "Python"] 
    },
    { 
      category: "Hardware & Systems", 
      items: ["C++", "Qt Framework", "Embedded Systems", "Robotics"] 
    }
  ],
  
  projects: [
    {
        title: "CivicConnect",
        cat: "Gov-Tech / MVP",
        desc: "A citizen engagement system facilitating transparent communication between the public and government agencies with automated status tracking.",
        tech: ["Django 5.2", "Python 3.13", "JavaScript", "PostgreSQL"]
    },
    {
      title: "Élégance Lady",
      cat: "Commerce + ML",
      desc: "Luxury boutique platform with ML-driven virtual fitting rooms.",
      tech: ["React", "Django", "ML"]
    },
    {
      title: "Qt Screen Manager",
      cat: "Desktop App",
      desc: "Industrial-grade Qt Widget application for managing multi-screen robotics displays.",
      tech: ["C++", "Qt Framework", "Embedded"]
    },
    {
      title: "MediVistaX",
      cat: "Health-Tech",
      desc: "A digital healthcare ecosystem designed to connect patients with specialized medical services in Rwanda.",
      tech: ["React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Property Management System",
      cat: "Management",
      desc: "Automated lease and tenant tracking system.",
      tech: ["Django", "Python", "SQLite"]
    }
  ]
};