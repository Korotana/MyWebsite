import React, { useRef, useEffect } from 'react';
import './Certifications.css';

import Mern from './images/Certifications/Mern.jpg';
import Nodejs from './images/Certifications/Nodejs.png';
import ReactCert from './images/Certifications/React.png';
import RestApi from './images/Certifications/RestApi.png';
import testindebugging from './images/Certifications/testingdebugging.jpg';
import problemsolving from './images/Certifications/ProblemSolving.png';
import pythondjango from  './images/Certifications/PythonDjango.jpg'
import sql from './images/Certifications/sql.png'

const certificateImages = [
  { src: Mern, label: 'MERN Full Stack Developer' },
  { src: Nodejs, label: 'Node.js Developer' },
  { src: ReactCert, label: 'Frontend Developer (React)' },
  { src: RestApi, label: 'REST API (Intermediate)' },
  { src: problemsolving, label: 'Problem Solving (Intermediate)' },
  { src: testindebugging, label: 'Testing & Debugging' },
  { src: sql, label: 'Advanced SQL' },
  { src: pythondjango, label: 'Python & Django' }
];

export default function CertificationsSection() {

const handleImageClick = (e) => {
    if (e.target.requestFullscreen) {
      e.target.requestFullscreen();
    } else if (e.target.webkitRequestFullscreen) {
      e.target.webkitRequestFullscreen();
    } else if (e.target.msRequestFullscreen) {
      e.target.msRequestFullscreen();
    }
  };

  return (
    <div className="cert-slider">
  <div className="cert-track">
    {[...certificateImages, ...certificateImages].map((item, idx) => (
      <div className="cert-item" key={idx}>
        <img
          src={item.src}
          alt={item.label}
          className="cert-image"
          onClick={handleImageClick}
        />
        <p className="cert-label">{item.label}</p>
      </div>
    ))}
  </div>
</div>
  );
}
