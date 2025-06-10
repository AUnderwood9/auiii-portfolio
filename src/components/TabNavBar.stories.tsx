import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';
import TypescriptOriginalIcon from 'react-devicons/typescript/original';
import HtmlPlainIcon from 'react-devicons/html5/plain';
import CssPlainIcon from 'react-devicons/css3/plain';
import TabNavBar from './TabNavBar';
import { NavigationRoute } from '../routes/routes';

const meta: Meta<typeof TabNavBar> = {
  title: 'Components/TabNavBar',
  component: TabNavBar,
  decorators: [
    (Story) => (
      <div className="bg-gray-900 w-full max-w-4xl">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    tabs: {
      control: false,
      description: 'Array of NavigationRoute objects representing the open tabs',
    },
    onTabClose: {
      control: false,
      description: 'Callback function when a tab close button is clicked',
    },
    onTabClick: {
      control: false,
      description: 'Callback function when a tab is clicked',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleTabs: NavigationRoute[] = [
  {
    path: '/app.js',
    text: 'app.js',
    icon: <JavascriptOriginalIcon />,
  },
  {
    path: '/index.ts',
    text: 'index.ts',
    icon: <TypescriptOriginalIcon />,
  },
  {
    path: '/styles.css',
    text: 'styles.css',
    icon: <CssPlainIcon />,
  },
];

export const Empty: Story = {
  args: {
    tabs: [],
    onTabClose: action('tab-close'),
    onTabClick: action('tab-click'),
  },
};

export const SingleTab: Story = {
  args: {
    tabs: [sampleTabs[0]],
    onTabClose: action('tab-close'),
    onTabClick: action('tab-click'),
  },
};

export const MultipleTabs: Story = {
  args: {
    tabs: sampleTabs,
    onTabClose: action('tab-close'),
    onTabClick: action('tab-click'),
  },
};

export const LongTabNames: Story = {
  args: {
    tabs: [
      {
        path: '/very-long-filename-that-should-be-truncated.js',
        text: 'very-long-filename-that-should-be-truncated.js',
        icon: <JavascriptOriginalIcon />,
      },
      {
        path: '/another-extremely-long-filename-example.ts',
        text: 'another-extremely-long-filename-example.ts',
        icon: <TypescriptOriginalIcon />,
      },
    ],
    onTabClose: action('tab-close'),
    onTabClick: action('tab-click'),
  },
};

export const TabsWithoutIcons: Story = {
  args: {
    tabs: [
      {
        path: '/readme.md',
        text: 'README.md',
      },
      {
        path: '/config.json',
        text: 'config.json',
      },
    ],
    onTabClose: action('tab-close'),
    onTabClick: action('tab-click'),
  },
};

export const ManyTabs: Story = {
  args: {
    tabs: [
      { path: '/app.js', text: 'app.js', icon: <JavascriptOriginalIcon /> },
      { path: '/index.ts', text: 'index.ts', icon: <TypescriptOriginalIcon /> },
      { path: '/styles.css', text: 'styles.css', icon: <CssPlainIcon /> },
      { path: '/index.html', text: 'index.html', icon: <HtmlPlainIcon /> },
      { path: '/utils.js', text: 'utils.js', icon: <JavascriptOriginalIcon /> },
      { path: '/types.ts', text: 'types.ts', icon: <TypescriptOriginalIcon /> },
    ],
    onTabClose: action('tab-close'),
    onTabClick: action('tab-click'),
  },
}; 