import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Navigation> = {
  component: Navigation,
  title: 'Navigation'
};
export default meta;
type Story = StoryObj<typeof Navigation>;

export const Primary: Story = {
  args: {
    menu: []
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    global.innerWidth = 768;
    const logoXs = canvas.getByTestId('logo-icon-xs');
    global.innerWidth = 765;
    const logoXl = canvas.getByTestId('logo-icon-xl');
    expect(logoXs || logoXl).toBeInTheDocument();
  },
};
