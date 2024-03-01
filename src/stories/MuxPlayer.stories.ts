import type { Meta, StoryObj } from '@storybook/react';
import { MuxPlayer } from '../lab/MuxPlayer';

const meta: Meta<typeof MuxPlayer> = {
  component: MuxPlayer,
  title: '5. Lab/MuxPlayer',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MuxPlayer>;

export const Brand: Story = {
  args: {
    playbackId: 'OG6Zq19uOjRkjO3bISLWasE2M01Cx8O3o'
  }
};
