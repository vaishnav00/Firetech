
import React from 'react';
import { aboutContent } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
             <div className="absolute -top-4 -left-4 w-full h-full border-4 border-fire-red rounded-lg transform -rotate-2"></div>
            <img 
              src="https://picsum.photos/800/600?random=2" 
              alt="Fire Hydrant" 
              className="rounded-lg shadow-2xl relative z-10"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-4">About <span className="text-fire-red">Firetech</span></h2>
            <div className="w-24 h-1 bg-fire-red mb-6"></div>
            <p className="text-lg text-medium-gray leading-relaxed">
              {aboutContent}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
