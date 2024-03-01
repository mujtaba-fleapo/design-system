// DesktopNotification.stories.ts|tsx

import { Box, Link, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { DesktopNotification } from '../components/common/DesktopNotification';

const meta: Meta<typeof DesktopNotification> = {
  component: DesktopNotification,
  title: '4. Components/DesktopNotification ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DesktopNotification>;

export const Brand: Story = {
  args: {
    userName: 'Aisha Mian',
    profilePic: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    message: 'commented on your post',
    text: 'Fan',
    sendMessageText: 'Send Message',
    sinceText: '2 hours ago'
  }
};

Brand.storyName = `🔶 DesktopNotification`;

export const Spanish: Story = {
  args: {
    userName: 'Aisha Mian',
    profilePic: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    message: 'comentado en tu publicación',
    text: 'fanático',
    sinceText: 'hace 2 horas',
    sendMessageText: 'Enviar mensaje',
    locale: 'es'
  }
};

Spanish.storyName = `🔶 DesktopNotification ES`;

export const Arabic: Story = {
  args: {
    userName: 'Aisha Mian',
    profilePic: 'https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg',
    message: 'علق على منشورك',
    text: 'معجب',
    sinceText: 'منذ ساعتين',
    sendMessageText: 'إرسال رسالة',
    locale: 'ar'
  }
};

Arabic.storyName = `🔶 DesktopNotification Ar`;

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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D22%253A2007%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
