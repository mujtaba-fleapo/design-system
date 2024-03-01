import type { Meta, StoryObj } from '@storybook/react';
import { ImageEditorModal } from '../lab/ImageEditorModal';

const meta: Meta<typeof ImageEditorModal> = {
  component: ImageEditorModal,
  title: '5. Lab/ImageEditorModal',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof ImageEditorModal>;

export const Brand: Story = {
  args: {}
};
