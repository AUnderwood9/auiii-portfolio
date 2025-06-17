import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { navigationRoutes } from './routes';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {navigationRoutes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          element={<route.component />}
        />
      ))}
    </Routes>
  );
};

export default AppRoutes; 