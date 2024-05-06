import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from './Tag';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Tag> = {
  component: Tag,
  title: 'Tag'
};
export default meta;
type Story = StoryObj<typeof Tag>;

export const Primary: Story = {
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'status-ontime', 'status-late', 'status-early', 'status-unknown'],
    }
  },
  args: {
    text: 'StatusText',
    color: 'default'
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('StatusText')).toHaveClass('text-neutral-500');
  },
};
