import Done from '@mui/icons-material/Done';
import DoneAll from '@mui/icons-material/DoneAll';
import MuiBox from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MuiTypography from '@mui/material/Typography';

import { styled } from '@mui/material/styles';
import Autolinker from 'autolinker';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { defaultMessageThreadText } from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { MessageDto } from '../../gql/generated/graphql';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { CircularLoader } from '../loading/CircularLoader';
import DisplayMedia from './DisplayMedia';
import ExpireLockSvg from './ExpireLockSvg';
import { formatExpiryString } from './helpers';

const Box = styled(MuiBox)({
  '&.mediaWrapper': {
    overflow: 'hidden',
    borderRadius: '8px',
    maxHeight: '400px'
  },
  '&.messageBody': {
    width: '100%',
    maxWidth: '400px'
  },
  // '&.other-message': {
  //   backgroundImage: 'linear-gradient(90deg, #f1ebfa, #fcf1ee)'
  // },
  '&.messageContent': {
    backgroundColor: colors.lightgray[100],
    wordBreak: 'break-word',
    padding: '12px',
    borderRadius: '8px',
    position: 'relative'
  },
  '&.mymessage': {
    marginBottom: { xs: '16', md: '20px' },
    '& .message-wrapper': {
      justifyContent: 'flex-end',
      '& .messageContent': {
        backgroundColor: colors.lightgray[300]
      },
      '& .messageBody': {
        marginLeft: 'auto'
      }
    }
  },
  '& .autoLink': {
    fontWeight: 'bolder',
    color: 'black',
    textDecoration: 'underline'
  },
  '& .expired': {
    fontWeight: 'light',
    color: 'gray',
    fontStyle: 'italic'
  }
});

const MessageParagraph = styled(MuiTypography)({
  fontSize: '14px',
  fontWeight: '400',
  letterSpacing: '-.21px',
  whiteSpace: 'break-spaces'
});

interface Props {
  user: {
    id: string;
    type: 'fan' | 'creator';
    avatarUrl: string;
    showWatermark: boolean;
    watermark: string;
  };
  msgLoading: boolean;
  messagesThread: {
    messages: MessageDto[];
    timestamp: string;
  }[];
  hasMoreMessages: boolean;
  loadMoreMsgs: () => void;
  userAvatar: string;
  lastSeen: string;
  isOnline: boolean;
  tempAudioUrl: string | null;
  setTempAudioUrl: (url: string | null) => void;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  setMediaViewerData: (data: any) => void;
  setInitialSlide: (slide: number) => void;
  setIsImageModalOpen: (open: boolean) => void;
  setUnlockModalOpen?: (value: boolean) => void;
  setSelectedMessageToUnlock?: (message: MessageDto) => void;
}

