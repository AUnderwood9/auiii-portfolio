import React, { useState } from 'react';
import { Cog6ToothIcon } from '@heroicons/react/24/outline';
import Tooltip from './Tooltip';
import ThemeSelector from './ThemeSelector';

interface ConfigurationButtonProps {
  className?: string;
}

const ConfigurationButton: React.FC<ConfigurationButtonProps> = ({ className }) => {
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);

  const handleConfigurationButtonClick = () => {
    setIsThemeSettingsOpen(!isThemeSettingsOpen);
  };

  return (
    <>
      <Tooltip text="Change Theme">
        <Cog6ToothIcon className={`w-6 h-6 ${className} configuration-button`} onClick={handleConfigurationButtonClick} />
      </Tooltip>
      {isThemeSettingsOpen && <ThemeSelector />}
    </>
  );
};

export default ConfigurationButton;
