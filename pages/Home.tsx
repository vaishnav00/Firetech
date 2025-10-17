import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import VisionMission from '../components/VisionMission';
import CoreValues from '../components/CoreValues';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import WhyChooseUs from '../components/WhyChooseUs';
import Clients from '../components/Clients';
import Contact from '../components/Contact';
import Brands from '../components/Brands';
import Certifications from '../components/Certifications';

interface HomeProps {
    setCurrentPage: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ setCurrentPage }) => {
  return (
    <>
      <Hero setCurrentPage={setCurrentPage} />
      <About />
      <VisionMission />
      <CoreValues />
      <Services />
      <Brands />
      <Gallery />
      <WhyChooseUs />
      <Clients />
      <Certifications />
      <Contact />
    </>
  );
};
export default Home;