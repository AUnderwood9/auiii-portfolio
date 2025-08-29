import React from 'react';
import { useLocation } from 'react-router-dom';
import NavIconButton from './NavIconButton';
import { NavigationRoute } from '../routes/routes';
import { useTheme } from '../context/ThemeContext.tsx';

interface SideNavigationProps {
  className?: string;
  routes: NavigationRoute[];
  isOpen?: boolean;
  onClose?: () => void;
}

const SideNavigation: React.FC<SideNavigationProps> = ({ 
  className = '', 
  routes, 
  isOpen = false, 
  onClose 
}) => {
  const location = useLocation();
  const { themeClass } = useTheme();
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {isOpen && (
        <div 
          className="md:hidden fixed left-0 right-0 top-16 bottom-0 bg-black bg-opacity-50 z-[7]"
          onClick={onClose}
        />
      )}
      
      <div className={`
        ${themeClass.secondary} w-48 md:w-64 flex flex-col z-[8]
        md:relative md:translate-x-0 md:h-auto
        fixed left-0 h-full transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0 top-16' : '-translate-x-full'}
        ${className}
      `}>
        {routes.map((route) => (
          <NavIconButton 
            key={route.path}
            icon={route.icon} 
            text={route.text} 
            path={route.path}
            isActive={isActive(route.path)}
          />
        ))}
      </div>
    </>
  );
};

export default SideNavigation; 