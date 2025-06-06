import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import SideNavigation from './SideNavigation';
import { navigationRoutes } from '../routes/routes';

const meta: Meta<typeof SideNavigation> = {
  title: 'Components/SideNavigation',
  component: SideNavigation,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="h-screen flex">
          <Story />
          <div className="flex-1 bg-gray-50 p-4">
            <h2>Main Content Area</h2>
            <p>The sidebar is now a simple container with self-contained NavIconButton components that handle their own navigation.</p>
            <p>Click on the navigation items to see the routing in action (simulated in Storybook).</p>
            <p>On mobile screens, the sidebar becomes an overlay that can be toggled.</p>
          </div>
        </div>
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    routes: navigationRoutes,
    isOpen: true,
  },
};

export const MobileHidden: Story = {
  args: {
    routes: navigationRoutes,
    isOpen: false,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const MobileOpen: Story = {
  args: {
    routes: navigationRoutes,
    isOpen: true,
    onClose: () => console.log('Sidebar closed'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const InFullLayout: Story = {
  args: {
    routes: navigationRoutes,
    isOpen: true,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="h-screen flex flex-col bg-gray-900">
          {/* Mock Header */}
          <div className="bg-gray-800 text-white p-2 text-center text-sm">
            Mock Header - Portfolio Layout
          </div>
          <div className="flex flex-1">
            <Story />
            <div className="flex-1 bg-gray-50 p-4">
              <h2>Complete Layout Example</h2>
              <p>This shows the sidebar in the context of the full application layout.</p>
              <p>Each NavIconButton handles its own navigation and styling.</p>
              <p>The sidebar is responsive and becomes a mobile overlay on smaller screens.</p>
            </div>
          </div>
        </div>
      </BrowserRouter>
    ),
  ],
}; 