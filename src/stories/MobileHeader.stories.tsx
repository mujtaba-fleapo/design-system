import { Box, Link, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { MobileHeader } from '../components/navigation/MobileHeader';

const meta: Meta<typeof MobileHeader> = {
  component: MobileHeader,
  title: '4. Components/MobileHeader ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MobileHeader>;

const handleNotification = () => {
  console.log('Notification');
};

export const Brand: Story = {
  args: {},
  render: (): JSX.Element => (
    <>
      <MobileHeader
        onNotificationsClick={handleNotification}
        notificationCount={10}
        state="home"
      />
      <MobileHeader notificationCount={10} variant="white" title="Posts" />
      <MobileHeader notificationCount={10} variant="reverse" title="Posts" />
    </>
  )
};
export const Spanish: Story = {
  args: {},
  render: (): JSX.Element => (
    <>
      <MobileHeader state="home" />
      <MobileHeader
        notificationCount={10}
        variant="white"
        title="publicación"
      />
    </>
  )
};

Spanish.storyName = `🔶 Input`;

export const Arabic: Story = {
  args: {},
  render: (): JSX.Element => (
    <>
      <MobileHeader state="home" />
      <MobileHeader notificationCount={10} variant="white" title="ارسل" />
    </>
  )
};

Arabic.storyName = `🔶 Input`;

Brand.storyName = `🔶 MobileHeader`;

export const MobileHeaderStory: Story = {
  args: {
    state: 'home',
    notificationCount: 10,
    variant: 'white',
    title: 'Posts',
    onBackClick: () => null,
    onNotificationsClick: handleNotification
  }
};

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
  render: (): JSX.Element => <></>
};

Figma.storyName = '🎨 Figma';