export const MessageThread = ({
  user,
  msgLoading,
  hasMoreMessages,
  messagesThread,
  loadMoreMsgs,
  userAvatar,
  lastSeen,
  isOnline,
  tempAudioUrl,
  setTempAudioUrl,
  isPlaying,
  currentTime,
  duration,
  setUnlockModalOpen,
  setSelectedMessageToUnlock,
  setMediaViewerData,
  setInitialSlide,
  setIsImageModalOpen
}: Props) => {
  const clonedMessageThread = _.cloneDeep(messagesThread);
  const messages = clonedMessageThread.reverse();
  const [isRefetching, setIsRefetching] = useState(false);
  const { id: userId, type: userType, avatarUrl } = user;

  const MessageExpiry = ({ expiresAt }: { expiresAt: string }) => {
    const [msgExpiryDate, setMsgExpiryDate] = useState<string>(expiresAt);
    const [msgExpiryDateString, setMsgExpiryDateString] = useState<string>(
      formatExpiryString(expiresAt) as string
    );

    const decrementExpiryDateByOneSecond = (dateString: string) => {
      const date = new Date(dateString);
      date.setSeconds(date.getSeconds() - 1);
      const expiry = date.toISOString();
      const expiryString = formatExpiryString(expiry);
      return {
        expiry,
        expiryString
      };
    };

    useEffect(() => {
      if (msgExpiryDate) {
        const interval = setInterval(() => {
          const { expiry, expiryString } =
            decrementExpiryDateByOneSecond(msgExpiryDate);
          setMsgExpiryDate(expiry);
          setMsgExpiryDateString(expiryString as string);
        }, 1000);
        return () => clearInterval(interval);
      }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return (
      <Typography className="interBold12">{msgExpiryDateString}</Typography>
    );
  };

  return (
    <List
      data-testid={`message-thread-list-ds`}
      sx={{
        height: '100%',
        overflowY: 'scroll',
        display: 'flex',
        flexDirection: 'column-reverse'
      }}
      id="message-thread-list"
      dir={getLocaleDirection(defaultLocaleValue)}
    >
      <InfiniteScroll
        style={{
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column-reverse'
        }}
        hasMore={hasMoreMessages}
        inverse={true}
        scrollThreshold={'400px'}
        dataLength={messages.reduce(
          (acc, curr) => acc + curr.messages.length,
          0
        )}
        scrollableTarget={'message-thread-list'}
        next={() => {
          setIsRefetching(true);
          loadMoreMsgs();
        }}
        loader={isRefetching && <CircularLoader />}
        initialScrollY={500}
      >
        {messages?.map((days, index) => {
          const daysMessages = days.messages;
          return (
            <ListItem
              data-testid={`message-thread-list-item-${index}-ds`}
              key={`list-item-${index}`}
            >
              <Box width={'100%'}>
                <Box
                  data-testid={`message-thread-timestamp-${index}-ds`}
                  textAlign={'center'}
                  mb={'20px'}
                >
                  <Typography className="interSemibold12">
                    {days.timestamp}
                  </Typography>
                </Box>
                <Box>
                  {daysMessages.map((message, index) => {
                    const messageFromMe = message.senderUserId === userId;

                    const photo = messageFromMe ? avatarUrl : userAvatar;

                    const messageMedia = message.assets;
                    const messageCostInCents = message.unlockPriceInCents;
                    const messageCost = (messageCostInCents ?? 0) / 100;
                    const paidMedia = (messageCostInCents ?? 0) / 100 > 0;
                    const purchased = Boolean(message.paymentAmount);

                    const msgMediaPurchased = Boolean(
                      messageMedia && paidMedia && purchased
                    );

                    const hasMsgExpired =
                      message.expiresAt &&
                      formatExpiryString(message.expiresAt) === 'Expired'
                        ? true
                        : false;

                    const lockExpiredMsg =
                      hasMsgExpired && !msgMediaPurchased && userType === 'fan';

                    const timeFormatter = new Intl.DateTimeFormat('en', {
                      hour12: true,
                      hour: 'numeric',
                      minute: '2-digit'
                    });

                    const timeString = timeFormatter
                      .format(new Date(message.createdAt))
                      .toLowerCase();

                    const showCheckMark = (
                      messageCreatedAt: string
                    ): boolean => {
                      const date1 = new Date(lastSeen!);
                      const date2 = new Date(messageCreatedAt!);
                      if (date1 > date2) return true;
                      return false;
                    };

                    return (
                      <Box
                        key={`message-${message.id}`}
                        data-testid={`${
                          messageFromMe ? 'my-message' : 'other-message'
                        }-thread-box-${index}-ds`}
                        mt={3}
                        mb={3}
                        className={messageFromMe ? 'mymessage' : 'othermessage'}
                      >
                        <Box
                          data-testid={`message-thread-wrapper-ds`}
                          className="message-wrapper"
                          display={'flex'}
                          alignItems={'flex-end'}
                          gap={1}
                        >
                          <Box
                            data-testid={`message-sender-avatar-${
                              messageFromMe ? 'my-message' : 'other-message'
                            }-ds`}
                            order={messageFromMe ? 1 : 0}
                          >
                            <Avatar
                              size={28}
                              src={photo}
                              isOnline={messageFromMe ? true : isOnline}
                            />
                          </Box>
                          <Box width={'100%'}>
                            <Box
                              data-testid={`message-thread-body-ds`}
                              className="messageBody"
                            >
                              {messageMedia && messageMedia.length > 0 && (
                                <>
                                  {lockExpiredMsg ? (
                                    <ExpireLockSvg />
                                  ) : (
                                    <DisplayMedia
                                      user={user}
                                      message={message}
                                      media={messageMedia}
                                      paidMedia={paidMedia}
                                      purchased={purchased}
                                      currentTime={currentTime}
                                      duration={duration}
                                      isPlaying={isPlaying}
                                      setTempAudioUrl={setTempAudioUrl}
                                      tempAudioUrl={tempAudioUrl}
                                      messageCost={messageCost}
                                      setUnlockModalOpen={setUnlockModalOpen}
                                      setSelectedMessageToUnlock={
                                        setSelectedMessageToUnlock
                                      }
                                      setMediaViewerData={setMediaViewerData}
                                      setInitialSlide={setInitialSlide}
                                      setIsImageModalOpen={setIsImageModalOpen}
                                      msgMediaPurchased={msgMediaPurchased}
                                    />
                                  )}
                                </>
                              )}
                              {message.content && (
                                <Box
                                  data-testid={`message-thread-content-ds`}
                                  className={`messageContent ${
                                    !messageFromMe && 'other-message'
                                  } ${lockExpiredMsg ? 'expired' : ''}`}
                                  mt={'4px'}
                                  p={'17px 12px!important'}
                                >
                                  <MessageParagraph
                                    data-testid={`message-thread-content-ds`}
                                    dangerouslySetInnerHTML={{
                                      __html: Autolinker.link(
                                        lockExpiredMsg
                                          ? (defaultMessageThreadText.messageExpiredText as string)
                                          : message.content,
                                        {
                                          className: 'autoLink'
                                        }
                                      )
                                    }}
                                  />
                                  <Box
                                    sx={{
                                      position: 'absolute',
                                      right: '6px',
                                      bottom: '2px',
                                      display: 'flex',
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      gap: 0.7
                                    }}
                                  >
                                    <Typography
                                      sx={{
                                        fontSize: '11px',
                                        color: '#667781'
                                      }}
                                    >
                                      {timeString}
                                    </Typography>

                                    {messageFromMe &&
                                      userType === 'creator' && //remove to enable both fan and creator to see checkmark
                                      (showCheckMark(message.createdAt) ? (
                                        <DoneAll
                                          sx={{
                                            fontSize: '15px',
                                            color: '#667781'
                                          }}
                                        />
                                      ) : (
                                        <Done
                                          sx={{
                                            fontSize: '15px',
                                            color: '#667781'
                                          }}
                                        />
                                      ))}
                                  </Box>
                                </Box>
                              )}
                              {message.expiresAt && !msgMediaPurchased && (
                                <Box
                                  mt={'4px'}
                                  width={'100%'}
                                  textAlign={
                                    userType === 'creator' && messageFromMe
                                      ? 'right'
                                      : 'left'
                                  }
                                >
                                  <MessageExpiry
                                    expiresAt={message.expiresAt}
                                  />
                                </Box>
                              )}
                            </Box>
                            {userType === 'creator' && !messageFromMe && (
                              <Typography
                                sx={{ lineHeight: 1, mt: '4px' }}
                                className="interMedium12"
                              >
                                ${messageCost}
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
              </Box>
            </ListItem>
          );
        })}
      </InfiniteScroll>
      {messages.length === 0 && (
        <Box
          data-testid={`message-thread-no-messages-or-loading-box-ms`}
          className="interSemibold12"
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          height={'100%'}
        >
          {msgLoading ? (
            <CircularLoader />
          ) : (
            defaultMessageThreadText.noMessagesText
          )}
        </Box>
      )}
    </List>
  );
};
