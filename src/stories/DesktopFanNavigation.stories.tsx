// DesktopFanNavigation.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { DesktopFanNavigation } from '../components/navigation/DesktopFanNavigation';

const meta: Meta<typeof DesktopFanNavigation> = {
  component: DesktopFanNavigation,
  title: '4. Components/DesktopFanNavigation ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DesktopFanNavigation>;

export const Brand: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <DesktopFanNavigation /> component that is inside the fan app`}</Alert>
  )
};

Brand.storyName = `🔶 DesktopFanNavigation`;

export const Spanish: Story = {
  args: {
    handleMessage: () => {
      console.log('handleMessage');
    },
    handleTip: () => {
      console.log('handleTip');
    },
    items: [
      {
        linkName: 'publicación',
        icon: 'Home'
      },
      {
        linkName: 'publicación',
        icon: 'Search'
      },
      {
        linkName: 'publicación',
        icon: 'Subscription'
      },
      {
        linkName: 'publicación',
        icon: 'Media'
      },
      {
        linkName: 'publicación',
        icon: 'Message'
      },
      {
        linkName: 'publicación',
        icon: 'Notification'
      },
      {
        linkName: 'publicación',
        icon: 'Account'
      }
    ]
  }
};

Spanish.storyName = `🔶 Spanish`;

export const Arabic: Story = {
  args: {
    handleMessage: () => {
      console.log('handleMessage');
    },
    handleTip: () => {
      console.log('handleTip');
    },
    items: [
      {
        linkName: 'ارسل',
        icon: 'Home'
      },
      {
        linkName: 'ارسل',
        icon: 'Search'
      },
      {
        linkName: 'ارسل',
        icon: 'Subscription'
      },
      {
        linkName: 'ارسل',
        icon: 'Media'
      },
      {
        linkName: 'ارسل',
        icon: 'Message'
      },
      {
        linkName: 'ارسل',
        icon: 'Notification'
      },
      {
        linkName: 'ارسل',
        icon: 'Account'
      }
    ]
  }
};

Arabic.storyName = `🔶 Arabic`;

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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A730%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
