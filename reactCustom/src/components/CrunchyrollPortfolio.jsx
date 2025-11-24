import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, ExternalLink, Code, Briefcase, Award, GraduationCap, ChevronDown } from 'lucide-react';

export default function CrunchyrollPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    languages: ['JavaScript', 'Java'],
    frameworks: ['HTML & CSS', 'Bootstrap', 'NodeJS', 'React', 'Tailwind CSS'],
    tools: ['MySQL', 'Git', 'Github', 'Figma'],
    soft: ['Problem-Solving', 'Team Player', 'Project Management', 'Adaptability'],
    design: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design', 'Interaction Design', 'Human Psychology']
  };

  const projects = [
    {
      title: 'Portfolio Website',
      date: 'May 2024',
      desc: 'Developed a portfolio website using React.js, JavaScript, and Tailwind CSS showcasing projects, education, and internships with sleek design and intuitive layout.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS'],
      link: 'https://portfoliovs1010.netlify.app/'
    },
    {
      title: 'News Aggregator',
      date: 'July 2024',
      desc: 'Developed a news website using MERN Stack with advanced filtering functionality, allowing users to sort news by choice and interest with intuitive navigation.',
      tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'API Integration'],
      link: 'https://headline-hub-news-aggregator-website.vercel.app/'
    },
    {
      title: 'Jaipur Kartik Yatra 2025',
      date: 'Sep 2025',
      desc: 'Built a responsive event website with room selection, chanting rounds input, gallery slider, countdown timer, and Google Sheets integration for dynamic registrations.',
      tech: ['React.js', 'Tailwind CSS', 'Google Sheets API'],
      link: 'https://yatra.iskconjiasarai.com/'
    }
  ];

  const experience = [
    {
      company: 'Tech Mountains',
      role: 'SDE Intern',
      period: 'June 2024 - Aug 2024',
      desc: 'Developed and maintained web applications, ensuring user-friendly, responsive, and secure solutions. Collaborated with design and backend teams to implement new features.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React']
    },
    {
      company: 'Programming Pathshala',
      role: 'Summer Training',
      period: 'June 2023 - July 2023',
      desc: 'Intensive summer training focused on MERN stack. Grasped concepts of hooks, props, useStates and useEffects.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'React']
    }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md shadow-lg shadow-orange-500/10' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center font-bold text-xl">
                VS
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Vidhi Singh
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize transition-colors hover:text-orange-500 ${activeSection === item ? 'text-orange-500' : ''}`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-orange-500">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/98 backdrop-blur-md border-t border-orange-500/20">
            <div className="px-4 py-4 space-y-3">
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left capitalize py-2 hover:text-orange-500 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-black to-black"></div>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-orange-500/5 rounded-full animate-pulse"
              style={{
                width: Math.random() * 100 + 50 + 'px',
                height: Math.random() * 100 + 50 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animationDelay: Math.random() * 5 + 's',
                animationDuration: Math.random() * 10 + 10 + 's'
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center text-5xl font-bold shadow-2xl shadow-orange-500/50 animate-pulse">
              VS
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Vidhi Singh
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2">Frontend Developer | React.js | UI/UX Designer</p>
          <p className="text-orange-400 mb-8">Crafting Beautiful Digital Experiences</p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="https://www.linkedin.com/in/vidhi10101/" target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg transition-all transform hover:scale-105">
              <Linkedin size={20} /> LinkedIn
            </a>
            <a href="https://github.com/Vidhi1010" target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-all transform hover:scale-105">
              <Github size={20} /> GitHub
            </a>
            <a href="mailto:vidhisinghvp1010@gmail.com"
               className="flex items-center gap-2 border-2 border-orange-500 hover:bg-orange-500 px-6 py-3 rounded-lg transition-all transform hover:scale-105">
              <Mail size={20} /> Email
            </a>
          </div>

          <button onClick={() => scrollToSection('about')} className="animate-bounce text-orange-500">
            <ChevronDown size={32} />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800/50 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <h3 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                <GraduationCap /> Education
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-lg">Bachelor of Technology - CSE</p>
                  <p className="text-orange-400">Lovely Professional University</p>
                  <p className="text-gray-400">August 2021 - June 2025 | 70.3%</p>
                </div>
                <div>
                  <p className="font-semibold">Intermediate</p>
                  <p className="text-orange-400">St. George Preparatory School</p>
                  <p className="text-gray-400">April 2018 - March 2020 | 76.4%</p>
                </div>
                <div>
                  <p className="font-semibold">Matriculation</p>
                  <p className="text-orange-400">Imperial Public School</p>
                  <p className="text-gray-400">April 2017 - March 2018 | 84.2%</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800/50 p-8 rounded-xl border border-orange-500/20 hover:border-orange-500/50 transition-all">
              <h3 className="text-2xl font-bold text-orange-500 mb-4 flex items-center gap-2">
                <Award /> Achievements
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">LeetCode</p>
                    <p className="text-gray-400">Successfully solved 100+ questions</p>
                    <a href="https://leetcode.com/u/vidhi_singh_1010/" target="_blank" rel="noopener noreferrer" 
                       className="text-orange-400 hover:text-orange-300 text-sm">View Profile →</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-semibold">HackNCrack Coding Competition</p>
                    <p className="text-gray-400">Successfully participated in coding competition organized by LPU students (March 2022)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-gray-900/50 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500 transition-all transform hover:scale-105">
                <h3 className="text-xl font-bold text-orange-500 mb-4 capitalize">{category === 'soft' ? 'Soft Skills' : category === 'design' ? 'Design Skills' : category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span key={skill} className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-orange-500 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-gray-900/80 rounded-xl overflow-hidden border border-orange-500/20 hover:border-orange-500 transition-all transform hover:scale-105 group">
                <div className="h-2 bg-gradient-to-r from-orange-500 to-orange-600"></div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-orange-400">{project.title}</h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" 
                       className="text-orange-500 hover:text-orange-400 transform group-hover:scale-110 transition-transform">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                  <p className="text-sm text-gray-400 mb-3">{project.date}</p>
                  <p className="text-gray-300 mb-4 text-sm">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-orange-500/10 text-orange-400 px-2 py-1 rounded text-xs border border-orange-500/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-gray-900/50 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500 transition-all">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-orange-400">{exp.role}</h3>
                    <p className="text-xl text-gray-300">{exp.company}</p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base">{exp.period}</span>
                </div>
                <p className="text-gray-300 mb-4">{exp.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((tech) => (
                    <span key={tech} className="bg-gray-800 px-3 py-1 rounded-full text-sm border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Let's Connect</span>
          </h2>
          <p className="text-gray-300 mb-12 text-lg">Interested in working together? Feel free to reach out!</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a href="mailto:vidhisinghvp1010@gmail.com" 
               className="bg-gray-900/50 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500 transition-all transform hover:scale-105 flex items-center gap-4">
              <Mail className="text-orange-500" size={32} />
              <div className="text-left">
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white">vidhisinghvp1010@gmail.com</p>
              </div>
            </a>
            
            <a href="tel:+919798725001"
               className="bg-gray-900/50 p-6 rounded-xl border border-orange-500/20 hover:border-orange-500 transition-all transform hover:scale-105 flex items-center gap-4">
              <Phone className="text-orange-500" size={32} />
              <div className="text-left">
                <p className="text-gray-400 text-sm">Phone</p>
                <p className="text-white">+91-9798725001</p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/vidhi10101/" target="_blank" rel="noopener noreferrer"
               className="w-14 h-14 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/Vidhi1010" target="_blank" rel="noopener noreferrer"
               className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://leetcode.com/u/vidhi_singh_1010/" target="_blank" rel="noopener noreferrer"
               className="w-14 h-14 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
              <Code size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-orange-500/20 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-gray-400">
          <p>© 2025 Vidhi Singh. All rights reserved.</p>
          <p className="text-sm mt-2">Built with React.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}