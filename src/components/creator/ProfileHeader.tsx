import { ThemeProvider } from '@emotion/react';
import { styled } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';

import {
  defaultProfileHeaderText,
  defaultProfileHeaderTextProps
} from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { Chip } from '../../elements/Chip';
import { CreatorBadge } from '../../elements/CreatorBadge';
import { OnlineChip } from '../../elements/OnlineChip';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Cards, Lock, Message, Subscription } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

const Wrapper = styled(Box)`
  .desktop-profile-header {
    .card-content {
      padding: 0 !important;
      z-index: 1;

      &:last-child {
        padding: 0 !important;
      }
    }
  }
`;

export interface ProfileHeaderProps {
  bioText: string;
  firstName: string;
  lastName: string;
  userName: string;
  profilePic: string;
  totalPosts: number;
  exclusivePostCount?: number;
  onMessage: () => unknown;
  onTip?: () => unknown;
  onSubscribe?: () => unknown;
  isSubscribed?: boolean;
  transactionDisabled?: boolean;
  onOptionsClick?: () => unknown;
  backgroundImage?: string;
  tipjarOptions?: { id: string; tipAmount: number; tipFor: string; }[];
  onTipJarClick?: (id: string) => unknown;
  subPrice: string | number;
  onAvatarClick?: (value: string) => unknown;
  onBannerClick?: (value: string) => unknown;
  isOnline?: boolean;
  text?: defaultProfileHeaderTextProps;
  lastSeenAt?: string;
  locale?: string;
}

