import { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Stack } from '@mui/material';
import { Typography } from '../elements/Typography';
import { CssBaseline } from '../lab/CssBaseline';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: '2. Typography',
  args: {}
};

export default meta;

type Story = StoryObj<typeof Typography>;

const Slice = ({ name }: { name: string }) => {
  return (
    <Stack
      gap={'16px'}
      sx={{
        '& > *': {
          m: 1
        },
        maxWidth: '20%',
        padding: '16px'
      }}
    >
      <Typography className={`${name}28`}>{`${name} 28`}</Typography>
      <Typography className={`${name}24`}>{`${name} 24`}</Typography>
      <Typography className={`${name}20`}>{`${name} 20`}</Typography>
      <Typography className={`${name}18`}>{`${name} 18`}</Typography>
      <Typography className={`${name}16`}>{`${name} 16`}</Typography>
      <Typography className={`${name}14`}>{`${name} 14`}</Typography>
      <Typography className={`${name}13`}>{`${name} 13`}</Typography>
      <Typography className={`${name}12`}>{`${name} 12`}</Typography>
      <Typography className={`${name}10`}>{`${name} 10`}</Typography>
    </Stack>
  );
};

const AllStyles = () => {
  return (
    <>
      <CssBaseline />
      <Stack direction={'row'} gap={'32px'}>
        <Slice name="interLight" />
        <Slice name="interRegular" />
        <Slice name="interMedium" />
        <Slice name="interSemibold" />
        <Slice name="interBold" />
      </Stack>
    </>
  );
};

export const Brand: Story = {
  render: () => <AllStyles />
};

Brand.storyName = '📝 Typography';

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
          <Typography sx={{ color: 'red' }}>NOT IMPLEMENTED</Typography>
        )}
        {props.inprogress && (
          <Typography sx={{ color: 'orange' }}>IN PROGRESS</Typography>
        )}
        {props.ok && <Typography sx={{ color: 'green' }}>VERIFIED</Typography>}
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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D286%253A5410%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
