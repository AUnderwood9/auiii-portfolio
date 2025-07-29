import React, { createContext, useContext, useState, ReactNode } from 'react';

type AvailableThemes = 'light' | 'dark';

interface ThemeContextType {
    themeClass: AvailableThemes;
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

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeClass, setThemeClass] = useState<AvailableThemes>('light');

    const setTheme = (theme: AvailableThemes) => {
        setThemeClass(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <ThemeContext.Provider value={{ themeClass, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeContext;