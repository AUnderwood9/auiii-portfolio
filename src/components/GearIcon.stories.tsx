import type { Meta, StoryObj } from '@storybook/react';

import GearIcon from './GearIcon';

const meta = {
  component: GearIcon,
} satisfies Meta<typeof GearIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};