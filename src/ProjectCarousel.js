import React from 'react';
import './ProjectCarousel.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const projects = [
  // { title: 'Reddit Sentiment Analyzer', img: require('..') },
  // { title: 'E-Commerce Web App', img: require('../assets/project2.png') },
  { title: 'Analysing Pull Request Acceptance Rate(Git, Python, FastAPI)', img: require('./images/GitProjects/AnalysePR.png') },
  { title: 'DSA Practice(Python, Java, Bit Manipulation)', img: require('./images/GitProjects/Dsa.png') },
  { title: 'Graphical Editor(Java)', img: require('./images/GitProjects/targetpractice.png') },
  { title: 'Full Featured E-Commerce App(MERN)', img: require('./images/GitProjects/Ecommerce.jpeg') },
  { title: 'Huddle - Full Stack Android App(Java, Firebase)', img: require('./images/GitProjects/Huddle.png') },
  { title: 'Social Media Site(Python, Django)', img: require('./images/GitProjects/Huddle.png') },
  { title: 'Windows 11 System Health Tool(Command Line)', img: require('./images/GitProjects/Powershell.png') },
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
            <div className="project-card">
              <img src={project.img} alt={project.title} />
              <h4>{project.title}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProjectCarousel;
