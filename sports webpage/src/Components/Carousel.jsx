import React, { useEffect, useState } from 'react';
import './Carousel.css';

const images = [
  { src: 'news_1.jpg', text: 'News headline 1' },
  { src: 'news_2.jpg', text: 'News headline 2' },
  { src: 'news_3.jpg', text: 'News headline 3' },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change image every 1 second
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 2000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [currentIndex]);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      {/* Image Carousel */}
      <div className="carousel-image">
        <img src={images[currentIndex].src} alt={`Image ${currentIndex + 1}`} />
      </div>

      {/* Next Button */}
      <button className="next-button" onClick={nextImage}>
        Next
      </button>

      {/* Breaking News Section */}
      <div className="breaking-news">
        <div className="breaking-text">Breaking News</div>
        <div className="news-carousel">
          {images[currentIndex].text}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

