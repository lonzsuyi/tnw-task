import type { Meta, StoryObj } from '@storybook/react';
import { NavMap } from './NavMap';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof NavMap> = {
  component: NavMap,
  title: 'NavMap',
};
export default meta;
type Story = StoryObj<typeof NavMap>;

export const Primary: Story = {
  args: {
    data: [
      { text: 'Home', url: '/' },
      { text: 'Bus Operator', url: '/' },
      { text: 'Bus Operator Detail', url: '' }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Home/gi)).toBeInTheDocument();
  },
};
