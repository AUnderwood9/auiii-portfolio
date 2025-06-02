import React from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';

interface GearIconProps {
  className?: string;
}

const GearIcon: React.FC<GearIconProps> = ({ className }) => {
  return (
    <Cog6ToothIcon className={`w-6 h-6 ${className}`} />
  );
};

export default GearIcon; 