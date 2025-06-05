import type { Meta, StoryObj } from '@storybook/react';
import JavascriptOriginalIcon from 'react-devicons/javascript/original';

import NavIconButton from './NavIconButton';

const meta = {
  component: NavIconButton,
} satisfies Meta<typeof NavIconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: <JavascriptOriginalIcon />,
    text: "text"
  }
};