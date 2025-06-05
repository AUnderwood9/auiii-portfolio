import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes.tsx';
import SideNavigation from './components/SideNavigation.tsx';
import Header from './components/Header.tsx';

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-50">
        <Header />        
        <div className="flex flex-1 overflow-hidden">
          <SideNavigation />
          <div className="flex-1 overflow-auto">
            <AppRoutes />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App; 