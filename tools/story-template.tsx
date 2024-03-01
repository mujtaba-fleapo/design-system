// COMPONENT_NAME.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
IMPORT_COMPONENT;

const meta: Meta<typeof Box> = {
  component: Box,
  title: '4. Components/COMPONENT_NAME AYMAN_STATE',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Brand: Story = {
  args: {},
  RENDER_STATEMENT
};

Brand.storyName = `🔶 COMPONENT_NAME`;

const FigmaPreview = (props: any): JSX.Element => {
  return (
    <div
      style={{
        width: '90vw',
        height: '90dvh'
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
  render: (): JSX.Element => <FigmaPreview REVIEW_STATE url="EMBED_URL" />
};

Figma.storyName = '🎨 Figma';
