import { useRef, useEffect } from "react";
import {
  useTheme,
  AvailableThemes,
  themeClasses,
} from "../context/ThemeContext";

interface ThemeSelectorProps {
  onClose: () => void;
  excludeRef?: React.RefObject<SVGSVGElement>;
}

const ThemeSelector = ({ onClose, excludeRef }: ThemeSelectorProps) => {
  const { currentTheme, setTheme, themeClass } = useTheme();
  const availableThemes = Object.keys(themeClasses) as AvailableThemes[];
  const wrapperRef = useRef<HTMLDivElement>(null);

  const handleThemeSelect = (theme: AvailableThemes) => {
    setTheme(theme);
    onClose();
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        (!excludeRef?.current || !excludeRef.current.contains(event.target as Node))
      ) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [wrapperRef, onClose, excludeRef]);

  return (
    <>
      <div
        className="
                    backdrop-component
                    lg:hidden
                    absolute inset-0
                    bg-black bg-opacity-50 z-[9]
                  "
        onClick={onClose}
      />

      <div
        ref={wrapperRef}
        className={`
            absolute z-10 w-48 lg:w-80
            overflow-hidden border-1 border-black rounded-md
            top-[50vh] lg:top-[1rem] left-1/2
            -translate-x-1/2 ${themeClass.themeSelector}
          `}
        role="listbox"
      >
        <div
          className={`
                      w-full px-4 py-2 text-left border-b border-black
                      flex items-center justify-between
                      ${themeClass.themeSelectorList}
                    `}
        >
          {themeClasses[currentTheme].name}
        </div>

        <ul
          className={`
                      w-full ${themeClass.themeSelectorList}
                    `}
        >
          {availableThemes.map((theme) => (
            <li
              key={theme}
              onClick={() => handleThemeSelect(theme)}
              className={`
                  px-4 py-2 cursor-pointer
                  ${themeClass.themeSelectorItem} 
                  ${currentTheme === theme ? `font-bold ${themeClass.themeSelected}` : ""}
                `}
              role="option"
              aria-selected={currentTheme === theme}
            >
              {themeClasses[theme].name}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ThemeSelector;
