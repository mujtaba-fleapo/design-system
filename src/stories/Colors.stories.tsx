import { Meta, StoryObj } from '@storybook/react';

import { Box, Link, Stack, Typography } from '@mui/material';
import { CssBaseline } from '../lab/CssBaseline';
import { colors } from '../styles/colors';

const meta: Meta<typeof Box> = {
  component: Box,
  title: '1. Colors',
  args: {
    color: colors.black
  }
};

export default meta;
type Story = StoryObj<typeof Box>;

const OneColor = ({ color, name, labelColor }: any) => {
  return (
    <Stack
      gap={'10px'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        '& > *': {
          m: 1
        },
        width: '400px',
        height: '100px',
        padding: '16px',
        border: '1px solid #ccc',
        backgroundColor: color,
        color: labelColor || 'black'
      }}
    >
      <Box width={'100%'} textTransform={'uppercase'}>
        {name}
      </Box>
      <Box
        width={'100%'}
        sx={{
          opacity: 0.5
        }}
      >
        {color}
      </Box>
      <Box></Box>
    </Stack>
  );
};

const AllColors = () => {
  return (
    <>
      <CssBaseline />
      <Stack direction={'row'} gap={'32px'}>
        <Box>
          <OneColor color={colors.black} name="black" labelColor="#fff" />
          <OneColor
            color={colors.grayText}
            name="grey text"
            labelColor="lightgrey"
          />
          <OneColor color={colors.white} name="white" labelColor="#000" />
          <OneColor
            color={colors.attentionOrange}
            name="attention orange"
            labelColor="#fff"
          />
          <OneColor
            color={colors.errorRed}
            name="Error Red"
            labelColor="#fff"
          />
        </Box>
        <Box>
          <OneColor
            color={colors.lightgray[100]}
            name="light grey 01"
            labelColor="#000"
          />
          <OneColor
            color={colors.lightgray[200]}
            name="light grey 02"
            labelColor="#000"
          />
          <OneColor
            color={colors.lightgray[300]}
            name="light grey 03"
            labelColor="#000"
          />
          <OneColor
            color={colors.lightgray[400]}
            name="light grey 04"
            labelColor="#000"
          />
          <OneColor
            color={colors.lightgray[500]}
            name="light grey 05"
            labelColor="#000"
          />
          <OneColor
            color={colors.lightgray[600]}
            name="light grey 06"
            labelColor="#000"
          />
        </Box>
        <Box>
          <OneColor
            color={colors.darkgray[100]}
            name="Dark grey 01"
            labelColor="#fff"
          />
          <OneColor
            color={colors.darkgray[200]}
            name="Dark grey 02"
            labelColor="#fff"
          />
          <OneColor
            color={colors.darkgray[300]}
            name="Dark grey 03"
            labelColor="#fff"
          />
          <OneColor
            color={colors.darkgray[400]}
            name="Dark grey 04"
            labelColor="#fff"
          />
          <OneColor
            color={colors.darkgray[500]}
            name="Dark grey 05"
            labelColor="#fff"
          />
        </Box>
      </Stack>
    </>
  );
};

export const Brand: Story = {
  parameters: {
    layout: 'fullscreen',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/l2mfmKnw7R89TAfSaz4p0O/Fanfix-2.0-Design-System?type=design&node-id=243%3A5714&mode=dev'
    }
  },

  render: () => <AllColors />
};

Brand.storyName = '🌈  Colors';

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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D243%253A5714%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
