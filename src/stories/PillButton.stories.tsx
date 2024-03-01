import type { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Stack, Typography } from '@mui/material';
import { PillButton } from '../elements/PillButton';
import { Plus } from '../elements/icons';

const meta: Meta<typeof PillButton> = {
  component: PillButton,
  title: '3. Elements/PillButton',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  }
};

export default meta;

type Story = StoryObj<typeof PillButton>;
export const Unlock: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <PillButton /> component`}</Alert>
  )
};
export const Brand: Story = {
  render: ({ color }): JSX.Element => (
    <Stack gap={'32px'} direction={'row'}>
      <Stack gap={'16px'}>
        <PillButton
          text="Text"
          variant="primary"
          size="large"
          icon={<Plus />}
        />
        <PillButton
          text="Text"
          variant="primary"
          size="medium"
          icon={<Plus />}
        />
        <PillButton
          text="Text"
          variant="primary"
          size="small"
          icon={<Plus />}
        />
      </Stack>
      <Stack gap={'16px'}>
        <PillButton
          text="Text"
          variant="secondary"
          size="large"
          icon={<Plus />}
        />
        <PillButton
          text="Text"
          variant="secondary"
          size="medium"
          icon={<Plus />}
        />
        <PillButton
          text="Text"
          variant="secondary"
          size="small"
          icon={<Plus />}
        />
      </Stack>
      <Stack gap={'16px'}>
        <PillButton text="Text" variant="text" size="large" icon={<Plus />} />
        <PillButton text="Text" variant="text" size="medium" icon={<Plus />} />
        <PillButton text="Text" variant="text" size="small" icon={<Plus />} />
      </Stack>
    </Stack>
  )
};

export const Instance: Story = {
  args: {
    text: 'Text',
    variant: 'primary',
    onClick: () => console.log('clicked')
  }
};

Brand.storyName = '💊 All pill buttons';

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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A292%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
