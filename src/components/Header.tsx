import React from "react";
import GearIcon from "./GearIcon.tsx";
import HamburgerIcon from "./HamburgerIcon.tsx";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  return (
    <header className="flex items-center bg-[#2d2d30] text-gray-300 h-8 p-8 pr-2">
      <div className="flex items-center justify-center">
        <HamburgerIcon 
          className="md:hidden" 
          onClick={onToggleSidebar}
        />
      </div>

      <div className="flex-grow flex items-center justify-center px-2 mx-auto">
        <span className="text-sm md:text-base whitespace-nowrap">
          Andrew Underwood III <span className="hidden md:inline">- Portfolio</span>
        </span>
      </div>

      <div className="flex items-center justify-end h-full">
        <GearIcon className="mt-[-1px]" />
      </div>
    </header>
  );
};

export default Header;
