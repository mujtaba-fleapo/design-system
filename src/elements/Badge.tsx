import { ThemeProvider } from '@emotion/react';
import MuiBadge from '@mui/material/Badge';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '../styles/colors';
import { theme } from '../theme';

interface Props {
  children?: React.ReactNode;
  number?: number;
  variant?: 'dot' | 'standard' | 'gradient';
  sx?: SxProps<Theme>;
}

export const Badge = (props: Props) => {
  const variant =
    props.number || props.variant === 'gradient' ? 'standard' : 'dot';
  return (
    <ThemeProvider theme={theme}>
      <MuiBadge
        data-testid={`badge-${props.variant || 'standard'}-${
          props.number || 'no-number'
        }`}
        badgeContent={props.number}
        className="pulse"
        variant={variant}
        overlap="circular"
        sx={{
          '& .MuiBadge-badge': {
            color: colors.white,
            ...(props.variant === 'gradient'
              ? {
                  color: 'black',
                  border: '2px solid black',
                  width: '15px',
                  height: '15px',
                  fontSize: '7px',
                  minWidth: '2px',
                  background: `url('https://app.fanfix.io/static/images/gradient.png')`,
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }
              : {})
          },
          ...props.sx
        }}
        max={9}
      >
        {props.children}
      </MuiBadge>
    </ThemeProvider>
  );
};
