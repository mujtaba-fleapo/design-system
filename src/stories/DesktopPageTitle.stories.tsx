// DesktopPageTitle.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Typography } from '@mui/material';
import { DesktopPageTitle } from '../components/creator/DesktopPageTitle';

const meta: Meta<typeof DesktopPageTitle> = {
  component: DesktopPageTitle,
  title: '4. Components/DesktopPageTitle ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof DesktopPageTitle>;

export const Brand: Story = {
  args: {
    title: ' Title',
    options: [
      { label: 'Option 1', value: 'option1' },
      { label: 'Option 2', value: 'option2' }
    ],
    onBackClick: () => {
      console.log('Back clicked');
    },
    onOptionClick: (value) => {
      console.log(`Option clicked: ${value}`);
    }
  }
};

Brand.storyName = `🔶 DesktopPageTitle`;

export const Spanish: Story = {
  args: {
    options: [
      {
        label: 'publicación',
        key: '1'
      }
    ],
    title: 'publicación'
  }
};

Spanish.storyName = '🔶 Spanish';

export const Arabic: Story = {
  args: {
    options: [
      {
        label: 'ارسل',
        key: '1'
      }
    ],
    title: 'ارسل',

    locale: 'ar'
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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D242%253A5638%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
