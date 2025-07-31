import React from 'react';
import TabNavBar from './TabNavBar';
import { useTheme } from '../context/ThemeContext.tsx';

interface MainDisplayPaneProps {
  children: React.ReactNode;
}

const MainDisplayPane: React.FC<MainDisplayPaneProps> = ({ children }) => {
  const { themeClass } = useTheme();

  return (
    <div className={`flex flex-col h-full ${themeClass.primary} w-full`}>
      <TabNavBar />
      <div className={`flex-1 ${themeClass.primary} overflow-auto`}>
        {children}
      </div>
    </div>
  );
};

export default MainDisplayPane; 