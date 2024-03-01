import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';

import { Badge } from '../elements/Badge';
import { Message } from '../elements/icons';

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: '3. Elements/Badge',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Brand: Story = {
  args: {
    number: 10
  }
};

export const DotVariant: Story = {
  args: {
    variant: 'dot'
  }
};

export const DefaultWithHighNumber: Story = {
  args: {
    number: 1000
  }
};

export const AboveAnIcon: Story = {
  args: {
    children: <Message />,
    number: 10
  }
};

Brand.storyName = '🏷️ Badge';
export const DesktopBadge: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <Badge /> component`}</Alert>
  )
};
export const MobileBadge: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <Badge /> component`}</Alert>
  )
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
      ok
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D221%253A6664%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
