import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import { ReactElement, useState } from 'react';
import {
  defaultMobileHeaderText,
  defaultMobileHeaderTextProps
} from '../../default-text';
import { Badge } from '../../elements/Badge';
import { Chip } from '../../elements/Chip';
import { Logo } from '../../elements/Logo';
import { OnlineChip } from '../../elements/OnlineChip';
import { Typography } from '../../elements/Typography';
import { Horizontaldots, LeftArrow, Notification } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { ContextMenu } from './ContextMenu';

interface MobileHeaderProps {
  notificationCount?: number;
  onNotificationsClick?: () => unknown;
  state?: string;
  variant?: 'white' | 'reverse';
  title?: ReactElement | string;
  onBackClick?: () => unknown;
  options?: {
    label: string;
    key: string;
  }[];
  onMenuItemClick?: (e: string) => unknown;
  lastItemIsAlert?: boolean;
  locale?: string;
  isOnline?: boolean;
  lastSeenAt?: string;
  text?: defaultMobileHeaderTextProps;
}

export const MobileHeader = ({
  notificationCount = 0,
  state,
  variant,
  title,
  onNotificationsClick,
  onBackClick,
  options,
  onMenuItemClick,
  lastItemIsAlert,
  locale = defaultLocaleValue,
  isOnline,
  lastSeenAt,
  text = defaultMobileHeaderText
}: MobileHeaderProps) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const Home = () => {
    return (
      <Stack
        data-testid={`mobile-header-stack-ds`}
        dir={getLocaleDirection(locale)}
        direction={'row'}
        width={'100%'}
        bgcolor={colors.white}
        height={'64px'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <Logo size={130.576} />
        {onNotificationsClick && (
          <Box
            data-testid={`mobile-header-notification-box-ds`}
            sx={{ cursor: 'pointer' }}
            onClick={onNotificationsClick}
            display={'none'} // remove to show notifications
          >
            <Badge number={notificationCount}>
              <Notification size="24px" />
            </Badge>
          </Box>
        )}
      </Stack>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Box>
        {state === 'home' ? (
          <Home />
        ) : (
          <Stack
            direction={'row'}
            dir={getLocaleDirection(locale)}
            spacing={options ? 0 : 12}
            width={'100%'}
            bgcolor={variant === 'white' ? colors.white : 'transparent'}
            color={variant === 'white' ? colors.black : colors.white}
            height={'64px'}
            justifyContent={'space-between'}
            alignItems={'center'}
          >
            <Box width="40px">
              {onBackClick && (
                <IconButton onClick={() => onBackClick()} sx={{ p: '6px' }}>
                  <LeftArrow
                    color={variant === 'white' ? '#000' : '#fff'}
                    size="24px"
                  />
                </IconButton>
              )}
            </Box>
            <Stack
              direction={'column'}
              alignItems={'center'}
              margin="0!important"
            >
              <Typography
                sx={{ margin: '0!important' }}
                className="interSemibold16"
              >
                {title}
              </Typography>
              {isOnline && <OnlineChip label={text.onlineNowText} />}
              {!isOnline && lastSeenAt && (
                <Chip
                  textTransform={true}
                  label={`${text.lastSeenText} ${lastSeenAt}`}
                  variant={'light'}
                  isSmall={true}
                />
              )}
            </Stack>

            <Box width="40px" margin="0!important">
              {options && (
                <IconButton sx={{ p: '6px' }}>
                  <Horizontaldots
                    color={variant === 'white' ? '#000' : '#fff'}
                    size="24px"
                  />
                </IconButton>
              )}
            </Box>
          </Stack>
        )}
      </Box>
      <ContextMenu
        data-testid={`mobile-header-context-menu-ds`}
        options={options ?? []}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => onMenuItemClick?.(e)}
        lastItemIsAlert={lastItemIsAlert}
        locale={locale}
      />
    </ThemeProvider>
  );
};
