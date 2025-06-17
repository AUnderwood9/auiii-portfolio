import React from 'react';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';

export interface NavigationRoute {
  path: string;
  text: string;
  icon: React.ReactNode;
  component: React.ComponentType;
}

export const navigationRoutes: NavigationRoute[] = [
  {
    path: '/',
    text: 'Home',
    icon: <JavascriptOriginalIcon />,
    component: Home
  },
  {
    path: '/about',
    text: 'About',
    icon: <JavascriptOriginalIcon />,
    component: About
  }
];

// Helper function to get route by path
export const getRouteByPath = (path: string): NavigationRoute | undefined => {
  return navigationRoutes.find(route => route.path === path);
}; 