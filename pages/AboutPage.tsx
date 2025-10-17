
import React from 'react';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import Certifications from '../components/Certifications';

const PageHeader = ({ title }: { title: string }) => (
    <section className="pt-32 pb-16 bg-dark-gray" style={{ backgroundImage: 'url(https://picsum.photos/1920/400?grayscale&blur=1&random=5)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-6 text-center text-white bg-black bg-opacity-50 py-8 rounded">
            <h1 className="text-5xl font-bold">{title}</h1>
        </div>
    </section>
);

const AboutPage: React.FC = () => {
  return (
    <>
      <PageHeader title="About Us" />
      <About />
      <VisionMission />
      <CoreValues />
      <Certifications />
    </>
  );
};
export default AboutPage;