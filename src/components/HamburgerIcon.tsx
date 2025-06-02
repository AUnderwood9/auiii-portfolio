import React from 'react';
import { Bars3Icon } from '@heroicons/react/24/outline';

interface HamburgerIconProps {
  className?: string;
}

const HamburgerIcon: React.FC<HamburgerIconProps> = ({ className }) => {
  return (
    <Bars3Icon className={`w-6 h-6 ${className}`} />
  );
};

export default HamburgerIcon; 