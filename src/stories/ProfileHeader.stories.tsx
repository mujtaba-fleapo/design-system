import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { ProfileHeader } from '../components/creator/ProfileHeader';

const meta: Meta<typeof ProfileHeader> = {
  component: ProfileHeader,
  title: '4. Components/ProfileHeader ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ProfileHeader>;

export const Brand: Story = {
  args: {
    firstName: 'Aisha',
    lastName: 'Mian',
    userName: 'aishamian',
    bioText:
      'One half of the TikTik and YouTube duo MianTwins alongside my twin sister, Azra.',
    profilePic: 'https://picsum.photos/100',

    totalPosts: 200
  }
};

Brand.storyName = 'ProfileHeader';

export const DesktopProfileHeader: Story = {
  render: (args) => (
    <div>
      <Alert color="error">{`Obsolete: Use <ProfileHeader /> component`}</Alert>
      <iframe
        title="Figma Preview"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A661%26mode%3Ddev"
        allowFullScreen
      ></iframe>
    </div>
  )
};

DesktopProfileHeader.storyName = 'DesktopProfileHeader';

export const MobileProfileHeader: Story = {
  render: (args) => (
    <div>
      <Alert color="error">
        {`Obsolete: Use <ProfileHeader /> component.`}
      </Alert>
      <iframe
        title="Mobile Profile Header"
        width="800"
        height="450"
        src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D230%253A3920%26mode%3Ddev"
      ></iframe>
    </div>
  )
};

MobileProfileHeader.storyName = 'MobileProfileHeader';

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

export const Spanish: Story = {
  args: {
    bioText: 'publicación',
    firstName: 'publicación',
    lastName: 'publicación',
    userName: 'publicación'
  }
};

Spanish.storyName = '🔶 Spanish';

export const Arabic: Story = {
  args: {
    bioText: 'ارسل',
    firstName: 'ارسل',
    lastName: 'ارسل',
    userName: 'ارسل'
  }
};

Arabic.storyName = '🔶 Arabic';

export const Figma: Story = {
  render: (): JSX.Element => (
    <FigmaPreview
      ok
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A661%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
