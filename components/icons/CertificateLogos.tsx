import React from 'react';

const logoClass = "max-h-24 w-auto";

export const CertISO: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="196" height="76" rx="5" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>
        <text x="100" y="35" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#111827">ISO 9001:2015</text>
        <text x="100" y="60" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#C00000">Certified</text>
    </svg>
);

export const CertCivilDefence: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 220 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="216" height="76" rx="5" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>
        <text x="110" y="35" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#111827">Qatar Civil Defence</text>
        <text x="110" y="60" fontFamily="Arial, sans-serif" fontSize="16" textAnchor="middle" fill="#C00000">Approved Contractor</text>
    </svg>
);


export const CertQuality: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="196" height="76" rx="5" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>
        <path d="M50 15 L60 40 L85 10 L60 65 L50 40" stroke="#C00000" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="135" y="48" fontFamily="Georgia, serif" fontSize="22" fontWeight="bold" textAnchor="middle" fill="#111827">Quality</text>
        <text x="135" y="68" fontFamily="Georgia, serif" fontSize="18" textAnchor="middle" fill="#374151">Assured</text>
    </svg>
);

export const CertSafety: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="236" height="76" rx="5" fill="#f3f4f6" stroke="#374151" strokeWidth="2"/>
        <text x="120" y="38" fontFamily="'Courier New', monospace" fontSize="18" fontWeight="600" textAnchor="middle" fill="#111827">Occupational Safety</text>
        <text x="120" y="62" fontFamily="'Courier New', monospace" fontSize="16" textAnchor="middle" fill="#C00000">Standard Compliant</text>
    </svg>
);
