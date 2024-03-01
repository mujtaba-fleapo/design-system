import { ThemeProvider } from '@emotion/react';
import PushPinOutlined from '@mui/icons-material/PushPinOutlined';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import { Avatar } from '../../elements/Avatar';
import { CreatorBadge } from '../../elements/CreatorBadge';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';

interface Props {
  avatarSrc?: string;
  avatarSize?: number;
  onAvatarClick?: () => void;
  onOptionsClick?: (key: string) => unknown;
  posterName: string;
  options?: {
    label: string;
    key: string;
    onClick?: () => void;
  }[];
  lastItemIsAlert?: boolean;
  isPinned: boolean;
  inCreatorProfile: boolean;
  isOnline?: boolean;
  locale?: string;
}

export const PostTop = ({
  options,
  avatarSrc,
  avatarSize,
  onOptionsClick,
  posterName,
  onAvatarClick,
  lastItemIsAlert,
  isPinned,
  inCreatorProfile,
  isOnline,
  locale = defaultLocaleValue
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-top-container-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          paddingInline: { xs: '16px', md: '0px' }
        }}
      >
        <Box
          data-testid={`post-top-avatar-container-ds`}
          display="inline-flex"
          alignItems="center"
          gap="0.5rem"
          sx={{ cursor: 'pointer' }}
          onClick={onAvatarClick}
        >
          <Avatar src={avatarSrc} size={avatarSize} isOnline={isOnline} />
          <Typography className="interSemibold14">{posterName}</Typography>
          <CreatorBadge width={15} height={15} />
        </Box>
        <Box display="inline-flex" gap="0.5rem" alignItems="center">
          {inCreatorProfile && isPinned && <PushPinOutlined />}
          {options && (
            <IconButton
              data-testid={`post-top-options-button-ds`}
              onClick={(event: any) => setAnchorEl(event.currentTarget)}
              sx={{
                padding: '3px',
                color: colors.black
              }}
            >
              <Horizontaldots size="24px" />
            </IconButton>
          )}
        </Box>
        {options !== undefined && options?.length > 0 && (
          <ContextMenu
            data-testid={`single-post-context-menu-ds`}
            options={options ?? []}
            open={open}
            anchorEl={anchorEl}
            setAnchorEl={setAnchorEl}
            onClick={(e: string) => onOptionsClick?.(e)}
            lastItemIsAlert={lastItemIsAlert}
            disableMobilePanel
            locale={locale}
          />
        )}
      </Box>
    </ThemeProvider>
  );
};
