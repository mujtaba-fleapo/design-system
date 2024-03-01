import { ThemeProvider } from '@emotion/react';
import MuiAvatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import { colors } from '../styles/colors';
import { theme } from '../theme';
interface Props {
  alt?: string;
  src?: string | 'fanfix' | null;
  size?: any | number;
  onClick?: () => void;
  isOnline?: boolean;
  badgeSize?: number;
}

export const Avatar = (props: Props) => {
  const src =
    props.src === 'fanfix'
      ? 'https://app.fanfix.io/static/images/fanfix-avatar.png'
      : props.src
        ? props.src
        : 'https://app.fanfix.io/static/images/default-avatar.png';

  return (
    <ThemeProvider theme={theme}>
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        variant="dot"
        invisible={!props.isOnline}
        sx={{
          '& .MuiBadge-badge': {
            backgroundColor: colors.darkGreen,
            color: colors.darkGreen,
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            zIndex: `auto!important`,
            '&::after': {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              animation: 'ripple 1.2s infinite ease-in-out',
              border: '1px solid currentColor',
              content: '""'
            }
          },
          '@keyframes ripple': {
            '0%': {
              transform: 'scale(.8)',
              opacity: 1
            },
            '100%': {
              transform: 'scale(1.8)',
              opacity: 0
            }
          }
        }}
      >
        <MuiAvatar
          data-testid={`avatar-ds`}
          alt={props.alt || 'Avatar'}
          src={src}
          sx={{
            width: props.size || 40,
            height: props.size || 40
          }}
          onClick={() => props.onClick?.()}
        />
      </Badge>
    </ThemeProvider>
  );
};
