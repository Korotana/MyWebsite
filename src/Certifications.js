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
  Mern,
  Nodejs,
  ReactCert,
  RestApi,
  problemsolving,
  testindebugging,
  sql,
  pythondjango,
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
        {[...certificateImages, ...certificateImages].map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Certificate ${idx + 1}`}
            className="cert-image"
            onClick={handleImageClick}
          />
        ))}
      </div>
    </div>
  );
}
