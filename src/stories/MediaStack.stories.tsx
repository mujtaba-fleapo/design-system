import { Alert, Box, Link, Typography } from '@mui/material';
import { Meta, StoryObj } from '@storybook/react';
import { MediaStack } from '../components/creator/MediaStack';

const meta: Meta<typeof MediaStack> = {
  component: MediaStack,
  title: '4. Components/MediaStack',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof MediaStack>;

export const Brand: Story = {
  args: {
    mediaList: [
      'https://picsum.photos/200',
      'https://picsum.photos/201',
      'https://picsum.photos/201',
      'https://picsum.photos/201'
    ].map((url) => ({ url, type: 'image' }))
  }
};

export const DesktopCreatorMedia: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <MediaStack /> component`}</Alert>
  )
};

export const MobileCreatorMedia: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <MediaStack /> component`}</Alert>
  )
};

Brand.storyName = `🔶 Media`;

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
