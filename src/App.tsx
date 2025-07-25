import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.tsx';
import SideNavigation from './components/SideNavigation.tsx';
import MainDisplayPane from './components/MainDisplayPane.tsx';
import Header from './components/Header.tsx';
import { navigationRoutes } from './routes/routes';
import { TabNavBarProvider } from './components/TabNavBarContext';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  const homeRoute = navigationRoutes.find(route => route.path === '/');
  const initialTabs = homeRoute ? [homeRoute] : [];

  return (
    <Router>
      <TabNavBarProvider initialTabs={initialTabs}>
        <div className="flex flex-col h-screen bg-gray-50">
          <Header onToggleSidebar={toggleSidebar} />        
          <div className="flex flex-1 overflow-hidden relative">
            <SideNavigation 
              routes={navigationRoutes} 
              isOpen={isSidebarOpen}
              onClose={closeSidebar}
            />
            <MainDisplayPane>
              <AppRoutes />
            </MainDisplayPane>
          </div>
        </div>
      </TabNavBarProvider>
    </Router>
  );
}

export default App; 