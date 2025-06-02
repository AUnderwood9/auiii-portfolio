import type { Meta, StoryObj } from '@storybook/react';

import HamburgerIcon from './HamburgerIcon';

const meta = {
  component: HamburgerIcon,
} satisfies Meta<typeof HamburgerIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};