
import React from 'react';
import Contact from '../components/Contact';

const PageHeader = ({ title }: { title: string }) => (
    <section className="pt-32 pb-16 bg-dark-gray" style={{ backgroundImage: 'url(https://picsum.photos/1920/400?grayscale&blur=1&random=8)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="container mx-auto px-6 text-center text-white bg-black bg-opacity-50 py-8 rounded">
            <h1 className="text-5xl font-bold">{title}</h1>
        </div>
    </section>
);

const ContactPage: React.FC = () => {
  return (
    <>
      <PageHeader title="Get In Touch" />
      <Contact />
    </>
  );
};
export default ContactPage;
