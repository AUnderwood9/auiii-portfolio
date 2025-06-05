import React from 'react';

interface NavIconButtonProps {
  icon: React.ReactNode;
  text: string;
}

const NavIconButton: React.FC<NavIconButtonProps> = ({ icon, text }) => {
  return (
    <button className="flex items-center px-2 py-1 rounded hover:bg-gray-600">
      <div className="mr-1">{icon}</div>
      <div>{text}</div>
    </button>
  );
};

export default NavIconButton; 