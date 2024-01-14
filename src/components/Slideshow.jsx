import React, { useState, useEffect, useRef } from 'react';
import './Slideshow.css'; // Create this CSS file for styling
import newapp from '../img/newapp.png';
import sports from '../img/sports.png';
import media from '../img/media.png';
import Tech1 from '../img/Tech1.png';
import breakn from '../img/breakn.png';

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [newapp, sports, media, Tech1, breakn]; // Add image URLs

  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const slideshowRef = useRef(null);

  const goToNextSlide = () => {
    setCurrentIndex(nextIndex);
  };

  useEffect(() => {
    const intervalId = setInterval(goToNextSlide, 3000); // Change interval as needed

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex]);

  return (
    <div className="slideshow">
      <div className="image-container">
        {/* <img src={images[prevIndex]} alt={`Slide ${prevIndex}`} />  */}
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} ref={slideshowRef} />
        {/* <img src={images[nextIndex]} alt={`Slide ${nextIndex}`} /> */}
      </div>
    </div>
  );
};

export default Slideshow;
