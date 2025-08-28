import { useState, useRef } from "react";
import { Cog6ToothIcon } from "@heroicons/react/24/outline";
import Tooltip from "./Tooltip";
import ThemeSelector from "./ThemeSelector";

interface ConfigurationButtonProps {
  className?: string;
}

const ConfigurationButton = ({ className }: ConfigurationButtonProps) => {
  const [isThemeSettingsOpen, setIsThemeSettingsOpen] = useState(false);
  const buttonRef = useRef<SVGSVGElement>(null);

  const handleConfigurationButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsThemeSettingsOpen(!isThemeSettingsOpen);
  };

  const handleClose = () => {
    setIsThemeSettingsOpen(false);
  };

  return (
    <>
      <Tooltip text="Change Theme">
        <Cog6ToothIcon
          ref={buttonRef}
          className={`w-6 h-6 ${className} configuration-button`}
          onClick={handleConfigurationButtonClick}
        />
      </Tooltip>
      {isThemeSettingsOpen && <ThemeSelector onClose={handleClose} excludeRef={buttonRef} />}
    </>
  );
};

export default ConfigurationButton;
