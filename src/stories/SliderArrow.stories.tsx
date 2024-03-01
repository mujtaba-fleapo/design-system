import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { SliderArrow } from '../elements/icons';

const meta: Meta<typeof SliderArrow> = {
  component: SliderArrow,
  title: '3. Elements/SliderArrow',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof SliderArrow>;

const Icon = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '20px'
      }}
    >
      <SliderArrow direction="left" />
      <SliderArrow direction="right" />
    </Box>
  );
};

export const Brand: Story = {
  render: (): JSX.Element => <Icon />
};

Brand.storyName = '➡️ SliderArrow';
export const SliderRightArrow: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <SliderArrow /> component`}</Alert>
  )
};
export const SliderLeftArrow: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <SliderArrow /> component`}</Alert>
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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D240%253A5920%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
