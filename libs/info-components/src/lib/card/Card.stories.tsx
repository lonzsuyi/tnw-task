import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Card',
};
export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    data: {
      title: 'Sydney Buses',
      date: '25/09/2021',
      url: '/1'
    }
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Sydney Buses/gi)).toBeInTheDocument();
  },
};
