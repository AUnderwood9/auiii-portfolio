import React from 'react';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';

export interface NavigationRoute {
  path: string;
  text: string;
  icon: React.ReactNode;
}

export const navigationRoutes: NavigationRoute[] = [
  {
    path: '/',
    text: 'Home',
    icon: <JavascriptOriginalIcon />
  },
  {
    path: '/about',
    text: 'About',
    icon: <JavascriptOriginalIcon />
  }
]; 