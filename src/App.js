import React, { useEffect, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiCode } from "react-icons/fi";
import coderImage from "./Coder.png"; // Make sure Coder.png is in src/ or public folder
import ProjectCarousel from './ProjectCarousel';
import ExperienceCards from "./ExperienceCards";
import CertificationsSection from './Certifications';
import ContactForm from "./ContactForm";
import PdfViewer from './PdfViewer';






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


useEffect(() => {
  const navbar = document.querySelector(".navbar");

  const handleScroll = () => {
    if (window.scrollY > 10) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  };

  // Trigger on load too (in case you reload mid-scroll)
  handleScroll();

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="dark-dashboard">
      {/* Floating Image */}
      <div className="floating-bg">
        <img src={coderImage} alt="Coder Illustration" className="floating-img" />
      </div>

<header className="navbar centered-nav">
  <div className="navbar-inner">
    <div className="logo drop-animated">Yuvraj Korotana – Software Developer</div>
    <nav>
      <ul>
        {['skills', 'projects', 'research', 'experience', 'contact'].map((section, i) => (
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
  </div>
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
          <p>Explore my Work Experience, Projects, Certifications, and Skills</p>
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

      {/*/!* Resume Sections *!/*/}
      {/*<section className="content-section" id="about">*/}
      {/*  <h2>About Me</h2>*/}
      {/*  <p>Computer Science graduate from the University of Saskatchewan. Passionate about Software Development.</p>*/}
      {/*</section>*/}

<section className="content-section" id="skills">
  <h2>Skills</h2>
  <div className="skills-grid">
    <div className="skill-card">
      <h3>Frontend</h3>
      <p>HTML5, CSS/SCSS, Bootstrap, JavaScript(ES6+), JQuery, Typescript, Reactjs, Selenium</p>
    </div>
    <div className="skill-card">
      <h3>Backend</h3>
      <p>Python, Java, Nodejs, Express, Django, MongoDB, MySQL, Firebase, Google Cloud, SQL, AWS(Basic), SSH</p>
    </div>
    <div className="skill-card">
      <h3>Systems and Tools</h3>
      <p>Git, Postman, Docker, JIRA, Confluence, Figma, Balsamiq, Canva, PyCharm, Intellij, VS Code</p>
    </div>
    <div className="skill-card">
      <h3>Testing</h3>
      <p>Client Side Testing, Unit Tests, Integration Tests, Validation Tests, Functional Tests</p>
    </div>
  </div>
</section>


<ProjectCarousel />
<ExperienceCards />

      <section className="content-section" id="certifications">
        <h2>Certifications</h2>
        <CertificationsSection />
      </section>

      <section className="content-section" id="pdf">
        <h2>Research Report</h2>
        <PdfViewer />
      </section>


      <section className="content-section" id="contact">
        <h2>Contact</h2>
        <ContactForm />
      </section>
    </div>
  );
}
