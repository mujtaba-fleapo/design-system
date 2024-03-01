import { ThemeProvider } from '@emotion/react';
import MuiChip from '@mui/material/Chip';
import { defaultLocaleValue, getLocaleDirection } from '../helpers/getLocale';
import { colors } from '../styles/colors';
import { theme } from '../theme';
import { Typography } from './Typography';

interface Props {
  label: string;
  onClick?: () => void;
  variant: 'light' | 'dark' | 'black';
  textTransform?: boolean;
  isSmall?: boolean;
  locale?: string;
}

export const Chip = ({ locale = defaultLocaleValue, ...props }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiChip
        data-testid={`chip-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          borderRadius: props.isSmall ? '12px' : '4px',
          cursor: 'pointer',
          backgroundColor:
            props.variant === 'light'
              ? colors.lightgray[200]
              : props.variant === 'dark'
                ? 'rgba(0, 0, 0, 0.30)'
                : colors.black,
          color: props.variant === 'light' ? colors.black : colors.white,
          textTransform: !props.textTransform ? 'uppercase' : 'none'
        }}
        size={props.isSmall ? 'small' : undefined}
        className="interBold10"
        onClick={props.onClick}
        label={
          <Typography
            className={props.isSmall ? 'interMedium10' : 'interBold12'}
          >
            {props.label}
          </Typography>
        }
      />
    </ThemeProvider>
  );
};
