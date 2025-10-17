
import React from 'react';
import { whyChooseUs } from '../constants';

const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-4">Why Choose <span className="text-fire-red">Firetech?</span></h2>
            <div className="w-24 h-1 bg-fire-red mb-6"></div>
            <p className="text-lg text-medium-gray leading-relaxed mb-8">
              We provide a combination of superior products, expert service, and proven reliability to ensure your project's success.
            </p>
            <div className="space-y-6">
              {whyChooseUs.map((item, index) => (
                <div key={index}>
                  <h3 className="text-xl font-bold text-dark-gray mb-2">{item.title}</h3>
                  <p className="text-medium-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-96 lg:h-full min-h-[400px]">
             <img src="https://picsum.photos/600/800?random=3" alt="Industrial pipes" className="absolute w-full h-full object-cover rounded-lg shadow-2xl"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
