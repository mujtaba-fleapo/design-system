// PostTop.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { PostTop } from '../components/post/PostTop';

const meta: Meta<typeof PostTop> = {
  component: PostTop,
  title: '4. Components/PostTop ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PostTop>;

export const Brand: Story = {
  args: {
    posterName: 'John Doe',
    avatarSrc: 'https://picsum.photos/200'
  }
};
export const DesktopPostTop: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <PostTop /> component`}</Alert>
  )
};
export const MobilePostTop: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <PostTop /> component`}</Alert>
  )
};
Brand.storyName = `🔶 PostTop`;

export const Spanish: Story = {
  args: {
    posterName: 'publicación',
    isPinned: false,
    inCreatorProfile: true
  }
};

Spanish.storyName = '🔶 Spanish';

export const Arabic: Story = {
  args: {
    posterName: 'ارسل',
    isPinned: false,
    inCreatorProfile: true,
    locale: 'ar'
  }
};

Arabic.storyName = '🔶 Arabic';

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
      inprogress
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A560%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
