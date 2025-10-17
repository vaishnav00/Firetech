import React from 'react';

const logoClass = "max-h-16 w-auto";

export const BrandAlpha: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 128 40" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="30" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="bold" fill="#111827">ALPHA</text>
    </svg>
);

export const BrandBravo: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 132 40" xmlns="http://www.w3.org/2000/svg">
         <path d="M10 10 H 30 L 20 25 Z" fill="#C00000"/>
        <text x="40" y="30" fontFamily="Verdana, sans-serif" fontSize="26" fontStyle="italic" fill="#374151">Bravo Co</text>
    </svg>
);

export const BrandCharlie: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 160 40" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="30" height="30" rx="15" fill="#374151"/>
        <circle cx="20" cy="20" r="10" fill="white"/>
        <text x="45" y="30" fontFamily="Georgia, serif" fontSize="24" fill="#111827">CHARLIE</text>
    </svg>
);

export const BrandDelta: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 140 40" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="30" fontFamily="'Courier New', monospace" fontSize="30" fontWeight="600" fill="#111827">
            <tspan fill="#C00000">D</tspan>ELTA INC
        </text>
    </svg>
);

export const BrandEcho: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="30" fontFamily="'Times New Roman', serif" fontSize="32" letterSpacing="2" fill="#374151">ECHO</text>
        <line x1="10" y1="35" x2="110" y2="35" stroke="#C00000" strokeWidth="2"/>
    </svg>
);

export const BrandFoxtrot: React.FC = () => (
    <svg className={logoClass} viewBox="0 0 180 40" xmlns="http://www.w3.org/2000/svg">
        <text x="10" y="30" fontFamily="Impact, sans-serif" fontSize="34" fill="#111827">FOXTROT</text>
        <text x="140" y="30" fontFamily="Impact, sans-serif" fontSize="34" fill="#C00000">FX</text>
    </svg>
);
