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
  { title: 'Analysing Pull Request Acceptance Rate', img: require('./images/AnalysePR.png') },
  { title: 'DSA Practice', img: require('./images/Dsa.png') },
  { title: 'Graphical Editor', img: require('./images/targetpractice.png') },
  { title: 'Full Featured E-Commerce App', img: require('./images/Ecommerce.jpeg') },
  { title: 'Huddle - Full Stack App', img: require('./images/Huddle.png') },
  { title: 'Social Media Site', img: require('./images/Huddle.png') },
  // { title: 'System Health Tool', img: require('../assets/project4.png') },
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
