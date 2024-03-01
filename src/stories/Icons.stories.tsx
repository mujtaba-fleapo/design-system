// Button.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Box, Link as MaterialLink, Stack, Typography } from '@mui/material';
import { JSX } from 'react/jsx-runtime';
import { Badge } from '../elements/Badge';
import {
  Bag,
  Block,
  Calendar,
  Cards,
  Chart,
  Checkbold,
  Checkcircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Circlemoney,
  Circleplus,
  Clock,
  Close,
  Comment,
  Community,
  Delete,
  Download,
  Email,
  Eye,
  Eyeslash,
  Filter,
  Gear,
  Heart,
  Heartfilled,
  Home,
  Horizontaldots,
  Image,
  Info,
  LeftArrow,
  List,
  Live,
  Lock,
  Media,
  Message,
  Messageblast,
  Minus,
  Money,
  Morecircle,
  Notification,
  Plus,
  Rightarrow,
  Rotate,
  Search,
  Send,
  Subscriber,
  Subscription,
  Unlock,
  User,
  Verticaldots,
  World
} from '../elements/icons';
import { Edit } from '../elements/icons/Edit';
import { Link } from '../elements/icons/Link';
import { MessageNew } from '../elements/icons/MessageNew';

const meta: Meta<typeof Box> = {
  component: Box,
  title: '3. Elements/Icons'
};

export default meta;
type Story = StoryObj<typeof Box>;

const Slice = () => {
  const color = '#000';
  return (
    <Stack
      gap={'16px'}
      sx={{
        border: '1px solid #ccc',
        '& > *': {
          m: 1
        },
        maxWidth: '30%'
      }}
    >
      <Stack direction={'row'} gap={'16px'}>
        <Plus color={color} />
        <Minus color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Home color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Search color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Subscription color={color} />
        <Subscriber color={color} />
        <User color={color} />
        <Community color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Message color={color} />
        <MessageNew color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Chart color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Heart color={color} />
        <Heartfilled />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Comment color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Image color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Lock color={color} />
        <Unlock color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Circleplus color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Circlemoney color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Money color={color} />
      </Stack>

      <Stack direction={'row'} gap={'16px'}>
        <Horizontaldots color={color} />
        <Verticaldots color={color} />
        <Morecircle color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Cards color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Send color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Eye color={color} />
        <Eyeslash color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Checkcircle color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Close color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <ChevronLeft color={color} />
        <ChevronRight color={color} />
        <ChevronDown color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Delete color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Live active />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Messageblast color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Gear color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Block color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Info color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Bag color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Notification color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <LeftArrow color={color} />
        <Rightarrow color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Clock color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Calendar color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <World color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Filter color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Checkbold color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Download color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Email color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Rotate color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Media color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <List color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Edit color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Link color={color} />
      </Stack>
      <Stack direction={'row'} gap={'16px'}>
        <Badge />
      </Stack>
    </Stack>
  );
};

const AllIcons = (): JSX.Element => {
  return (
    <Stack direction={'row'} gap={'32px'}>
      <Slice />
    </Stack>
  );
};

export const Icons: Story = {
  args: {
    color: 'primary'
  },
  render: (): JSX.Element => <AllIcons />
};

Icons.storyName = '🔶 All icons';

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
        <MaterialLink target="_blank" href={props.url} variant="body1">
          URL: {props.url}
        </MaterialLink>
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
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D12%253A359%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
