import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

export const WithToggleFunction: Story = {
  args: {
    onToggleSidebar: () => console.log('Sidebar toggled!'),
  },
};

export const MobileView: Story = {
  args: {
    onToggleSidebar: () => console.log('Sidebar toggled!'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

export const TabletView: Story = {
  args: {
    onToggleSidebar: () => console.log('Sidebar toggled!'),
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

export const WithWorkingSidebar: Story = {
  render: () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
      setIsSidebarOpen(false);
    };

    return (
      <BrowserRouter>
        <div className="h-screen flex flex-col bg-gray-50">
          <Header onToggleSidebar={toggleSidebar} />
          <div className="flex flex-1 overflow-hidden relative">
            <div className={`
              bg-gray-800 text-white w-48 flex flex-col py-2 z-50
              md:relative md:translate-x-0
              fixed left-0 top-24 h-[calc(100vh-6rem)] transition-transform duration-300 ease-in-out
              ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
              <div className="p-4 text-center">Sidebar Content</div>
            </div>

            {isSidebarOpen && (
              <div 
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={closeSidebar}
              />
            )}
            <div className="flex-1 overflow-auto p-4">
              <h2>Main Content</h2>
              <p>Resize the viewport to see the hamburger menu appear on mobile screens.</p>
              <p>Click the hamburger menu to toggle the sidebar.</p>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  },
};