import React, { createContext, useContext, useState, ReactNode } from "react";

interface ThemeClass {
  name: string;
  header: string;
  primary: string;
  secondary: string;
  themeSelector: string;
  themseSelectorList: string;
  themeSelectorItem: string;
}

export type AvailableThemes = keyof typeof themeClasses;

interface ThemeContextType {
  currentTheme: AvailableThemes;
  themeClass: ThemeClass;
  setTheme: (theme: AvailableThemes) => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const themeClasses = {
  default: {
    name: "Default",
    header: "bg-[#2d2d30] text-gray-300",
    primary: "bg-gray-900 text-white",
    secondary: "bg-gray-800 text-white",
    themeSelector: "theme-shadow-default text-black",
    themseSelectorList: "bg-gray-900 text-white",
    themeSelectorItem: "hover:bg-gray-800 text-white",
  },
  dark: {
    name: "Dark",
    header: "bg-gray-900 text-white",
    primary: "bg-gray-800 text-white",
    secondary: "bg-gray-700 text-white",
    themeSelector: "theme-shadow-dark text-black bg-gray-800 text-white",
    themseSelectorList: "bg-gray-800 text-white",
    themeSelectorItem: "hover:bg-gray-700 text-white",
  },
  light: {
    name: "Light",
    // header: 'bg-neutral-100 text-black',
    header: "bg-neutral-100 text-black",
    primary: "bg-white text-black",
    secondary: "bg-gray-200 text-black",
    themeSelector: "theme-shadow-light text-black bg-white",
    themseSelectorList: "bg-white text-black",
    themeSelectorItem: "hover:bg-gray-200 text-black",
  },
  purple: {
    name: "Purple",
    header: "bg-purple-900 text-white",
    primary: "bg-purple-600 text-white",
    secondary: "bg-purple-500 text-white",
    themeSelector: "theme-shadow-purple text-black bg-purple-600",
    themseSelectorList: "bg-purple-600 text-white",
    themeSelectorItem: "hover:bg-purple-500 text-white",
  },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<AvailableThemes>("default");

  const themeClass = themeClasses[currentTheme];

  const setTheme = (theme: AvailableThemes) => {
    setCurrentTheme(theme);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, themeClass, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
