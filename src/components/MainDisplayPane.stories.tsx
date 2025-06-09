import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter as Router } from 'react-router-dom';

import MainDisplayPane from './MainDisplayPane';

const meta = {
  component: MainDisplayPane,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
} satisfies Meta<typeof MainDisplayPane>;

export default meta;

type Story = StoryObj<typeof meta>;

// Sample routes for the story
const sampleRoutes = [
  {
    path: '/',
    text: 'Home.tsx',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M14 1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3 13V3h10v10H3z"/>
    </svg>
  },
  {
    path: '/about',
    text: 'About.tsx',
    icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
      <path d="M14 1H2c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zM3 13V3h10v10H3z"/>
    </svg>
  }
];

export const Default: Story = {
  args: {
    routes: sampleRoutes,
    children: (
      <div className="p-6 text-white">
        <h1 className="text-2xl font-bold mb-4">Sample Content</h1>
        <p>This is sample content for the main display pane.</p>
      </div>
    )
  }
};

export const NoRoutes: Story = {
  args: {
    routes: [],
    children: null
  }
};