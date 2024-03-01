import type { Meta, StoryObj } from '@storybook/react';

import { Select } from '../lab/Select';

const meta: Meta<typeof Select> = {
  component: Select,
  title: '5. Lab/Select',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    label: 'Select',
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' }
    ]
  }
};
