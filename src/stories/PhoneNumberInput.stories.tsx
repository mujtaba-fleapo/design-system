import type { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Typography } from '@mui/material';
import { PhoneNumberInput } from '../lab/PhoneNumberInput';

const meta: Meta<typeof PhoneNumberInput> = {
  component: PhoneNumberInput,
  title: '5. Lab/PhoneNumberInput',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof PhoneNumberInput>;
export const Brand: Story = {
  args: {}
};

Brand.storyName = `📥 PhoneNumberInput`;

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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FFsnAZShvvaHlODA7VPcCvY%2FFanfix-2.0-Latest-Designs%3Ftype%3Ddesign%26node-id%3D399%253A37368%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
