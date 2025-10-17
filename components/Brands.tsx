import React from 'react';
import { brands } from '../constants';

const Brands: React.FC = () => {
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section id="brands" className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Trusted Brands</h2>
          <div className="w-24 h-1 bg-fire-red mb-2 mx-auto"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">We partner with the best to deliver unparalleled quality.</p>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex animate-scroll">
            {duplicatedBrands.map((brand, index) => (
              <div key={index} className="flex-shrink-0 w-64 h-24 mx-8 flex items-center justify-center filter grayscale hover:grayscale-0 transition-all duration-300">
                {brand.logo}
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-light-gray to-transparent"></div>
          <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-light-gray to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
