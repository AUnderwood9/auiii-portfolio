import { useState } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Tooltip from "./Tooltip";
import ThemeSelector from "./ThemeSelector";

interface ConfigurationButtonProps {
  className?: string;
}

const ConfigurationButton = ({ className }: ConfigurationButtonProps) => {
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);

  const handleConfigurationButtonClick = () => {
    setIsThemeSettingsOpen(!isThemeSettingsOpen);
  };

  const handleClose = () => {
    setIsThemeSettingsOpen(false);
  };

  return (
    <>
      <Tooltip text="Change Theme">
        <Cog6ToothIcon
          className={`w-6 h-6 ${className} configuration-button`}
          onClick={handleConfigurationButtonClick}
        />
      </Tooltip>
      {isThemeSettingsOpen && <ThemeSelector onClose={handleClose} />}
    </>
  );
};

export default ConfigurationButton;
