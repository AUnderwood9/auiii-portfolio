import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HamburgerIconProps {
  className?: string;
  onClick?: () => void;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ className = '', onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`p-1 hover:bg-gray-600 rounded ${className}`}
      aria-label="Toggle sidebar"
    >
      <Bars3Icon className="w-6 h-6" />
    </button>
  );
};

export default HamburgerIcon; 