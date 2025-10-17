
import React from 'react';
import { services } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Products & Services</h2>
          <div className="w-24 h-1 bg-fire-red mb-2 mx-auto"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">A complete range of solutions for your project needs.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((category) => (
            <div key={category.title} className="bg-light-gray rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
              <h3 className="text-2xl font-bold text-fire-red mb-6">{category.title}</h3>
              <ul className="space-y-4">
                {category.items.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-fire-red mr-3 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                    <span className="text-medium-gray">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