export const ProfileHeader = ({
  profilePic,
  firstName,
  lastName,
  userName,
  bioText,
  onMessage,
  onTip,
  onSubscribe,
  totalPosts,
  exclusivePostCount,
  isSubscribed,
  onOptionsClick,
  backgroundImage,
  tipjarOptions,
  onTipJarClick,
  transactionDisabled,
  subPrice,
  onAvatarClick,
  onBannerClick,
  isOnline,
  text = defaultProfileHeaderText,
  lastSeenAt,
  locale = defaultLocaleValue
}: ProfileHeaderProps) => {
  const boxShadow =
    '0px 5px 15px 0px rgba(48, 16, 60, 0.10), 0px 14px 28px 0px rgba(47, 19, 77, 0.12)';
  const backgroundGradient =
    'linear-gradient(90deg, rgba(235,252,251,1) 0%, rgba(247,236,250,1) 35%, rgba(255,254,239,1) 100%)';

  return (
    <ThemeProvider theme={theme}>
      <Wrapper dir={getLocaleDirection(locale)}>
        <Stack
          data-testid={`profile-header-container-stack-ds`}
          spacing={1}
          position={'relative'}
        >
          {/* text header */}
          <Stack data-testid={`profile-header-names-stack-ds`}>
            <Stack
              data-testid={`creator-fullname-stack-ds`}
              spacing={1}
              direction="row"
              alignItems={'center'}
            >
              <Typography className="interSemibold24">
                {firstName} {lastName}
              </Typography>
              <CreatorBadge />
            </Stack>
            <Stack direction={'row'} spacing={1} alignItems={'center'}>
              <Typography
                className="interRegular16"
                sx={{ color: colors.darkgray['100'] }}
              >
                @{userName}
              </Typography>
              <Box display={{ xs: 'none', md: 'block' }}>
                {isOnline && <OnlineChip label={text.onlineNowText} />}
                {!isOnline && lastSeenAt && (
                  <Chip
                    textTransform={true}
                    label={`${text.lastSeenText} ${lastSeenAt}`}
                    variant={'light'}
                    isSmall={true}
                  />
                )}
              </Box>
            </Stack>
          </Stack>
          <Box
            data-testid={`profile-header-avatar-box-ds`}
            onClick={(e) => {
              e.stopPropagation();
              onAvatarClick?.('avatar');
            }}
            position="absolute"
            right={25}
            top={25}
            sx={{
              borderRadius: 10,
              border: 'solid 4px white',
              zIndex: 2,
              cursor: 'pointer'
            }}
          >
            <Avatar
              src={profilePic}
              size={{ xs: 96, md: 96 }}
              alt={'Profile Picture'}
              key={'Profile Picture'}
              badgeSize={15}
            />
          </Box>
          <Stack position={'relative'}>
            <Card
              onClick={(e) => onBannerClick?.('banner')}
              data-testid={`profile-header-card-1-ds`}
              sx={{
                position: 'relative',
                borderRadius: '20px',
                height: 200,
                cursor: 'pointer'
              }}
              className="desktop-profile-header"
            >
              <CardMedia
                data-testid={`profile-header-card-media-ds`}
                image={
                  backgroundImage
                    ? backgroundImage
                    : 'https://app.fanfix.io/static/images/default-cover.png'
                }
                component="img"
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px'
                }}
              />
              <CardContent
                data-testid={`profile-header-card-content-1-ds`}
                className="card-content"
                sx={{
                  height: '100%',
                  position: 'relative',
                  p: 0
                }}
              >
                <Stack
                  data-testid={`profile-header-posts-data-ds`}
                  direction={'row'}
                  position={'absolute'}
                  bottom={{ xs: 85, sd: 40 }}
                  left={16}
                  spacing={1}
                  alignItems={'center'}
                  color={backgroundImage ? 'white' : 'black'}
                >
                  <Stack direction={'row'} spacing={1} alignItems={'center'}>
                    <Cards size={'16px'} />
                    <Typography className="interMedium12">
                      {totalPosts}
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      width: 1,
                      height: 16,
                      color: 'black',
                      borderLeft: `1px solid rgba(0, 0, 0, 0.20)`
                    }}
                  ></Box>
                  <Stack spacing={1} direction={'row'} alignItems={'center'}>
                    <Lock size={'16px'} />
                    <Typography className="interMedium12">
                      {exclusivePostCount}
                    </Typography>
                  </Stack>
                </Stack>
              </CardContent>
            </Card>
            <Stack
              direction="row"
              width={'100%'}
              gap={'10px'}
              position="absolute"
              justifyContent={'space-between'}
              alignItems={'center'}
              bottom={-15}
              paddingInline={'10px'}
              flexWrap={'wrap'}
              sx={{ cursor: 'pointer', zIndex: 1 }}
            >
              <Stack
                data-testid={`profile-header-subscribe-stack-ds`}
                direction="row"
              >
                {!isSubscribed && (
                  <PillButton
                    sx={{
                      color: 'black',
                      boxShadow: boxShadow,
                      background: backgroundGradient
                    }}
                    onClick={() => onSubscribe?.()}
                    text={
                      <>
                        {text.subscribeText}&nbsp;
                        {subPrice ? (
                          <>
                            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                              {text.fromText}&nbsp;
                            </Box>
                            {subPrice}/{text.moText}
                          </>
                        ) : (
                          <>{text.forFreeText}</>
                        )}
                      </>
                    }
                    variant="primary"
                    icon={<Subscription />}
                    size="medium"
                    disabled={transactionDisabled}
                  />
                )}
              </Stack>

              <Stack
                data-testid={`profile-header-interaction-stack-ds`}
                direction="row"
              >
                <PillButton
                  sx={{
                    color: 'black',
                    boxShadow: boxShadow,
                    background: backgroundGradient
                  }}
                  onClick={() => onMessage()}
                  text={text.messageText}
                  variant="primary"
                  icon={<Message />}
                  size="medium"
                  disabled={transactionDisabled}
                />
              </Stack>
            </Stack>
          </Stack>
          <Card
            data-testid={`profile-header-card-bio-ds`}
            sx={{
              background: 'transparent',
              boxShadow: 'unset',
              borderRadius: 0,
              padding: 0
            }}
          >
            <CardContent
              data-testid={`profile-header-card-content-bio-ds`}
              sx={{ padding: 0 }}
            >
              <Typography
                className="interRegular14"
                sx={{ marginTop: '20px', whiteSpace: 'break-spaces' }}
              >
                {bioText}
              </Typography>
            </CardContent>
            <hr
              style={{
                border: 'none',
                height: '1px',
                backgroundColor: colors.lightgray[500],
                margin: '25px 0'
              }}
            />
          </Card>
        </Stack>
      </Wrapper>
    </ThemeProvider>
  );
};
