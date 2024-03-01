import { ThemeProvider } from '@emotion/react';
import Done from '@mui/icons-material/Done';
import DoneAll from '@mui/icons-material/DoneAll';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import {
  defaultDesktopMessageRowTextProps,
  defaultMessageRowText
} from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Chip } from '../../elements/Chip';
import { CreatorBadge } from '../../elements/CreatorBadge';
import { OnlineChip } from '../../elements/OnlineChip';
import { Typography } from '../../elements/Typography';
import { Subscriber } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  key?: number;
  channelId: string;
  name: string;
  message: string;
  time: string;
  photo: string;
  unread: boolean;
  revenue: number;
  lastMessageSenderIsUser?: boolean;
  userType?: 'creator' | 'fan';
  tipAmount?: number;
  lastSeen?: string;
  userSubscribed?: boolean;
  messageCreatedAt?: string;
  onClick: (channelId: string) => void;
  isBlocked?: boolean;
  isOnline?: boolean;
  text?: defaultDesktopMessageRowTextProps;
  locale?: string;
  lastSeenAt?: string;
}

export const MessageRow = ({
  locale = defaultLocaleValue,
  text = defaultMessageRowText,
  ...props
}: Props) => {
  const showCheckMark = (): boolean => {
    const date1 = new Date(props.lastSeen!);
    const date2 = new Date(props.messageCreatedAt!);
    if (date1 > date2) return true;
    return false;
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        dir={getLocaleDirection(locale)}
        // key not working from dashboard, but is working from messageRowStack
        data-testid={`message-row-${
          props.name
            ? props.name.replace(/\s+/g, '-').toLowerCase()
            : props.channelId
        }-ds`}
        key={props.channelId}
        display={'flex'}
        alignItems={'center'}
        gap={1}
        width={'100%'}
        onClick={() => props.onClick(props.channelId)}
        className="active"
        sx={{
          '&:hover': {
            background: colors.lightgray[200]
          },
          '&:not(:last-child)': {
            borderBottom: { xs: `1px solid ${colors.lightgray[400]}`, md: 0 }
          },
          cursor: 'pointer',
          padding: '8px 0',
          borderRadius: { xs: 0, md: '4px' }
        }}
      >
        <Box
          data-testid={`message-row-avatar-${
            props.name
              ? props.name.replace(/\s+/g, '-').toLowerCase()
              : props.channelId
          }-ds`}
        >
          <Avatar src={props.photo} isOnline={props.isOnline} />
        </Box>
        <Box
          flex={1}
          data-testid={`message-row-contents-container-${
            props.name
              ? props.name.replace(/\s+/g, '-').toLowerCase()
              : props.channelId
          }-ds`}
          width={'calc(100% - 50px)'}
        >
          <Box
            data-testid={`message-row-top-box-ds`}
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
            gap={1}
          >
            <Box
              display={'flex'}
              alignItems={'center'}
              gap={2}
              data-testid={`message-row-name-box-ds`}
            >
              <Stack direction="row" spacing={0.5}>
                <Box
                  data-testid={`message-row-name-details-${
                    props.name
                      ? props.name.replace(/\s+/g, '-').toLowerCase()
                      : props.channelId
                  }-ds`}
                  className="interSemibold13"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    wordBreak: 'break-word'
                  }}
                >
                  {props.name}
                  {props.tipAmount && props.userType === 'creator' ? (
                    <>&nbsp;&nbsp;${props.tipAmount}</>
                  ) : (
                    <></>
                  )}
                  {props.userType === 'fan' && (
                    <CreatorBadge height={15} width={15} />
                  )}
                </Box>
                {props.userSubscribed && <Subscriber />}
              </Stack>
            </Box>
            <Typography className="interMedium12" sx={{ whiteSpace: 'nowrap' }}>
              {props.time}
            </Typography>
          </Box>
          <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'space-between'}
          >
            <Box
              data-testid={`message-row-message-contents-ds`}
              className="interRegular13 text-truncate"
              display={'flex'}
              gap={0.7}
              alignItems={'center'}
              width={'calc(100% - 50px)'}
            >
              {props.isBlocked && props.userType === 'creator' ? (
                <>{text.youBlockedThisUserText}</>
              ) : (
                <>
                  {props.message &&
                    props.lastSeen &&
                    (showCheckMark() ? (
                      <DoneAll fontSize="inherit" />
                    ) : (
                      <Done fontSize="inherit" />
                    ))}
                  <Box
                    className="text-truncate"
                    display={'inline'}
                    width={'calc(100% - 10px)'}
                    sx={{
                      wordBreak: 'break-word',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {props.lastMessageSenderIsUser ? `${text.youText}: ` : ''}
                    {props.message}
                  </Box>
                </>
              )}
            </Box>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Box>
                {props.isOnline && <OnlineChip />}
                {!props.isOnline && props.lastSeenAt && (
                  <Chip
                    textTransform={true}
                    label={`${text.seenText} ${props.lastSeenAt}`}
                    variant={'light'}
                    isSmall={true}
                  />
                )}
              </Box>
              {props.unread && (
                <Box pr={'5px'}>
                  <Badge variant="dot" />
                </Box>
              )}
            </Stack>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
