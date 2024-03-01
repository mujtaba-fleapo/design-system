import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
  defaultCreatorRowText,
  defaultDesktopCreatorRowTextProps
} from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { CreatorBadge } from '../../elements/CreatorBadge';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Cards, Lock, Subscription } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';

interface CreatorRowProps {
  firstName: string;
  lastName: string;
  userName: string;
  profilePic: string;
  subPrice: number;
  publicPostCount: number;
  privatePostCount: number;
  showPillButton?: boolean;
  showFollowButton?: boolean;
  onClick?: (id?: string) => unknown;
  onSubscription?: () => unknown;
  onFollow?: () => unknown;
  isOnline?: boolean;
  text?: defaultDesktopCreatorRowTextProps;
  locale?: string;
}

export const CreatorRow = ({
  firstName,
  lastName,
  userName,
  profilePic,
  subPrice,
  publicPostCount,
  privatePostCount,
  showPillButton,
  showFollowButton,
  onClick,
  onSubscription,
  text = defaultCreatorRowText,
  locale = defaultLocaleValue,
  onFollow,
  isOnline
}: CreatorRowProps) => {
  const isMobile = useMediaQuery('(max-width:400px)');

  return (
    <ThemeProvider theme={theme}>
      <Stack
        dir={getLocaleDirection(locale)}
        data-testid={`creator-row-${userName}-ds`}
        width={'100%'}
        direction={'row'}
        justifyContent={'space-between'}
        alignItems={'center'}
        gap={'8px'}
      >
        <Stack
          data-testid={`creator-row-stack-${userName}-ds`}
          direction={'row'}
          gap={'12px'}
          alignItems={'center'}
        >
          <Box
            data-testid={`creator-row-avatar-${userName}-ds`}
            sx={{ cursor: 'pointer' }}
          >
            <Avatar
              data-testid={`creator-row-avatar-ds`}
              src={profilePic}
              size={{ xs: '60px', md: '80px' }}
              alt="profilePic"
              onClick={() => onClick?.()}
              isOnline={isOnline}
              badgeSize={13}
            />
          </Box>
          <Stack
            data-testid={`creator-row-details-${userName}-ds`}
            gap={'12px'}
          >
            <Box onClick={() => onClick?.()} sx={{ cursor: 'pointer' }}>
              <Typography
                className="interSemibold16"
                sx={{ wordBreak: 'break-word' }}
              >
                {firstName} {lastName} <CreatorBadge height={15} width={15} />
              </Typography>
              <Typography
                className="interRegular14 "
                sx={{
                  width: { xs: '120px', md: '100%' },
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  wordBreak: 'break-all'
                }}
              >
                @{userName}
              </Typography>
            </Box>

            <Stack
              data-testid={`creator-row-stack-3-ds`}
              direction={'row'}
              gap={'12px'}
            >
              <Stack direction={'row'} gap={'4px'}>
                <Cards data-testid={`creator-row-cards-ds`} />
                <Typography className="interMedium12">
                  {publicPostCount}
                </Typography>
              </Stack>
              <Stack
                data-testid={`creator-row-stack-4-ds`}
                direction={'row'}
                gap={'4px'}
              >
                <Lock data-testid={`creator-row-lock-ds`} />
                <Typography className="interMedium12">
                  {privatePostCount}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Stack>

        {showPillButton && (
          <Box data-testid={`creator-subscribe-button-${userName}-ds`}>
            <PillButton
              variant="gradient"
              size="small"
              text={text.subscribeText}
              icon={<Subscription />}
              onClick={() => onSubscription?.()}
            />
          </Box>
        )}
        {showFollowButton && (
          <Box data-testid={`creator-follow-button-${userName}-ds`}>
            <PillButton
              variant="gradient"
              size="small"
              icon={<Subscription />}
              text={isMobile ? text.followText : text.followForFreeText}
              onClick={() => onFollow?.()}
            />
          </Box>
        )}
      </Stack>
    </ThemeProvider>
  );
};
