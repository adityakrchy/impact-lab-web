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

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

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
        className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-screen relative overflow-hidden"
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

        {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
        <div className="hidden md:block">
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 left-4 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white cursor-pointer hover:bg-black/40 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 right-4 -translate-y-1/2 z-30 p-2 rounded-full bg-black/20 text-white cursor-pointer hover:bg-black/40 transition transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots/Thumbnails - Responsive sizing */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 md:space-x-3 z-30">
          {slides.map((_, slideIndex) => (
            <button
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`
                transition-all duration-300 rounded-full
                ${currentIndex === slideIndex 
                  ? 'w-6 md:w-8 bg-white' 
                  : 'w-2 md:w-3 bg-white/50 hover:bg-white/80'}
                h-2 md:h-3
              `}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}