import React, { useState } from 'react';
import { contactInfo, socialLinks } from '../constants';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, LinkedInIcon, TwitterIcon, FacebookIcon } from './icons/Icons';

const iconMap: { [key: string]: React.ReactNode } = {
  LinkedIn: <LinkedInIcon />,
  Twitter: <TwitterIcon />,
  Facebook: <FacebookIcon />,
};


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend server.
    console.log('Form submitted:', formData);
    setFormStatus('Thank you for your message! We will get back to you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormStatus(''), 5000); // Clear status after 5 seconds
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-fire-red mb-2 mx-auto"></div>
          <p className="text-lg text-medium-gray max-w-3xl mx-auto">We're ready to discuss your project needs and provide the right solutions. Contact us today to speak with our team.</p>
        </div>
        <div className="max-w-6xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-2xl grid md:grid-cols-2 gap-12">
          {/* Left Column: Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-dark-gray mb-8">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <PhoneIcon />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Call Us</h4>
                  {contactInfo.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s/g, '')}`} className="block text-medium-gray hover:text-fire-red">{phone}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-start">
                <EnvelopeIcon />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Email Us</h4>
                  {contactInfo.emails.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block text-medium-gray hover:text-fire-red">{email}</a>
                  ))}
                </div>
              </div>
              <div className="flex items-start">
                <MapPinIcon />
                <div className="ml-4">
                  <h4 className="font-bold text-lg">Visit Us</h4>
                  <p className="text-medium-gray">{contactInfo.address.line1}</p>
                  <p className="text-medium-gray">{contactInfo.address.line2}</p>
                  <p className="text-medium-gray">{contactInfo.address.line3}</p>
                </div>
              </div>
            </div>
            <div className="mt-10">
              <h4 className="font-bold text-lg mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map(link => (
                  <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-medium-gray hover:text-fire-red transition-colors duration-300">
                    {iconMap[link.name]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-dark-gray mb-8">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-medium-gray font-medium mb-2">Full Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fire-red focus:outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="email" className="block text-medium-gray font-medium mb-2">Email Address</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fire-red focus:outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-medium-gray font-medium mb-2">Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fire-red focus:outline-none transition-shadow" />
              </div>
              <div>
                <label htmlFor="message" className="block text-medium-gray font-medium mb-2">Your Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-fire-red focus:outline-none transition-shadow"></textarea>
              </div>
              <div>
                <button type="submit" className="w-full bg-fire-red text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-fire-red-dark transition-all duration-300 transform hover:scale-105">
                  Send Message
                </button>
              </div>
              {formStatus && (
                <p className="text-center text-green-600 mt-4">{formStatus}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
