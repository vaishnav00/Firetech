
import React from 'react';
import { coreValues } from '../constants';
import { ShieldCheckIcon, HandThumbUpIcon, StarIcon, RocketLaunchIcon, ScaleIcon, SparklesIcon } from './icons/Icons';

const iconMap: { [key: string]: React.ReactNode } = {
  "Safety First": <ShieldCheckIcon />,
  "Reliability": <HandThumbUpIcon />,
  "Quality": <StarIcon />,
  "Commitment": <RocketLaunchIcon />,
  "Innovation": <SparklesIcon />,
  "Integrity": <ScaleIcon />
};

const CoreValues: React.FC = () => {
  return (
    <section id="values" className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
        <div className="w-24 h-1 bg-fire-red mb-2 mx-auto"></div>
        <p className="text-lg text-medium-gray max-w-3xl mx-auto mb-16">The principles that guide every decision we make.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {coreValues.map((value) => (
            <div key={value.title} className="bg-white p-8 rounded-lg shadow-lg text-left transform hover:-translate-y-2 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <div className="text-fire-red mr-4">{iconMap[value.title]}</div>
                <h3 className="text-2xl font-bold text-dark-gray">{value.title}</h3>
              </div>
              <p className="text-medium-gray leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
