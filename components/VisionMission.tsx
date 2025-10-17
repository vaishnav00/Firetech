
import React from 'react';
import { visionContent, missionContent } from '../constants';

const VisionMission: React.FC = () => {
  return (
    <section id="vision-mission" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-light-gray p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <div className="w-20 h-1 bg-fire-red mb-6"></div>
            <p className="text-medium-gray leading-relaxed">{visionContent}</p>
          </div>
          <div className="bg-dark-gray text-white p-8 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <div className="w-20 h-1 bg-fire-red mb-6"></div>
            <p className="text-light-gray leading-relaxed">{missionContent}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
