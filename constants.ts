import React from 'react';
import { BrandAlpha, BrandBravo, BrandCharlie, BrandDelta, BrandEcho, BrandFoxtrot } from './components/icons/BrandLogos';
import { CertISO, CertCivilDefence, CertQuality, CertSafety } from './components/icons/CertificateLogos';

export const navLinks = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About Us' },
  { id: 'services', title: 'Services' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export const aboutContent = "Firetech Trading & Contracting is a leading supplier of fire protection, safety, and building material solutions in Qatar. We specialize in delivering high-quality products and reliable services that safeguard lives, protect assets, and support infrastructure development across the region. With a strong reputation for trust, quality, and timely delivery, Firetech is a preferred partner for contractors, developers, and industrial clients.";

export const visionContent = "Our vision is to be universally recognized as Qatar's most trusted and sought-after leader for fire safety, building materials, and contracting solutions. We aspire to set the industry benchmark for excellence, where the Firetech name is synonymous with unwavering reliability, uncompromising quality, and exceptional service.";

export const missionContent = "Our mission is to be an indispensable partner in Qatar's development by delivering integrated, world-class solutions across the fire safety, construction, and industrial supply sectors. We are dedicated to safeguarding lives, protecting critical assets, and enhancing the built environment through the provision of superior, internationally certified products and expert contracting services.";

export const coreValues = [
  {
    title: 'Safety First',
    description: 'We prioritize the well-being of people and communities in everything we do.',
  },
  {
    title: 'Reliability',
    description: 'We build lasting partnerships through consistent and trustworthy service.',
  },
  {
    title: 'Quality',
    description: 'We provide only internationally certified products and materials.',
  },
  {
    title: 'Commitment',
    description: 'We are dedicated to delivering on time and exceeding client expectations.',
  },
  {
    title: 'Innovation',
    description: 'We leverage advanced solutions to meet modern construction and safety needs.',
  },
  {
    title: 'Integrity',
    description: 'We operate with honesty and transparency in every project.',
  },
];

export const services = [
    {
        title: 'Fire & Safety Solutions',
        items: [
            'Advanced Firefighting & Fire Alarm Systems',
            'Personal Protective Equipment (PPE) & Safety Gear',
        ],
    },
    {
        title: 'Construction & Industrial Supplies',
        items: [
            'Building Materials, Tools & Equipment',
            'Piping Products & Accessories',
            'Fasteners & Industrial Hardware',
        ],
    },
    {
        title: 'Contracting Services',
        items: [
            'General Contracting & Construction',
            'MEP (Mechanical, Electrical & Plumbing)',
            'Civil & Structural Works',
            'Facility Maintenance',
        ],
    },
];

export const whyChooseUs = [
    {
        title: 'Comprehensive Product Range',
        description: 'Gain access to a complete portfolio of certified safety and construction products, all meeting the highest international quality and safety standards.',
    },
    {
        title: 'Trusted Global Partnerships',
        description: 'Strong partnerships with trusted international manufacturers ensure product quality and reliability.',
    },
    {
        title: 'Experienced & Dedicated Team',
        description: 'Our skilled workforce and experienced management team are fully dedicated to providing exceptional support and ensuring total client satisfaction.',
    },
    {
        title: 'Proven Track Record',
        description: 'With a history of successful projects across the region, we have the proven expertise and reliability to deliver results you can depend on.',
    },
    {
        title: 'Reliable Supply Chain',
        description: 'Benefit from our competitive pricing and a robust supply chain network designed for timely and efficient delivery.',
    },
];

export const clientsContent = "Firetech serves construction companies, government agencies, industrial facilities, and commercial establishments throughout Qatar. Our products are trusted in projects ranging from residential developments and infrastructure to large-scale industrial installations.";

export const contactInfo = {
    phones: [
        '+974 4005 4812',
        '+974 5522 1465',
        '+974 7011 1355',
        '+974 6006 9787',
    ],
    emails: [
        'info@firetechqa.com',
        'suresh@firetechqa.com',
    ],
    address: {
        line1: 'Office #10, 2nd Floor, Block 54 & 55,',
        line2: 'Sayer Building, Barwa Commercial Avenue,',
        line3: 'P.O. Box 22432, Doha, Qatar',
    }
};

export const socialLinks = [
    { name: 'LinkedIn', url: '#' },
    { name: 'Twitter', url: '#' },
    { name: 'Facebook', url: '#' },
];

// FIX: Replaced JSX syntax with React.createElement to prevent TypeScript from misinterpreting it as a generic type in a .ts file.
export const brands: { name: string, logo: React.ReactNode }[] = [
    { name: 'Brand Alpha', logo: React.createElement(BrandAlpha) },
    { name: 'Brand Bravo', logo: React.createElement(BrandBravo) },
    { name: 'Brand Charlie', logo: React.createElement(BrandCharlie) },
    { name: 'Brand Delta', logo: React.createElement(BrandDelta) },
    { name: 'Brand Echo', logo: React.createElement(BrandEcho) },
    { name: 'Brand Foxtrot', logo: React.createElement(BrandFoxtrot) },
];

export const certifications: { name: string, logo: React.ReactNode }[] = [
    { name: 'ISO 9001:2015', logo: React.createElement(CertISO) },
    { name: 'Qatar Civil Defence', logo: React.createElement(CertCivilDefence) },
    { name: 'Quality Assured', logo: React.createElement(CertQuality) },
    { name: 'Occupational Safety Standard', logo: React.createElement(CertSafety) },
];