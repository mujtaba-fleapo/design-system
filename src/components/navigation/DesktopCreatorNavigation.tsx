import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import {
  defaultDesktopCreatorNavigationText,
  defaultDesktopCreatorNavigationTextProps
} from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { Logo } from '../../elements/Logo';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Cards, Live, Messageblast } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { DesktopCreatorMenu } from './DesktopCreatorMenu';

export interface NavigationItem {
  title: string;
  path: string;
}

export interface DesktopCreatorNavigationProps {
  onRouteChange: (path: string) => any;
  onNewPost: () => any;
  onMessageBlast: () => any;
  onLiveStream: () => any;
  onNotificationsClick: () => any;
  onAvatarClick: () => any;
  onClickLogo?: () => void;
  NavigationItems: NavigationItem[];
  name: string;
  imageURL?: string | null;
  isOnline?: boolean;
  notificationCount: number;
  messagesCount: number;
  activePath?: string;
  locale?: string;
  text?: defaultDesktopCreatorNavigationTextProps;
}

export const DesktopCreatorNavigation = ({
  onRouteChange,
  onNewPost,
  onMessageBlast,
  onLiveStream,
  onNotificationsClick,
  onAvatarClick,
  NavigationItems,
  name,
  imageURL,
  messagesCount,
  notificationCount,
  activePath,
  onClickLogo,
  isOnline,
  locale = defaultLocaleValue,
  text = defaultDesktopCreatorNavigationText
}: DesktopCreatorNavigationProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Stack
        data-testid={`desktop-creator-navigation-container-ds`}
        dir={getLocaleDirection(locale)}
        position={'fixed'}
        width={'100%'}
        alignItems={'center'}
        zIndex={1000}
        bgcolor={'#fff'}
        p={'0 16px'}
      >
        <Box width={'100%'} maxWidth={'1180px'}>
          <Stack
            data-testid={`creator-nav-top-container-ds`}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems={'center'}
            sx={{ height: '48px' }}
          >
            <Box>
              <Logo size={130.576} onClick={onClickLogo} />
            </Box>

            <Stack
              data-testid={`creator-nav-top-right-container-ds`}
              direction={'row'}
              alignItems={'center'}
              sx={{ color: colors.black }}
              gap={'20px'}
            >
              {/* <Box
                data-testid={`creator-notifcation-bell-ds`}
                sx={{ cursor: 'pointer' }}
                onClick={onNotificationsClick}
              >
                <Badge number={notificationCount}>
                  <Notification size="24px" />
                </Badge>
              </Box> */}

              <Box
                data-testid={`creator-avatar-name-container-ds`}
                sx={{ cursor: 'pointer' }}
                onClick={onAvatarClick}
              >
                <Stack direction={'row'} alignItems={'center'} gap={'8px'}>
                  <Avatar
                    size={28}
                    src={imageURL}
                    isOnline={isOnline}
                    alt="NavigationProfile"
                  />
                  <Typography className="interSemibold14">{name}</Typography>
                </Stack>
              </Box>
            </Stack>
          </Stack>

          <Divider />

          <Box>
            <Stack
              direction={'row'}
              justifyContent={'space-between'}
              height={'65px'}
              alignItems={'center'}
            >
              <DesktopCreatorMenu
                activePath={activePath}
                NavigationItems={NavigationItems}
                messagesCount={messagesCount}
                onRouteChange={onRouteChange}
              />

              <Stack direction={'row'} gap={{ xs: '4px', lg: '8px' }}>
                <PillButton
                  size="small"
                  onClick={onNewPost}
                  text={text.newPostText}
                  icon={<Cards />}
                />
                <PillButton
                  size="small"
                  onClick={onMessageBlast}
                  text={text.messageBlastText}
                  icon={<Messageblast />}
                />
                <PillButton
                  size="small"
                  onClick={onLiveStream}
                  text={text.liveStreamText}
                  icon={<Live />}
                />
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </ThemeProvider>
  );
};
