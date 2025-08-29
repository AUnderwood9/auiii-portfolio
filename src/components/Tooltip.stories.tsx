import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import { Cog6ToothIcon, HomeIcon, UserIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'This is a tooltip',
    children: <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Hover me</button>,
  },
};

export const WithIcon: Story = {
  args: {
    text: 'Settings',
    children: <Cog6ToothIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />,
  },
};

export const LongText: Story = {
  args: {
    text: 'This is a much longer tooltip text that will test how the component handles text wrapping and positioning',
    children: <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">Long tooltip</button>,
  },
};

export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex gap-4 items-center">
      <Tooltip text="Home">
        <HomeIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </Tooltip>
      
      <Tooltip text="User Profile">
        <UserIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </Tooltip>
      
      <Tooltip text="Settings & Configuration">
        <Cog6ToothIcon className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
      </Tooltip>
    </div>
  ),
};

export const EdgeCasePositioning: Story = {
  render: () => (
    <div className="w-screen h-screen relative bg-gray-50">
      <div className="absolute top-2 left-2">
        <Tooltip text="Top left corner">
          <button className="px-2 py-1 bg-red-500 text-white rounded text-xs">Top Left</button>
        </Tooltip>
      </div>
      
      <div className="absolute top-2 right-2">
        <Tooltip text="Top right corner">
          <button className="px-2 py-1 bg-blue-500 text-white rounded text-xs">Top Right</button>
        </Tooltip>
      </div>
      
      <div className="absolute bottom-2 left-2">
        <Tooltip text="Bottom left corner">
          <button className="px-2 py-1 bg-green-500 text-white rounded text-xs">Bottom Left</button>
        </Tooltip>
      </div>
      
      <div className="absolute bottom-2 right-2">
        <Tooltip text="Bottom right corner">
          <button className="px-2 py-1 bg-purple-500 text-white rounded text-xs">Bottom Right</button>
        </Tooltip>
      </div>
      
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Tooltip text="Center positioned tooltip">
          <button className="px-4 py-2 bg-gray-600 text-white rounded">Center</button>
        </Tooltip>
      </div>
    </div>
  ),
}; 