import React from 'react';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Experience from '../pages/Experience/Experience';

export interface NavigationRoute {
    path: string;
    text: string;
    icon: React.ReactNode;
    component: React.ComponentType;
    isClosable?: boolean;
}

export const navigationRoutes: NavigationRoute[] = [
    {
        path: '/',
        text: 'Home',
        icon: <JavascriptOriginalIcon />,
        component: Home,
        isClosable: false
    },
    {
        path: '/about',
        text: 'About',
        icon: <JavascriptOriginalIcon />,
        component: About,
        isClosable: true
    },
    {
        path: '/experience',
        text: 'Experience',
        icon: <JavascriptOriginalIcon />,
        component: Experience,
        isClosable: true
    }
];

export const getRouteByPath = (path: string): NavigationRoute | undefined => {
    return navigationRoutes.find(route => route.path === path);
}; 