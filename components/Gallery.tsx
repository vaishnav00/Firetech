
import React from 'react';

const images = [
  'https://picsum.photos/600/400?random=10',
  'https://picsum.photos/600/400?random=11',
  'https://picsum.photos/600/400?random=12',
  'https://picsum.photos/600/400?random=13',
  'https://picsum.photos/600/400?random=14',
  'https://picsum.photos/600/400?random=15',
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Work & Products</h2>
          <div className="w-24 h-1 bg-fire-red mb-2 mx-auto"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">A glimpse into the quality we deliver.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg group">
              <img 
                src={src} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
