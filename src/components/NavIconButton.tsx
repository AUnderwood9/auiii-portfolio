import React from 'react';
import { useTabNavBar } from '../context/TabNavBarContext';
import { getRouteByPath } from '../routes/routes';
import { useTheme } from '../context/ThemeContext';

interface NavIconButtonProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  isActive?: boolean;
}

const NavIconButton: React.FC<NavIconButtonProps> = ({ 
  icon, 
  text, 
  path, 
  isActive = false
}) => {
  const { openTab } = useTabNavBar();
  const { themeClass } = useTheme();

  const handleClick = () => {
    const route = getRouteByPath(path);
    if (route) {
      openTab(route);
    }
  };

  return (
    <div
      className={`cursor-pointer transition-colors duration-200 ${
        isActive 
          ? themeClass.primary
          : themeClass.secondary
      }`}
      onClick={handleClick}
      title={text}
    >
      <button className="w-full flex items-center justify-start px-6 py-1 hover:bg-transparent rounded-none">
        <div className="pr-2">{icon}</div>
        <div className="text-lg">{text}</div>
      </button>
    </div>
  );
};

export default NavIconButton; 