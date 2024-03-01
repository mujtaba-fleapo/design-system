import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { Typography } from '../../elements/Typography';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  body: string;
  locale?: string;
}

export const PostBody = ({ body, locale = defaultLocaleValue }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-body-container-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%',
          padding: '0.75rem',
          borderRadius: '0.25rem',
          backgroundColor: colors.lightgray[100],
          whiteSpace: 'break-spaces'
        }}
      >
        <Typography className="interRegular14">{body}</Typography>
      </Box>
    </ThemeProvider>
  );
};
