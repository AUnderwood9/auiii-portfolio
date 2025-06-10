import React from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationRoute } from '../routes/routes';
import TabNavBar from './TabNavBar';

interface MainDisplayPaneProps {
  routes: NavigationRoute[];
  children: React.ReactNode;
}

const MainDisplayPane: React.FC<MainDisplayPaneProps> = ({ routes, children }) => {
  const location = useLocation();

  const activeRoute = routes.find(route => route.path === location.pathname);
  const openTabs = activeRoute ? [activeRoute] : [];

  const handleTabClose = (tab: NavigationRoute) => {
    // Handle tab close logic here
    console.log('Closing tab:', tab);
  };

  const handleTabClick = (tab: NavigationRoute) => {
    // Handle tab click logic here
    console.log('Clicking tab:', tab);
  };

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white w-full">
      <TabNavBar 
        tabs={openTabs} 
        onTabClose={handleTabClose}
        onTabClick={handleTabClick}
      />

      <div className="flex-1 bg-gray-900 overflow-auto">
        {activeRoute ? (
          <div className="h-full">
            {children}
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            <div className="text-center">
              <div className="text-6xl mb-4">📁</div>
              <h2 className="text-xl mb-2">Welcome</h2>
              <p className="text-sm">Select a file from the sidebar to get started</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainDisplayPane; 