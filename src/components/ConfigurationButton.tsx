import React, { useState } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import Tooltip from './Tooltip';
import { useTheme, AvailableThemes, themeClasses } from '../context/ThemeContext';

interface ConfigurationButtonProps {
  className?: string;
}

const ConfigurationButton: React.FC<ConfigurationButtonProps> = ({ className }) => {
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);
  const { currentTheme, setTheme } = useTheme();
  const availableThemes = Object.keys(themeClasses) as AvailableThemes[];
  const handleConfigurationButtonClick = () => {
    console.log('ConfigurationButton clicked');
    setIsThemeSettingsOpen(!isThemeSettingsOpen);
  };

  return (
    <>
      <Tooltip text="Change Theme">
        <Cog6ToothIcon className={`w-6 h-6 ${className} configuration-button`} onClick={handleConfigurationButtonClick} />
      </Tooltip>
      {isThemeSettingsOpen && (
        <select
          id="theme-selector"
          value={currentTheme}
          className="w-80 p-2 rounded-md absolute z-50 top-[1rem] left-1/2 -translate-x-1/2 text-gray-600 z-20 shadow-md shadow-gray-600"
          onChange={(event) => setTheme(event.target.value as AvailableThemes)}
        >
          {availableThemes.map((theme) => (
            <option key={theme} value={theme}>{themeClasses[theme].name}</option>
          ))}
        </select>
      )}
    </>
  );
};

export default ConfigurationButton; 