import React, { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Define data for each slide
  const slides = [
    {
      image: 'images/banner.jpg',
      heading: 'Heading 1',
      text: 'Text for image 1.',
      buttons: ['Button 1', 'Button 2']
    },
    {
      image: 'images/banner2.jpg',
      heading: 'Heading 2',
      text: 'Text for image 2.',
      buttons: ['Button 1', 'Button 2']
    },
    {
      image: 'images/banner3.jpg',
      heading: 'Heading 3',
      text: 'Text for image 3.',
      buttons: ['Button 1', 'Button 2']
    },
    {
      image: 'images/banner4.jpg',
      heading: 'Heading 4',
      text: 'Text for image 4.',
      buttons: ['Button 1', 'Button 2']
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    }, 10000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="carousel-container relative w-full h-screen md:h-[100vh] overflow-hidden">
      <div className="carousel-inner flex transition-transform duration-1000 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>

        {slides.map((slide, index) => (
          <div className="carousel-item flex-shrink-0 w-full relative" key={index}>

            <img src={slide.image} alt={slide.heading} className="w-full h-full object-cover" />
          </div>
        ))}

      </div>

      <div className="carousel-navigation absolute top-3/4 -translate-y-3/4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`navigation-circle w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-zinc-400'}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>


      <div className="carousel-controls flex justify-between absolute top-1/2 left-0 right-0 transform -translate-y-1/2 ">

        <button className="prev" onClick={prevSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
            <path d="M15 6C15 6 9.00001 10.4189 9 12C8.99999 13.5812 15 18 15 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="next" onClick={nextSlide}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#fff"} fill={"none"}>
            <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>

        </button>

      </div>
    </div>


  );

};

export default Carousel;
