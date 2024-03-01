// DesktopLinkList.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Typography } from '@mui/material';
import { DesktopLinkList } from '../components/navigation/DesktopLinkList';

const meta: Meta<typeof DesktopLinkList> = {
  component: DesktopLinkList,
  title: '4. Components/DesktopLinkList ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DesktopLinkList>;

export const Brand: Story = {
  args: {
    options: [
      { title: 'Link', key: '1' },
      { title: 'Link', key: '2' }
    ]
  }
};

Brand.storyName = `🔶 DesktopLinkList`;

export const Spanish: Story = {
  args: {
    options: [
      { title: 'publicación', key: '1' },
      { title: 'publicación', key: '2' }
    ]
  }
};

Spanish.storyName = '🔶 Spanish';

export const Arabic: Story = {
  args: {
    options: [
      { title: 'ارسل', key: '1' },
      { title: 'ارسل', key: '2' }
    ]
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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D265%253A5858%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
