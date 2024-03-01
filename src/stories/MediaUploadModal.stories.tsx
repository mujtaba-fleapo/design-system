import type { Meta, StoryObj } from '@storybook/react';
import { MediaUploadModal } from '../lab/MediaUploadModal';

const meta: Meta<typeof MediaUploadModal> = {
  component: MediaUploadModal,
  title: '5. Lab/MediaUploadModal',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof MediaUploadModal>;

export const Brand: Story = {
  args: {
    open: false,
    mediaType: 'PostMedia',
    onClose: () => console.log('Closed modal'),
    imageLayout: 'compact',
    onComplete: (uploadedAsset: any) =>
      console.log('Uploaded image, here is the asset', uploadedAsset)
  }
};
