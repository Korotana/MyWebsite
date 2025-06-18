import React, { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import coderImage from "./Coder.png"; // Make sure Coder.png is in src/ or public folder

export default function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach(section => observer.observe(section));
    return () => sections.forEach(section => observer.unobserve(section));
  }, []);

  return (
    <div className="dark-dashboard">
      {/* Floating Image */}
      <div className="floating-bg">
        <img src={coderImage} alt="Coder Illustration" className="floating-img" />
      </div>

      {/* Centered Name and Nav */}
      <header className="navbar centered-nav">
        <div className="logo drop-animated">Yuvraj Korotana – Software Developer</div>
        <nav>
          <ul>
            {['about', 'skills', 'projects', 'research', 'experience', 'contact'].map((section, i) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className={`drop-animated ${activeSection === section ? 'active' : ''}`}
                  style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section" id="home">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my projects, research & skills</p>
        </motion.div>

        <div className="drop-icons white-box-row">
          {[
            { name: 'Email', link: 'mailto:yvk110@usask.ca', icon: <FiMail /> },
            { name: 'GitHub', link: 'https://github.com/Korotana', icon: <FiGithub /> },
            { name: 'LinkedIn', link: 'https://linkedin.com/in/ykorotana', icon: <FiLinkedin /> },
            { name: 'DSA', link: 'https://github.com/Korotana/DSA', icon: <FiCode /> }
          ].map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + i * 0.3 }}
            >
              <a href={item.link} target="_blank" className="drop-box white-outline icon-button" rel="noreferrer">
                {item.icon}
                <span>{item.name}</span>
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Resume Sections */}
      <section className="content-section" id="about">
        <h2>About Me</h2>
        <p>Computer Science graduate from the University of Saskatchewan. Passionate about full-stack development and open-source research.</p>
      </section>

      <section className="content-section" id="skills">
        <h2>Skills</h2>
        <ul>
          <li>Frontend: HTML, CSS, React, Selenium</li>
          <li>Backend: Python, Django, Node.js</li>
          <li>DevOps: Docker, Git, Firebase, GCP</li>
        </ul>
      </section>

      <section className="content-section" id="projects">
        <h2>Projects</h2>
        <p>Coming soon...</p>
      </section>

      <section className="content-section" id="research">
        <h2>Research</h2>
        <p>Coming soon...</p>
      </section>

      <section className="content-section" id="experience">
        <h2>Experience</h2>
        <p>Coming soon...</p>
      </section>

      <section className="content-section" id="contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:yvk110@usask.ca">yvk110@usask.ca</a></p>
      </section>
    </div>
  );
}
