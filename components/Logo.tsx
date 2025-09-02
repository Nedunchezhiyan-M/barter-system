
import React from 'react';

export const Logo: React.FC<{className?: string}> = ({ className }) => (
    <svg 
        className={className} 
        viewBox="0 0 24 24" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M8 10L4 14L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M4 14H14.5C17.5 14 20 11.5 20 8.5C20 5.5 17.5 3 14.5 3H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 14L20 10L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 10H9.5C6.5 10 4 12.5 4 15.5C4 18.5 6.5 21 9.5 21H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);
