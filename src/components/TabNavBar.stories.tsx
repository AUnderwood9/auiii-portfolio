import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';
import TypescriptOriginalIcon from 'react-devicons/typescript/original';
import HtmlPlainIcon from 'react-devicons/html5/plain';
import CssPlainIcon from 'react-devicons/css3/plain';
import TabNavBar from './TabNavBar';
import { TabNavBarProvider } from './TabNavBarContext';
import { NavigationRoute } from '../routes/routes';

const meta: Meta<typeof TabNavBar> = {
  title: 'Components/TabNavBar',
  component: TabNavBar,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="bg-gray-900 w-full max-w-4xl">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: 'A VS Code-style tab navigation bar that integrates with TabNavBarContext for state management.',
      },
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
    component: () => <div>App.js Content</div>,
    isClosable: true,
  },
  {
    path: '/index.ts',
    text: 'index.ts',
    icon: <TypescriptOriginalIcon />,
    component: () => <div>Index.ts Content</div>,
    isClosable: true,
  },
  {
    path: '/styles.css',
    text: 'styles.css',
    icon: <CssPlainIcon />,
    component: () => <div>Styles.css Content</div>,
    isClosable: true,
  },
  {
    path: '/index.html',
    text: 'index.html',
    icon: <HtmlPlainIcon />,
    component: () => <div>Index.html Content</div>,
    isClosable: true,
  },
];

export const Empty: Story = {
  render: () => (
    <TabNavBarProvider initialTabs={[]}>
      <TabNavBar />
    </TabNavBarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TabNavBar with no open tabs, showing the "No file open" state.',
      },
    },
  },
};

export const SingleTab: Story = {
  render: () => (
    <TabNavBarProvider initialTabs={[sampleTabs[0]]}>
      <TabNavBar />
    </TabNavBarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TabNavBar with a single tab open and active.',
      },
    },
  },
};

export const MultipleTabs: Story = {
  render: () => (
    <TabNavBarProvider initialTabs={sampleTabs.slice(0, 3)}>
      <TabNavBar />
    </TabNavBarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: 'TabNavBar with multiple tabs open, demonstrating the standard use case.',
      },
    },
  },
};

export const LongTabNames: Story = {
  render: () => {
    const longNameTabs = [
      {
        path: '/very-long-filename-that-should-be-truncated.js',
        text: 'very-long-filename-that-should-be-truncated.js',
        icon: <JavascriptOriginalIcon />,
        component: () => <div>Long filename content</div>,
        isClosable: true,
      },
      {
        path: '/another-extremely-long-filename-example.ts',
        text: 'another-extremely-long-filename-example.ts',
        icon: <TypescriptOriginalIcon />,
        component: () => <div>Another long filename content</div>,
        isClosable: true,
      },
    ];

    return (
      <TabNavBarProvider initialTabs={longNameTabs}>
        <TabNavBar />
      </TabNavBarProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'TabNavBar with very long tab names that should be truncated to fit the available space.',
      },
    },
  },
};

export const TabsWithoutIcons: Story = {
  render: () => {
    const noIconTabs = [
      {
        path: '/readme.md',
        text: 'README.md',
        icon: null,
        component: () => <div>README content</div>,
        isClosable: true,
      },
      {
        path: '/config.json',
        text: 'config.json',
        icon: null,
        component: () => <div>Config content</div>,
        isClosable: true,
      },
    ];

    return (
      <TabNavBarProvider initialTabs={noIconTabs}>
        <TabNavBar />
      </TabNavBarProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'TabNavBar with tabs that have no icons, showing graceful degradation.',
      },
    },
  },
};

export const ManyTabs: Story = {
  render: () => {
    const manyTabs = [
      { path: '/app.js', text: 'app.js', icon: <JavascriptOriginalIcon />, component: () => <div>App</div>, isClosable: true },
      { path: '/index.ts', text: 'index.ts', icon: <TypescriptOriginalIcon />, component: () => <div>Index</div>, isClosable: true },
      { path: '/styles.css', text: 'styles.css', icon: <CssPlainIcon />, component: () => <div>Styles</div>, isClosable: true },
      { path: '/index.html', text: 'index.html', icon: <HtmlPlainIcon />, component: () => <div>HTML</div>, isClosable: true },
      { path: '/utils.js', text: 'utils.js', icon: <JavascriptOriginalIcon />, component: () => <div>Utils</div>, isClosable: true },
      { path: '/types.ts', text: 'types.ts', icon: <TypescriptOriginalIcon />, component: () => <div>Types</div>, isClosable: true },
    ];

    return (
      <TabNavBarProvider initialTabs={manyTabs}>
        <TabNavBar />
      </TabNavBarProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'TabNavBar with many tabs open, testing the horizontal scrolling and layout behavior.',
      },
    },
  },
};

export const NonClosableTabs: Story = {
  render: () => {
    const nonClosableTabs = [
      {
        path: '/home',
        text: 'Home',
        icon: <JavascriptOriginalIcon />,
        component: () => <div>Home Content</div>,
        isClosable: false, // This tab cannot be closed
      },
      {
        path: '/settings',
        text: 'Settings',
        icon: <TypescriptOriginalIcon />,
        component: () => <div>Settings Content</div>,
        isClosable: true,
      },
    ];

    return (
      <TabNavBarProvider initialTabs={nonClosableTabs}>
        <TabNavBar />
      </TabNavBarProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'TabNavBar with a mix of closable and non-closable tabs. The Home tab cannot be closed.',
      },
    },
  },
};

export const Interactive: Story = {
  render: () => {
    const interactiveTabs = sampleTabs.slice(0, 3);

    return (
      <TabNavBarProvider initialTabs={interactiveTabs}>
        <div className="space-y-4">
          <TabNavBar />
          <div className="bg-gray-800 p-4 rounded">
            <h3 className="text-white mb-2">Interactive Demo</h3>
            <p className="text-gray-300 text-sm">
              Click on tabs to switch between them. Hover over tabs to see the close button (x). 
              Try closing tabs to see the automatic selection behavior.
            </p>
          </div>
        </div>
      </TabNavBarProvider>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive TabNavBar demo with additional context and instructions.',
      },
    },
  },
}; 