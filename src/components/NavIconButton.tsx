import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavIconButtonProps {
  icon: React.ReactNode;
  text: string;
  path: string;
  isActive?: boolean;
}

const NavIconButton: React.FC<NavIconButtonProps> = ({ icon, text, path, isActive = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <div
      className={`cursor-pointer transition-colors duration-200 ${
        isActive 
          ? 'bg-gray-600 text-white' 
          : 'hover:bg-gray-700'
      }`}
      onClick={handleClick}
      title={text}
    >
      <button className="w-full flex items-center justify-start px-2 py-1 hover:bg-transparent rounded-none">
        <div className="pr-2">{icon}</div>
        <div>{text}</div>
      </button>
    </div>
  );
};

export default NavIconButton; 