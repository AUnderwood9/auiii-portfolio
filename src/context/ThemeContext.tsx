import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeClass {
    name: string;
    header: string;
    primary: string;
    secondary: string;
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
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

export const themeClasses = {
    default: {
        name: 'Default',
        header: 'bg-[#2d2d30] text-gray-300',
        primary: 'bg-gray-900 text-white',
        secondary: 'bg-gray-800 text-white',
    },
    dark: {
        name: 'Dark',
        header: 'bg-gray-900 text-white',
        primary: 'bg-gray-800 text-white',
        secondary: 'bg-gray-700 text-white',
    },
    light: {
        name: 'Light',
        header: 'bg-white text-black',
        primary: 'bg-white text-black',
        secondary: 'bg-gray-100 text-black',
    },
    purple: {
        name: 'Purple',
        header: 'bg-purple-900 text-white',
        primary: 'bg-purple-800 text-white',
        secondary: 'bg-purple-700 text-white',
    },
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [currentTheme, setCurrentTheme] = useState<AvailableThemes>('default');

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