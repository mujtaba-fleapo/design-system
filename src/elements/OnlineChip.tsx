import { ThemeProvider } from '@emotion/react';
import MuiChip from '@mui/material/Chip';
import {
  defaultOnlineChipText,
  defaultOnlineChipTextProps
} from '../default-text';
import { colors } from '../styles/colors';
import { theme } from '../theme';
import { Typography } from './Typography';

interface Props {
  label?: string;
  text?: defaultOnlineChipTextProps;
}

export const OnlineChip = ({ label, text = defaultOnlineChipText }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiChip
        data-testid={`online-chip-ds`}
        sx={{
          backgroundColor: `${colors.lightGreen} !important`,
          color: `${colors.darkGreen} !important`,
          '& .MuiChip-avatar': {
            backgroundColor: `${colors.darkGreen} !important`,
            color: `${colors.darkGreen} !important`,
            marginLeft: 1,
            width: 8,
            height: 8,
            position: 'relative',
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
          }
        }}
        size="small"
        avatar={<div style={{ borderRadius: '50%' }} />}
        label={
          <Typography className="interMedium10">
            {label ?? text.onlineText}
          </Typography>
        }
      />
    </ThemeProvider>
  );
};
