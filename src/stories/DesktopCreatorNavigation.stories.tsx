// DesktopCreatorNavigation.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { DesktopCreatorNavigation } from '../components/navigation/DesktopCreatorNavigation';

const meta: Meta<typeof DesktopCreatorNavigation> = {
  component: DesktopCreatorNavigation,
  title: '4. Components/DesktopCreatorNavigation ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DesktopCreatorNavigation>;

const dummyData = {
  name: 'Aisha Mian',
  imageURL: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
  notificationCount: 7,
  messagesCount: 10
};
const SpanishDummyData = {
  name: 'publicación',
  spanishImageURL:
    'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
  notificationCount: 7,
  messagesCount: 10
};

const NavigationItems = [
  { title: 'Dashboard', path: '#' },
  { title: 'Posts', path: '#' },
  {
    title: 'Messages',
    path: '#'
  },
  { title: 'Media', path: '#' },
  { title: 'Community', path: '#' },
  { title: 'Insights', path: '#' }
];

const spanishNavigationItems = [
  { title: 'publicación', path: '#' },
  { title: 'publicación', path: '#' },
  {
    title: 'publicación',
    path: '#'
  }
];
const arabicNavigationItems = [
  { title: 'ارسل', path: '#' },
  { title: 'ارسل', path: '#' },
  {
    title: 'ارسل',
    path: '#'
  }
];

const handlePath = (path: string) => {
  console.log(path);
};

const handleNewPost = () => {
  console.log('New post');
};
const handleMessageBlast = () => {
  console.log('Message Blast');
};
const handleLiveStream = () => {
  console.log('Live Stream');
};

const handleNotification = () => {
  console.log('Notification');
};

export const Brand: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <DesktopCreatorNavigation /> component that is inside the fan app`}</Alert>
  )
};

export const Spanish: Story = {
  args: {
    NavigationItems: spanishNavigationItems,
    name: 'publicación'
  }
};

Spanish.storyName = `🔶 Input`;

export const Arabic: Story = {
  args: {
    name: 'ارسل',
    NavigationItems: arabicNavigationItems
  }
};

Arabic.storyName = `🔶 Input`;

Brand.storyName = `🔶 DesktopCreatorNavigation`;

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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D276%253A6562%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
