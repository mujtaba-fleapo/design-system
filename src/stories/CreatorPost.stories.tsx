// CreatorPost.stories.ts|tsx

import { Alert } from '@mui/material';
import type { Meta, StoryObj } from '@storybook/react';

import { CreatorPost } from '../components/post/CreatorPost';

const meta: Meta<typeof CreatorPost> = {
  component: CreatorPost,
  title: '4. Components/CreatorPost',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof CreatorPost>;

const args = {
  id: '1',
  assets: [
    {
      id: '1',
      url: 'https://source.unsplash.com/ulJYHTb86Bo/800x1600',
      resizedUrl: 'https://source.unsplash.com/ulJYHTb86Bo/800x1600',
      isFree: true,
      type: 'image'
    },
    {
      id: '2',
      url: 'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
      resizedUrl: 'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
      isFree: true,
      type: 'image'
    },
    {
      id: '3',
      url: 'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
      resizedUrl: 'https://source.unsplash.com/mMa_cpvxeBU/1600x1600',
      isFree: true,
      type: 'image'
    }
  ],
  avatarImage: 'https://source.unsplash.com/1600x900/?portrait',
  caption: 'This is a caption',
  commentCount: 10,
  likeCount: 10,
  isLiked: true,
  username: 'Aisha Mian',
  isCreator: true,
  options: [
    {
      label: 'Report',
      key: 'report',
      onClick: () => console.log('Report')
    },
    {
      label: 'Share',
      key: 'share',
      onClick: () => console.log('Share')
    }
  ]
};

export const Brand = (props: any): JSX.Element => {
  return (
    <div
      style={{
        height: '60vh',
        width: '60vw'
      }}
    >
      <CreatorPost {...args} />
    </div>
  );
};
Brand.storyName = `🔶 CreatorPost`;

export const DesktopCreatorPost: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CreatorPost /> component`}</Alert>
  )
};
export const MobileCreatorPost: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CreatorPost /> component`}</Alert>
  )
};
