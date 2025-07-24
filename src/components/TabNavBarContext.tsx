import React, { createContext, useContext, useReducer, ReactNode, useCallback, useEffect } from 'react';
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

interface TabState {
  openTabs: NavigationRoute[];
  activeTab: NavigationRoute | null;
}

type TabAction = 
  | { type: 'OPEN_TAB'; payload: NavigationRoute }
  | { type: 'CLOSE_TAB'; payload: NavigationRoute }
  | { type: 'SET_ACTIVE_TAB'; payload: NavigationRoute }
  | { type: 'INITIALIZE_TABS'; payload: { tabs: NavigationRoute[]; activeTab?: NavigationRoute | null } };

const tabReducer = (state: TabState, action: TabAction): TabState => {
  switch (action.type) {
    case 'INITIALIZE_TABS': {
      return {
        openTabs: action.payload.tabs,
        activeTab: action.payload.activeTab || (action.payload.tabs.length > 0 ? action.payload.tabs[0] : null)
      };
    }

    case 'OPEN_TAB': {
      const tab = action.payload;
      if (state.openTabs.find(currentTab => currentTab.path === tab.path)) {
        return {
          ...state,
          activeTab: tab
        };
      }
      return {
        openTabs: [...state.openTabs, tab],
        activeTab: tab
      };
    }

    case 'CLOSE_TAB': {
      const tab = action.payload;
      
      if (tab.isClosable === false) {
        return state;
      }

      const filteredTabs = state.openTabs.filter(currentTab => currentTab.path !== tab.path);
      
      let newActiveTab = state.activeTab;
      if (state.activeTab && state.activeTab.path === tab.path) {
        newActiveTab = filteredTabs.length > 0 ? filteredTabs[filteredTabs.length - 1] : null;
      }

      return {
        openTabs: filteredTabs,
        activeTab: newActiveTab
      };
    }

    case 'SET_ACTIVE_TAB': {
      return {
        ...state,
        activeTab: action.payload
      };
    }

    default:
      return state;
  }
};

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
  const [state, dispatch] = useReducer(tabReducer, {
    openTabs: initialTabs,
    activeTab: initialTabs.length > 0 ? initialTabs[0] : null
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (state.activeTab) {
      navigate(state.activeTab.path);
    }
  }, [state.activeTab, navigate]);

  const openTab = useCallback((tab: NavigationRoute) => {
    dispatch({ type: 'OPEN_TAB', payload: tab });
  }, []);

  const closeTab = useCallback((tab: NavigationRoute) => {
    dispatch({ type: 'CLOSE_TAB', payload: tab });
  }, []);

  const setActiveTab = useCallback((tab: NavigationRoute) => {
    dispatch({ type: 'SET_ACTIVE_TAB', payload: tab });
  }, []);

  const getTabIcon = useCallback((tab: NavigationRoute) => {
    const routeConfig = getRouteByPath(tab.path);
    return routeConfig?.icon;
  }, []);

  return (
    <TabNavBarContext.Provider 
      value={{ 
        openTabs: state.openTabs, 
        activeTab: state.activeTab, 
        openTab, 
        closeTab, 
        setActiveTab, 
        getTabIcon 
      }}
    >
      {children}
    </TabNavBarContext.Provider>
  );
}; 