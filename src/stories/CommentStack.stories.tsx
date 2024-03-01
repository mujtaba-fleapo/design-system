import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';

import { CommentStack } from '../components/post/CommentStack';

const meta: Meta<typeof CommentStack> = {
  component: CommentStack,
  title: '4. Components/CommentStack ',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CommentStack>;

export const Brand: Story = {
  args: {
    loading: false,
    showMoreComments: true,
    fans: [
      { label: 'AlyssaChristensen', key: '1234' },
      { label: 'AnthonyDub', key: '123' },
      { label: 'SarahSmith', key: '12' }
    ],

    data: [
      {
        author: {
          username: 'Alyssa Christensen',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Jun 13, 2023',
        comment: 'sit amet diam eu dolor egestas rhoncus. Proin nisl sem,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Joel Payne',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Apr 29, 2023',
        comment:
          'mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Blythe Vaughn',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'May 19, 2024',
        comment:
          'mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Chadwick Frederick',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Oct 23, 2022',
        comment:
          'interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Skyler Talley',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Oct 21, 2022',
        comment:
          'rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Ocean Chambers',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Sep 6, 2023',
        comment:
          'sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna.',
        id: '',
        replies: [],
        likeCount: 0
      }
    ]
  }
};

Brand.storyName = `🔶 CommentStack`;

export const Spanish: Story = {
  args: {
    loading: false,
    showMoreComments: true,
    fans: [
      { label: 'AlyssaChristensen', key: '1234' },
      { label: 'AnthonyDub', key: '123' },
      { label: 'SarahSmith', key: '12' }
    ],
    data: [
      {
        author: {
          username: 'Alyssa Christensen',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Jun 13, 2023',
        comment: 'sit amet diam eu dolor egestas rhoncus. Proin nisl sem,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Joel Payne',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Apr 29, 2023',
        comment:
          'mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Blythe Vaughn',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'May 19, 2024',
        comment:
          'mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Chadwick Frederick',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Oct 23, 2022',
        comment:
          'interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Skyler Talley',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Oct 21, 2022',
        comment:
          'rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Ocean Chambers',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Sep 6, 2023',
        comment:
          'sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna.',
        id: '',
        replies: [],
        likeCount: 0
      }
    ],
    showMoreText: 'Mostrar más comentarios'
  }
};

Spanish.storyName = `🔶 CommentStack`;

export const Arabic: Story = {
  args: {
    loading: false,
    showMoreComments: true,
    fans: [
      { label: 'AlyssaChristensen', key: '1234' },
      { label: 'AnthonyDub', key: '123' },
      { label: 'SarahSmith', key: '12' }
    ],

    data: [
      {
        author: {
          username: 'Alyssa Christensen',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Jun 13, 2023',
        comment: 'sit amet diam eu dolor egestas rhoncus. Proin nisl sem,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Joel Payne',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Apr 29, 2023',
        comment:
          'mollis. Integer tincidunt aliquam arcu. Aliquam ultrices iaculis odio. Nam',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Blythe Vaughn',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'May 19, 2024',
        comment:
          'mattis velit justo nec ante. Maecenas mi felis, adipiscing fringilla,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Chadwick Frederick',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Oct 23, 2022',
        comment:
          'interdum feugiat. Sed nec metus facilisis lorem tristique aliquet. Phasellus',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Skyler Talley',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Oct 21, 2022',
        comment:
          'rhoncus. Nullam velit dui, semper et, lacinia vitae, sodales at,',
        id: '',
        replies: [],
        likeCount: 0
      },
      {
        author: {
          username: 'Ocean Chambers',
          userId: '',
          avatarUrl: 'https://placekitten.com/250/250'
        },
        createdAt: 'Sep 6, 2023',
        comment:
          'sollicitudin a, malesuada id, erat. Etiam vestibulum massa rutrum magna.',
        id: '',
        replies: [],
        likeCount: 0
      }
    ],
    showMoreText: 'عرض المزيد من التعليقات',
    locale: 'ar'
  }
};

Arabic.storyName = `🔶 CommentStack`;

export const DesktopCommentStack: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CommentStack /> component`}</Alert>
  )
};
export const MobileCommentStack: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CommentStack /> component`}</Alert>
  )
};
export const DesktopSingleComment: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CommentStack /> component`}</Alert>
  )
};
export const MobileSingleComment: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <CommentStack /> component`}</Alert>
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
      inprogress
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D243%253A5735%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
