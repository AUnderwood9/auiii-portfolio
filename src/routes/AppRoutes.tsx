import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home.tsx';
import About from '../pages/About/About.tsx';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      {/* Add more routes here */}
    </Routes>
  );
};

export default AppRoutes; 