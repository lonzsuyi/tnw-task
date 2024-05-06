import type { Meta, StoryObj } from '@storybook/react';
import { Link } from './link';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Link> = {
  component: Link,
  title: 'Link',
};
export default meta;
type Story = StoryObj<typeof Link>;

export const Primary: Story = {
  args: {
    children: 'Back',
    href: '/'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Back/gi)).toBeInTheDocument();
  },
};
