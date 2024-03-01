import { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Typography } from '@mui/material';
import { PostSlider } from '../components/post/PostSlider';

const meta: Meta<typeof PostSlider> = {
  component: PostSlider,
  title: '4. Components/PostSlider',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PostSlider>;
const args = {
  id: '1',
  isExclusive: true,
  subscriberUnlockPrice: 0,
  nonSubscriberUnlockPrice: 20,
  assets: [
    {
      id: '1',
      url: 'https://picsum.photos/200',
      resizedUrl: 'https://picsum.photos/200',
      isFree: true,
      type: 'image'
    },
    {
      id: '2',
      url: 'https://picsum.photos/200',
      resizedUrl: 'https://picsum.photos/200',
      isFree: true,
      type: 'image'
    }
  ],
  watermark: 'ffwHJFpTZqMkX4OyIJmeq8isRCf1'
};

export const Brand = (props: any): JSX.Element => {
  return (
    <div
      style={{
        height: '60vh',
        width: '60vw'
      }}
    >
      <PostSlider {...args} />
    </div>
  );
};

export const OnlyFirstFree: Story = {
  args: {
    id: '1',
    isExclusive: true,
    subscriberUnlockPrice: 0,
    nonSubscriberUnlockPrice: 20,
    assets: [
      {
        id: '1',
        url: 'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
        isFree: true,
        resizedUrl:
          'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
        type: 'image'
      },
      {
        id: '2',
        url: 'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
        isFree: false,
        resizedUrl:
          'https://storage.googleapis.com/fanfix2/PostMedia/S5McichzymWXEK1UZaSxZDX84S92/72d36b7d-d809-4d34-852b-a4bb6b571024_resized.webp',
        type: 'image'
      }
    ],
    watermark: 'ffwHJFpTZqMkX4OyIJmeq8isRCf1'
  }
};

Brand.storyName = `🔶 PostSlider`;

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
      notImplemented
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A560%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
