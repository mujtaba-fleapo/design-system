// Tabs.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { Tabs } from '../components/common/Tabs';

const meta: Meta<typeof Tabs> = {
  component: Tabs,
  title: '4. Components/Tabs ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Brand: Story = {
  args: {
    options: [
      {
        title: 'Tab 1',
        id: '1'
      },
      {
        title: 'Tab 2',
        id: '2'
      },
      {
        title: 'Tab 3',
        id: '3'
      }
    ],
    onClick: (key: string) => {
      console.log(`Selected key: ${key}`);
    }
  }
};

Brand.storyName = `🔶 Tabs`;
export const DesktopTabs: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <Tabs /> component`}</Alert>
  )
};
export const MobileTabs: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <Tabs /> component`}</Alert>
  )
};

export const Spanish: Story = {
  args: {
    options: [
      {
        title: 'publicación',
        id: '1'
      }
    ]
  }
};

Spanish.storyName = `🔶 Input`;

export const Arabic: Story = {
  args: {
    options: [
      {
        title: 'ارسل',
        id: '1'
      }
    ]
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
  render: (): JSX.Element => (
    <FigmaPreview
      inprogress
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D246%253A5742%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
