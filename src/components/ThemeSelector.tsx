import React, { useState, useRef, useEffect } from 'react';
import { useTheme, AvailableThemes, themeClasses } from '../context/ThemeContext';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const ThemeSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, themeClass } = useTheme();
  const availableThemes = Object.keys(themeClasses) as AvailableThemes[];
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleThemeSelect = (theme: AvailableThemes) => {
    setTheme(theme);
    setIsOpen(false);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <div 
        ref={wrapperRef}
        className="absolute z-10 w-48 lg:w-80 top-[50vh] lg:top-[1rem] left-1/2 -translate-x-1/2"
        role="listbox"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-2 text-left
          bg-white dark:bg-gray-700
          border border-gray-300 dark:border-gray-500
          flex items-center justify-between
          ${themeClass.themeSelector}
          ${isOpen ? 'rounded-t-md' : 'rounded-md'}
        `}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{themeClasses[currentTheme].name}</span>
        <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <ul
          className={`
            absolute z-10 w-full rounded-b-md shadow-lg
            bg-white dark:bg-gray-700
            border-x border-b border-gray-300 dark:border-gray-500
          `}
        >
          {availableThemes.map((theme) => (
            <li
              key={theme}
              onClick={() => handleThemeSelect(theme)}
              className={`
                px-4 py-2 cursor-pointer
                hover:bg-gray-100 dark:hover:bg-gray-600
                ${currentTheme === theme ? 'font-bold bg-gray-200 dark:bg-gray-500' : ''}
              `}
              role="option"
              aria-selected={currentTheme === theme}
            >
              {themeClasses[theme].name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeSelector;
