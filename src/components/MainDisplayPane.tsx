import React from 'react';
import TabNavBar from './TabNavBar';

interface MainDisplayPaneProps {
  children: React.ReactNode;
}

const MainDisplayPane: React.FC<MainDisplayPaneProps> = ({ children }) => {
  return (
    <div className="flex flex-col h-full bg-gray-900 text-white w-full">
      <TabNavBar />
      <div className="flex-1 bg-gray-900 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default MainDisplayPane; 