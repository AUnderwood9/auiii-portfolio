import React from "react";
import ConfigurationButton from "./ConfigurationButton.tsx";
import HamburgerIcon from "./HamburgerIcon.tsx";
import { useTheme } from "../context/ThemeContext.tsx";

interface HeaderProps {
  onToggleSidebar?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { themeClass } = useTheme();

  return (
    <header className={`flex items-center h-8 p-8 pr-2 ${themeClass.header}`}>
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
        <ConfigurationButton className="mt-[-1px]" />
      </div>
    </header>
  );
};

export default Header;
