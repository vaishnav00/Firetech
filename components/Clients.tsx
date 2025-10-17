
import React from 'react';
import { clientsContent } from '../constants';

const Clients: React.FC = () => {
  return (
    <section id="clients" className="py-20 md:py-32 bg-dark-gray text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Clients & Markets</h2>
        <div className="w-24 h-1 bg-fire-red mb-8 mx-auto"></div>
        <p className="text-lg text-light-gray leading-relaxed max-w-4xl mx-auto">
          {clientsContent}
        </p>
      </div>
    </section>
  );
};

export default Clients;
