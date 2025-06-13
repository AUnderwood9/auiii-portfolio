import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { NavigationRoute } from '../routes/routes';
import TabNavBar from './TabNavBar';
import { useTabNavBar } from './TabNavBarContext';

interface MainDisplayPaneProps {
  routes: NavigationRoute[];
  children: React.ReactNode;
}

const MainDisplayPane: React.FC<MainDisplayPaneProps> = ({ routes, children }) => {
  const location = useLocation();
  const { openTab, setActiveTab } = useTabNavBar();

  useEffect(() => {
    const route = routes.find(r => r.path === location.pathname);
    if (route) {
      openTab(route);
      setActiveTab(route);
    }
  }, [location.pathname, routes, openTab, setActiveTab]);

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