import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';
import NavIconButton from './NavIconButton';

const meta: Meta<typeof NavIconButton> = {
  title: 'Components/NavIconButton',
  component: NavIconButton,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div className="bg-gray-800 p-4 w-48">
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  argTypes: {
    icon: {
      control: false,
      description: 'React element for the icon',
    },
    text: {
      control: 'text',
      description: 'Text label for the navigation item',
    },
    path: {
      control: 'text',
      description: 'Navigation path for the button',
    },
    isActive: {
      control: 'boolean',
      description: 'Whether this navigation item is currently active',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <JavascriptOriginalIcon />,
    text: 'Home',
    path: '/',
    isActive: false,
  },
};

export const Active: Story = {
  args: {
    icon: <JavascriptOriginalIcon />,
    text: 'About',
    path: '/about',
    isActive: true,
  },
};

export const MultipleButtons: Story = {
  decorators: [
    () => (
      <BrowserRouter>
        <div className="bg-gray-800 w-48 flex flex-col py-2">
          <NavIconButton 
            icon={<JavascriptOriginalIcon />} 
            text="Home" 
            path="/" 
            isActive={true}
          />
          <NavIconButton 
            icon={<JavascriptOriginalIcon />} 
            text="About" 
            path="/about" 
            isActive={false}
          />
          <NavIconButton 
            icon={<JavascriptOriginalIcon />} 
            text="Projects" 
            path="/projects" 
            isActive={false}
          />
        </div>
      </BrowserRouter>
    ),
  ],
};