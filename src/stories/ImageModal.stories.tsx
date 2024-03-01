import type { Meta, StoryObj } from '@storybook/react';

import { ImageModal } from '../lab/ImageModal';

const meta: Meta<typeof ImageModal> = {
  component: ImageModal,
  title: '5. Lab/ImageModal',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof ImageModal>;

export const Brand: Story = {
  args: {}
};
