import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { Input } from '../input/Input';
import { Button } from '../button/Button';

import { fireEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'Form',
};
export default meta;
type Story = StoryObj<typeof Form>;

export const Primary: Story = {
  args: {
    className: 'w-[500px]',
    title: 'Form',
    onSubmit: (event) => {
      event.preventDefault();
    },
    children: <div>
      <div className="text-center mt-10"><Input placeholder="Enter Notes ..." /></div>
      <div className="text-center mt-10"><Button>Submit</Button></div>
    </div>
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    fireEvent.change(canvas.getByPlaceholderText('Enter Notes ...'), { target: { value: 'Notes is here' } });

    const submitButton = canvas.getByRole('button', { name: 'Submit' });
    fireEvent.click(submitButton);
  },
};
