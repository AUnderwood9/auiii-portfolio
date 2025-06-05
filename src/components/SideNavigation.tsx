import React from 'react';
import { useLocation } from 'react-router-dom';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';
import NavIconButton from './NavIconButton';

interface SideNavigationProps {
  className?: string;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ className = '' }) => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <div className={`bg-gray-800 text-white w-48 flex flex-col py-2 ${className}`}>
      <NavIconButton 
        icon={<JavascriptOriginalIcon />} 
        text="Home" 
        path="/"
        isActive={isActive('/')}
      />
      
      <NavIconButton 
        icon={<JavascriptOriginalIcon />} 
        text="About" 
        path="/about"
        isActive={isActive('/about')}
      />
    </div>
  );
};

export default SideNavigation; 