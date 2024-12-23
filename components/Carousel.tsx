"use client"
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    url: "/assets/banner1.jpg",
    title: "Transform Your Future",
    subtitle: "With Impact Lab's Professional Courses"
  },
  {
    url: "/assets/banner2.jpg",
    title: "Learn & Grow",
    subtitle: "Expert-Led Training Programs"
  },
  {
    url: "/assets/banner3.jpg",
    title: "Skill Development",
    subtitle: "Industry-Ready Certification Courses"
  },
  {
    url: "/assets/banner4.jpg",
    title: "Career Growth",
    subtitle: "Unlock Your Potential"
  },
  {
    url: "/assets/banner5.jpg",
    title: "Join Us Today",
    subtitle: "Start Your Success Journey"
  },
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      // Swipe left
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      // Swipe right
      prevSlide();
    }
  };

  // Auto-play functionality
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <div className="relative w-full group">
      {/* Dynamic height based on screen size */}
      <div 
        className="h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-full relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-20" />

        {/* Main Slide */}
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full bg-center bg-cover duration-500 ease-in-out transform transition-transform"
          role="img"
          aria-label={slides[currentIndex].title}
        />

        {/* Slide Content */}
        {/* <div className="absolute inset-0 flex flex-col justify-center z-30 px-4 sm:px-8 md:px-16">
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
            {slides[currentIndex].title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90">
            {slides[currentIndex].subtitle}
          </p>
        </div> */}

        {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block">
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-30 p-1 sm:p-2 rounded-full bg-black/20 text-white cursor-pointer hover:bg-black/40 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-30 p-1 sm:p-2 rounded-full bg-black/20 text-white cursor-pointer hover:bg-black/40 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
          </button>
        </div>

        {/* Dots/Thumbnails - Responsive sizing */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 z-30">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`
                transition-all duration-300 rounded-full
                ${currentIndex === slideIndex 
                  ? 'w-4 sm:w-6 bg-white' 
                  : 'w-2 sm:w-3 bg-white/50 hover:bg-white/80'}
                h-2 sm:h-3
              `}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}