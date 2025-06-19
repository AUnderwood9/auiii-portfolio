import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavigationRoute, getRouteByPath } from '../routes/routes';

interface TabNavBarContextType {
  openTabs: NavigationRoute[];
  activeTab: NavigationRoute | null;
  openTab: (tab: NavigationRoute) => void;
  closeTab: (tab: NavigationRoute) => void;
  setActiveTab: (tab: NavigationRoute) => void;
  getTabIcon: (tab: NavigationRoute) => React.ReactNode;
}

const TabNavBarContext = createContext<TabNavBarContextType | undefined>(undefined);

export const useTabNavBar = () => {
  const context = useContext(TabNavBarContext);
  if (!context) {
    throw new Error('useTabNavBar must be used within a TabNavBarProvider');
  }
  return context;
};

interface TabNavBarProviderProps {
  children: ReactNode;
  initialTabs?: NavigationRoute[];
}

export const TabNavBarProvider: React.FC<TabNavBarProviderProps> = ({ children, initialTabs = [] }) => {
  const [openTabs, setOpenTabs] = useState<NavigationRoute[]>(initialTabs);
  const [activeTab, setActiveTabState] = useState<NavigationRoute | null>(initialTabs[0] || null);
  const navigate = useNavigate();

  const openTab = useCallback((tab: NavigationRoute) => {
    setOpenTabs((prev) => {
      if (prev.find((currentTab) => currentTab.path === tab.path)) return prev;
      return [...prev, tab];
    });
    setActiveTabState(tab);
    navigate(tab.path);
  }, [navigate]);

  const closeTab = useCallback((tab: NavigationRoute) => {
    // Don't allow closing non-closable tabs
    if (tab.isClosable === false) return;

    setOpenTabs((prev) => {
      const filtered = prev.filter((currentTab) => currentTab.path !== tab.path);
      if (activeTab && activeTab.path === tab.path) {
        setActiveTabState(filtered.length > 0 ? filtered[filtered.length - 1] : null);
      }
      return filtered;
    });
  }, [activeTab]);

  const setActiveTab = useCallback((tab: NavigationRoute) => {
    setActiveTabState(tab);
    navigate(tab.path);
  }, [navigate]);

  const getTabIcon = useCallback((tab: NavigationRoute) => {
    const routeConfig = getRouteByPath(tab.path);
    return routeConfig?.icon;
  }, []);

  return (
    <TabNavBarContext.Provider value={{ openTabs, activeTab, openTab, closeTab, setActiveTab, getTabIcon }}>
      {children}
    </TabNavBarContext.Provider>
  );
}; 