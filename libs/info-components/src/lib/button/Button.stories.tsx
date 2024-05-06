import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

import { within, fireEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Submit'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('button', { name: 'Submit' })).toBeInTheDocument();
    fireEvent.click(canvas.getByRole('button', { name: 'Submit' }));
  },
};
