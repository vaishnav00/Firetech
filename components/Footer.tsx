import React from 'react';
import { socialLinks } from '../constants';
import { LinkedInIcon, TwitterIcon, FacebookIcon } from './icons/Icons';

const iconMap: { [key: string]: React.ReactNode } = {
  LinkedIn: <LinkedInIcon />,
  Twitter: <TwitterIcon />,
  Facebook: <FacebookIcon />,
};

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark-gray text-light-gray py-8">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map(link => (
                <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-light-gray hover:text-fire-red transition-colors duration-300">
                    {iconMap[link.name]}
                </a>
            ))}
        </div>
        <p>&copy; {currentYear} Firetech Trading & Contracting W.L.L. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
