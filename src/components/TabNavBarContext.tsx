import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { NavigationRoute } from '../routes/routes';

interface TabNavBarContextType {
  openTabs: NavigationRoute[];
  activeTab: NavigationRoute | null;
  openTab: (tab: NavigationRoute) => void;
  closeTab: (tab: NavigationRoute) => void;
  setActiveTab: (tab: NavigationRoute) => void;
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

  const openTab = useCallback((tab: NavigationRoute) => {
    setOpenTabs((prev) => {
      if (prev.find((currentTab) => currentTab.path === tab.path)) return prev;
      return [...prev, tab];
    });
    setActiveTabState(tab);
  }, []);

  const closeTab = useCallback((tab: NavigationRoute) => {
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
  }, []);

  return (
    <TabNavBarContext.Provider value={{ openTabs, activeTab, openTab, closeTab, setActiveTab }}>
      {children}
    </TabNavBarContext.Provider>
  );
}; 