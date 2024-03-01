import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { Typography } from '../../elements/Typography';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';

interface Props {
  caption: string;
  locale?: string;
}

export const PostCaption = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`post-caption-container-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          paddingInline: { xs: '16px', md: '0px' },
          mb: '0.75rem'
        }}
      >
        <Typography className="interRegular14">{props.caption}</Typography>
      </Box>
    </ThemeProvider>
  );
};
