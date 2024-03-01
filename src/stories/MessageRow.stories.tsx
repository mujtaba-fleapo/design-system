// MobileMessageRow.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { MessageRow } from '../components/messaging/MessageRow';

const meta: Meta<typeof MessageRow> = {
  component: MessageRow,
  title: '4. Components/MessageRow',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MessageRow>;

export const Brand: Story = {
  args: {
    channelId: '1',
    name: 'Name',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam.',
    time: '8:23 PM',
    photo: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    unread: true,
    revenue: 42
  }
};

Brand.storyName = `🔶 MessageRow`;

export const DesktopMessageRow: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: '600px' }}>
      <Alert color="error">{`Obsolete: Use <MessageRow /> component`}</Alert>
    </Box>
  )
};

export const MobileMessageRow: Story = {
  render: (args) => (
    <Box sx={{ width: '100%', maxWidth: '600px' }}>
      <Alert color="error">{`Obsolete: Use <MessageRow /> component`}</Alert>
    </Box>
  )
};

export const Spanish: Story = {
  args: {
    name: 'publicación',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam',
    time: '8:23 PM',
    photo: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    youText: 'publicación'
  }
};

Spanish.storyName = `🔶 Input`;

export const Arabic: Story = {
  args: {
    name: 'ارسل',
    message:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam',
    time: '8:23 PM',
    photo: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    youText: 'publicación',
    locale: 'en'
  }
};

Arabic.storyName = `🔶 Input`;

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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D253%253A5827%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
