import React, { useState } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import Tooltip from './Tooltip';

interface ConfigurationButtonProps {
  className?: string;
}

const ConfigurationButton: React.FC<ConfigurationButtonProps> = ({ className }) => {
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);

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
          className="w-64 p-2 rounded-md absolute z-50 top-[1rem] left-1/2 -translate-x-1/2"
          // onChange={handleThemeChange}
        >
          <option value="blue">Blue</option>
          <option value="purple">Purple</option>
          <option value="green">Light</option>
          <option value="red">Dark</option>
        </select>
      )}
    </>
  );
};

export default ConfigurationButton; 