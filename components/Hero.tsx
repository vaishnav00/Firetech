
import React from 'react';

interface HeroProps {
  setCurrentPage: (page: string) => void;
}

const Hero: React.FC<HeroProps> = ({ setCurrentPage }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 bg-dark-gray z-0">
        <img src="https://picsum.photos/1920/1080?grayscale&blur=2&random=1" alt="Abstract Background" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-transparent z-10"></div>
      <div className="relative z-20 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold uppercase tracking-wider">
          <span className="text-fire-red">Firetech</span> Trading & Contracting
        </h1>
        <p className="mt-6 text-lg md:text-2xl font-light text-light-gray max-w-3xl mx-auto">
          Building trust through quality, safety, and excellence.
        </p>
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); setCurrentPage('contact'); }}
          className="mt-10 inline-block bg-fire-red text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-fire-red-dark transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </section>
  );
};

export default Hero;
