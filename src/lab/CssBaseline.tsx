import { ThemeProvider } from '@emotion/react';
import MuiCssBaseline from '@mui/material/CssBaseline';
import { theme } from '../theme';

export const CssBaseline = () => {
  return (
    <ThemeProvider theme={theme}>
      <MuiCssBaseline />
    </ThemeProvider>
  );
};
