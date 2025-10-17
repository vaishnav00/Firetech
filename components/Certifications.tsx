import React from 'react';
import { certifications } from '../constants';

const Certifications: React.FC = () => {
  const duplicatedCerts = [...certifications, ...certifications];

  return (
    <section id="certifications" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Certifications &amp; Licenses</h2>
          <div className="w-24 h-1 bg-fire-red mb-2 mx-auto"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">Committed to quality, safety, and regulatory compliance.</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedCerts.map((cert, index) => (
              <div key={index} className="flex-shrink-0 w-72 h-32 mx-8 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
                {cert.logo}
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-white to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
