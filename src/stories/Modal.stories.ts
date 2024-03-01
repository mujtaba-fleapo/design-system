import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../lab/Modal';

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: '5. Lab/Modal',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Brand: Story = {
  args: {}
};
