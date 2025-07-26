import React from 'react';
import './ProjectCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  // ... (your updated projects array with 'url' properties) ...
  {
    title: 'Analysing Pull Request Acceptance Rate(Git, Python, FastAPI)',
    img: require('./images/GitProjects/AnalysePR.png'),
    url: 'https://github.com/YuvrajKorotana/Research-Paper-Analysing-PR-Acceptance-Rate' // Example URL
  },
  {
    title: 'DSA Practice(Python, Java, Bit Manipulation)',
    img: require('./images/GitProjects/Dsa.png'),
    url: 'https://github.com/Korotana/DSA' // Example URL
  },
  {
    title: 'Graphical Editor(Java)',
    img: require('./images/GitProjects/targetpractice.png'),
    url: 'https://github.com/Korotana/Target-Practice-Graphical-Editor_and_Drawing-Board-App' // Example URL
  },
  {
    title: 'Full Featured E-Commerce App(MERN)',
    img: require('./images/GitProjects/Ecommerce.jpeg'),
    url: 'https://github.com/Korotana/E-Commerce-Application' // Example URL
  },
  {
    title: 'Huddle - Full Stack Android App(Java, Firebase)',
    img: require('./images/GitProjects/Huddle.png'),
    url: 'https://github.com/Korotana/JavaFullStackHuddleApp' // Example URL
  },
  {
    title: 'Social Media Site(Python, Django)',
    img: require('./images/GitProjects/SocialMedia.jpeg'), // Assuming this is a placeholder image
    url: 'https://github.com/Korotana/SocialMediaSiteClone' // Example URL
  },
  {
    title: 'Windows 11 System Health Tool(Command Line)',
    img: require('./images/GitProjects/Powershell.png'),
    url: 'https://github.com/Korotana/Automated-System-Health-Check-and-Optimization-Tool' // Example URL
  },
];

const ProjectCarousel = () => {
  return (
    <section className="content-section" id="projects">
      <h2>Projects</h2>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={90}
        slidesPerView={2}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        grabCursor={true}
        loop={true}
        className="project-carousel"
      >
        {projects.map((project, i) => (
          <SwiperSlide key={i}>
            {/* Wrap the project-card with an <a> tag */}
            <a href={project.url} target="_blank" rel="noopener noreferrer" className="project-link">
              <div className="project-card">
                <img src={project.img} alt={project.title} />
                <h4>{project.title}</h4>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectCarousel;
