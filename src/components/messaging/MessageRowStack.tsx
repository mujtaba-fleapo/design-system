import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Typography } from '../../elements/Typography';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Messages {
  messages: Message[];
  onClick: (arg: string) => void;
  locale?: string;
}
interface Message {
  photo: string;
  channelId: string;
  name: string;
  message: string;
  time: string;
  unread: boolean;
  revenue: number;
  onClick: (arg: string) => void;
  locale?: string;
}

export const MessageRowStack = ({
  locale = defaultLocaleValue,
  ...props
}: Messages) => {
  // Component stacks message rows https://www.figma.com/file/l2mfmKnw7R89TAfSaz4p0O/Fanfix-2.0-Design-System?type=design&node-id=253-5827&mode=design&t=WzEyuD6A85Tg5XaP-0
  return (
    <Stack
      data-testid={`message-row-stack-ds`}
      dir={getLocaleDirection(locale)}
      spacing={2}
    >
      {props.messages.map((msg, i) => {
        return (
          <>
            <MessageRow
              data-testid={`message-row-stack-message-row-${i}-ds`}
              key={i}
              channelId={msg.channelId}
              message={msg.message}
              name={msg.name}
              photo={msg.photo}
              revenue={msg.revenue}
              time={msg.time}
              unread={msg.unread}
              onClick={props.onClick}
            />
            <Box
              sx={{
                borderTop: `1px solid ${colors.lightgray['400']}`,
                width: '100%'
              }}
            ></Box>
          </>
        );
      })}
    </Stack>
  );
};

const MessageRow = ({ locale = defaultLocaleValue, ...props }: Message) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`message-row-stack-channelId-ds`}
        dir={getLocaleDirection(locale)}
        display={'flex'}
        alignItems={'center'}
        gap={1}
        p={{ md: '8px' }}
        width={'100%'}
        onClick={() => props.onClick(props.channelId)}
      >
        <Box>
          <Avatar src={props.photo} />
        </Box>
        <Box flex={1}>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography className="interSemibold13">
              {props.name} ${props.revenue}
            </Typography>
            <Typography className="interMedium12">{props.time}</Typography>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Typography className="interRegular13">
              <Box className="text-truncate" width={180}>
                {props.message}
              </Box>
            </Typography>
            <Box position={'relative'} left={-5}>
              {props.unread && <Badge variant="dot" />}
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
