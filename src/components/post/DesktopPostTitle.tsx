import { ThemeProvider } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Toolbar from '@mui/material/Toolbar';
import { Avatar } from '../../elements/Avatar';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  firstName: string;
  lastName: string;
  locale?: string;
}

export const DesktopPostTitle = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`desktop-post-title-box-ds`}
        dir={getLocaleDirection(locale)}
        sx={{ flexGrow: 1, borderRadius: '50%' }}
      >
        <AppBar position="static" sx={{ backgroundColor: 'white' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2, color: colors.black }}
            >
              <ListItemIcon>
                <Avatar
                  src="https://yhstars.com/wp-content/uploads/2020/11/Aisha-Mian.jpg"
                  alt="profile"
                />
              </ListItemIcon>
              <Typography sx={{ fontWeight: 'Bold', flexGrow: 1 }}>
                {props.firstName} {props.lastName}
              </Typography>
            </IconButton>

            <IconButton
              size="large"
              edge="end"
              aria-label="more"
              sx={{ padding: '3px', color: colors.black }}
            >
              {' '}
              <Horizontaldots size="24px" />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
};
