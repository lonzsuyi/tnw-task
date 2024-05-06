import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './Table';
import { Tag } from '../tag/Tag'

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Table> = {
  component: Table,
  title: 'Table',
};
export default meta;
type Story = StoryObj<typeof Table>;

export const Primary: Story = {
  args: {
    data: [
      {
        "Bus Id": "42612",
        "Route Variant": <div><strong>891</strong> 2 1</div>,
        "Status": <Tag text="On Time" color="status-ontime" />
      },
      {
        "Bus Id": "29016",
        "Route Variant": <div><strong>400</strong> 1 1</div>,
        "Status": <Tag text="Late" color="status-late" />
      },
      {
        "Bus Id": "90467",
        "Route Variant": <div><strong>393</strong> 1 1</div>,
        "Sstatus": <Tag text="Early" color="status-early" />
      },
      {
        "Bus Id": "88836",
        "Route Variant": <div><strong>M20</strong> 1 0</div>,
        "Status": <Tag text="Unknown" color="status-unknown" />
      }
    ]
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Bus Id/gi)).toBeInTheDocument();
    expect(canvas.getByText(/Route Variant/gi)).toBeInTheDocument();
    expect(canvas.getByText(/Status/gi)).toBeInTheDocument();
  },
};
