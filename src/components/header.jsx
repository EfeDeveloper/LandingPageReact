import React from 'react';
import { FaArrowDown } from 'react-icons/fa';

const Header = ({ data }) => {
  const scrollToFeatures = () => {
    const element = document.getElementById('features');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="header"
      className="relative flex justify-center items-center h-screen min-h-[600px] overflow-hidden"
    >
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {data && data.videoUrl ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={data.videoPoster || ''}
            preload="metadata"
            className="absolute w-full h-full object-cover"
          >
            <source src={data.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          // Fallback: gradient si no hay video
          <div className="absolute inset-0 bg-gradient-primary"></div>
        )}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="z-10 relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
        <div
          className="space-y-6 opacity-0 animate-fade-in-up"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
          <h1
            className="opacity-0 font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight animate-fade-in-up"
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            {data ? data.title : 'Cargando...'}
          </h1>

          <p
            className="opacity-0 mx-auto max-w-3xl text-gray-100 text-lg sm:text-xl md:text-2xl animate-fade-in-up"
            style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
          >
            {data ? data.paragraph : 'Cargando...'}
          </p>

          <div
            className="opacity-0 pt-8 animate-fade-in-up"
            style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
          >
            <button
              onClick={scrollToFeatures}
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl px-8 py-4 rounded-lg font-semibold text-white text-lg hover:scale-105 transition-all duration-300 transform"
            >
              Descubre Más
              <FaArrowDown className="ml-2 w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="bottom-8 left-1/2 z-10 absolute opacity-0 -translate-x-1/2 animate-fade-in transform"
        style={{ animationDelay: '1.5s', animationFillMode: 'forwards' }}
      >
        <div className="animate-bounce">
          <FaArrowDown className="opacity-75 w-6 h-6 text-white" />
        </div>
      </div>
    </header>
  );
};

export default Header;
