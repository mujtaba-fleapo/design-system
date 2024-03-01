// CreatorExploreElement.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Typography } from '@mui/material';
import { CreatorExploreElement } from '../components/creator/CreatorExploreElement';

const meta: Meta<typeof CreatorExploreElement> = {
  component: CreatorExploreElement,
  title: '4. Components/CreatorExploreElement ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CreatorExploreElement>;

export const Brand: Story = {
  args: {
    firstName: 'Aisha',
    lastName: 'Mian',
    username: 'AishaMian',
    profilePic: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    privatePostCount: 24,
    publicPostCount: 24
  }
};

Brand.storyName = `🔶 CreatorExploreElement`;

export const Spanish: Story = {
  args: {
    firstName: 'publicación',
    lastName: 'publicación',
    username: 'publicación',
    profilePic: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    privatePostCount: 24,
    publicPostCount: 24
  }
};

Spanish.storyName = `🔶 CreatorExploreElement`;

export const Arabic: Story = {
  args: {
    firstName: 'ارسل',
    lastName: 'ارسل',
    username: 'ارسل',
    profilePic: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    privatePostCount: 24,
    publicPostCount: 24,
    locale: 'ar'
  }
};

Arabic.storyName = `🔶 CreatorExploreElement`;

const FigmaPreview = (props: any): JSX.Element => {
  return (
    <div
      style={{
        width: '90vw',
        height: '90vh'
      }}
    >
      <Box>
        {props.notImplemented && (
          <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
            NOT IMPLEMENTED
          </Typography>
        )}
        {props.inprogress && (
          <Typography variant="body1" gutterBottom sx={{ color: 'orange' }}>
            IN PROGRESS
          </Typography>
        )}
        {props.ok && (
          <Typography variant="body1" gutterBottom sx={{ color: 'green' }}>
            VERIFIED
          </Typography>
        )}
        <Link target="_blank" href={props.url} variant="body1">
          URL: {props.url}
        </Link>
      </Box>
      <iframe
        title="Figma Preview"
        style={{ border: '1px dotted black' }}
        width="100%"
        height="100%"
        src={props.url}
      ></iframe>
    </div>
  );
};

export const Figma: Story = {
  render: (): JSX.Element => (
    <FigmaPreview
      ok
      url="https://www.figma.com/file/oMsrouNXnoNSCMi2fGcJk5/Fanfix-2.0-Exploration?node-id=718%3A3812&mode=dev"
    />
  )
};

Figma.storyName = '🎨 Figma';
