import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import './PdfViewer.css';

// Swiper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as SwiperPagination } from 'swiper/modules'; // Renamed to avoid conflict
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Set the worker source
pdfjs.GlobalWorkerOptions.workerSrc = `/pdf_workers/pdf.worker.min.mjs`; // Adjust if .js

export default function PdfViewer() {
  const [numPages, setNumPages] = React.useState(null);
  const [swiperInstance, setSwiperInstance] = React.useState(null); // To control Swiper externally
  const researchpdf = '/pdfs/AnalysingPRAcceptanceRate.pdf';

  const onLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    // If you need to reset Swiper to page 1 here, you'd use swiperInstance.slideTo(0);
    // but often Swiper handles its own initial slide.
  };

  const onSlideChange = (swiper) => {
    // This can be used if you need to update a `pageNumber` state
    // but Swiper handles the visual transition itself.
    // console.log('Swiper active index is', swiper.activeIndex);
  };


  return (
    <div className="pdf-container">
      <Document
        file={researchpdf}
        onLoadSuccess={onLoadSuccess}
        loading={<p>Loading PDF...</p>}
      >
        <Swiper
          onSwiper={setSwiperInstance} // Get the Swiper instance
          modules={[Navigation, SwiperPagination]}
          navigation={true} // Enable prev/next buttons
          pagination={{ clickable: true }} // Enable pagination dots
          spaceBetween={0} // No space between slides
          slidesPerView={1} // Show one page at a time
          onSlideChange={onSlideChange}
          // You might need to set a fixed height for the Swiper container
          // style={{ height: '700px' }} // Example fixed height
        >
          {numPages && Array.from(new Array(numPages), (_, index) => (
            <SwiperSlide key={`slide_${index + 1}`}>
              <Page
                pageNumber={index + 1}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                // Optional: set width to control render size. 'auto' makes it fill available space.
                // width={700} // Example: render at a specific width
                // height={null} // Let height scale proportionally
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Document>

      {/* Download Button (Keep if needed) */}
      <a
        href="./AnalysingPRAcceptanceRate.pdf"
        download="PR_Acceptance_Analysis.pdf"
        className="download-btn"
      >
        Download PDF
      </a>
    </div>
  );
}
