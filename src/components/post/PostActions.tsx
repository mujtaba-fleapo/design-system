import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import MuiCheckbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import {
  defaultPostActionsText,
  defaultPostActionsTextProps
} from '../../default-text';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import {
  Circlemoney,
  Comment,
  Heart,
  Heartfilled,
  Message
} from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';

interface Props {
  numLikes: number;
  numComments: number;
  isLiked?: boolean;
  onLikeClick?: (e: boolean) => void;
  onCommentClick?: () => void;
  onTipClick?: () => void;
  onMessageClick?: () => void;
  showComments?: boolean;
  transactionDisabled?: boolean;
  locale?: string;
  text?: defaultPostActionsTextProps;
  unlockRevenue?: string;
  isCreator?: boolean;
}

export const PostActions: React.FC<Props> = ({
  unlockRevenue,
  locale = defaultLocaleValue,
  text = defaultPostActionsText,
  isCreator = false,
  ...props
}: Props) => {
  const [isLikeButtonClicked, setIsLikeButtonClicked] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-actions-container-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingInline: { xs: '16px', md: '0px' }
        }}
      >
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'flex-start',
            gap: '0.75rem'
          }}
        >
          <Box
            data-testid={`post-actions-box-1-ds`}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              color: 'primary.main'
            }}
          >
            <MuiCheckbox
              data-testid={`post-action-likes-${props.isLiked ? 'liked' : 'not-liked'
                }-ds`}
              checked={props.isLiked}
              onChange={(e) => {
                setIsLikeButtonClicked(true);
                props.onLikeClick?.(e.target.checked);
              }}
              icon={<Heart />}
              checkedIcon={<Heartfilled />}
              sx={{
                padding: '0',
                '& .MuiSvgIcon-root': {
                  color: 'black',
                  width: '1.25rem',
                  height: '1.25rem'
                },
                color: 'black',
                '&:hover': {
                  background: 'transparent',
                  '& .MuiSvgIcon-root': {
                    color: 'black'
                  }
                },
                '&.Mui-checked': {
                  '& .MuiSvgIcon-root': {
                    animation: isLikeButtonClicked ? 'pulse 0.2s linear' : 'none'
                  }
                }
              }}
            />
            <Typography className="interMedium12" sx={{ fontSize: '0.75rem' }}>
              {props.numLikes}
            </Typography>
          </Box>

          {props.showComments && (
            <Box
              data-testid={`post-action-comments-container-ds`}
              display="flex"
              alignItems="center"
              gap="0.25rem"
              mr="0.75rem"
            >
              <MuiCheckbox
                data-testid={`post-action-comments-button-ds`}
                checked={true}
                icon={<Comment />}
                checkedIcon={<Comment />}
                onClick={props.onCommentClick}
                sx={{
                  padding: '0',
                  '& .MuiSvgIcon-root': {
                    color: 'black',
                    width: '1.25rem',
                    height: '1.25rem'
                  },
                  color: 'black',
                  '&:hover': {
                    background: 'transparent',
                    '& .MuiSvgIcon-root': {
                      color: 'black'
                    }
                  }
                }}
              />
              <Typography
                className="interMedium12"
                sx={{ fontSize: '0.75rem' }}
              >
                {props.numComments}
              </Typography>
            </Box>
          )}
        </Box>
        <Box
          data-testid={`post-actions-box-3-ds`}
          display="inline-flex"
          alignItems="flex-start"
          gap="0.75rem"
        >
          {isCreator ? (
            <Stack direction={'row'} alignItems={'center'} spacing={1}>
              <Circlemoney size={'20px'} />
              <Typography className="interSemibold10">
                Revenue: {unlockRevenue ?? '$0.00'}
              </Typography>
            </Stack>
          ) : (
            <>
              <PillButton
                data-testid={`post-actions-pill-button-message-ds`}
                text={text.messageText}
                size="small"
                variant="secondary"
                icon={<Message />}
                onClick={props.onMessageClick}
              />
              <PillButton
                data-testid={`post-actions-circle-money-ds`}
                text={text.tipText}
                size="small"
                variant="secondary"
                icon={<Circlemoney />}
                onClick={props.onTipClick}
                disabled={props.transactionDisabled}
              />
            </>
          )}
        </Box>
      </Box>
    </ThemeProvider>
  );
};
