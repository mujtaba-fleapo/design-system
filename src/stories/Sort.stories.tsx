// Sort.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Typography } from '@mui/material';
import { Sort } from '../components/common/Sort';

const meta: Meta<typeof Sort> = {
  component: Sort,
  title: '4. Components/Sort',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Sort>;

export const Brand: Story = {
  args: {
    options: [
      { label: 'Sort by Name', key: 'name' },
      { label: 'Sort by Date', key: 'date' }
    ],
    onMenuItemClick: (key: string) => {
      console.log(`Clicked on option with key: ${key}`);
    }
  }
};

Brand.storyName = `🔶 Sort`;

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
    options: [
      { label: 'publicación', key: 'name' },
      { label: 'publicación', key: 'date' }
    ]
  }
};

Spanish.storyName = '🔶 Spanish';

export const Arabic: Story = {
  args: {
    options: [
      { label: 'ارسل', key: 'name' },
      { label: 'ارسل', key: 'date' }
    ]
  }
};

Arabic.storyName = '🔶 Arabic';

export const Figma: Story = {
  render: (): JSX.Element => (
    <FigmaPreview
      ok
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D277%253A6125%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
