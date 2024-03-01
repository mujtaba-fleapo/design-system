import { ThemeProvider } from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import { useState } from 'react';
import { Typography } from '../../elements/Typography';
import { Horizontaldots, LeftArrow } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';

interface Props {
  options?: {
    label: string;
    key: string;
    onClick?: () => void;
  }[];
  title: string;
  backArrow?: boolean;
  onBackClick?: () => void;
  onOptionsClick?: (key: string) => unknown;
  lastItemIsAlert?: boolean;
  locale?: string;
}

export const DesktopPageTitle = ({
  options,
  title,
  backArrow,
  onBackClick,
  onOptionsClick,
  lastItemIsAlert,
  locale = defaultLocaleValue
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);
  return (
    <ThemeProvider theme={theme}>
      <AppBar
        dir={getLocaleDirection(locale)}
        position="static"
        sx={{
          width: '100%',
          background: colors.white,
          boxShadow: 'unset',
          padding: '12px 0',
          display: { xs: 'none', md: 'block' }
        }}
      >
        <Toolbar
          sx={{
            paddingLeft: '0 !important',
            paddingRight: '0 !important'
          }}
        >
          <Stack
            spacing={2}
            direction={'row'}
            justifyContent={'space-between'}
            sx={{ width: '100%' }}
          >
            <Stack
              data-testid={`desktop-page-title-stack-ds`}
              flexDirection={'row'}
              gap={'10px'}
              alignItems={'center'}
            >
              {backArrow && (
                <IconButton
                  data-testid={`desktop-page-title-back-click-ds`}
                  size="large"
                  edge="start"
                  aria-label="menu"
                  onClick={onBackClick}
                  sx={{
                    color: colors.black,
                    padding: '0px',
                    display: 'contents'
                  }}
                >
                  <LeftArrow size="24px" />
                </IconButton>
              )}
              <Typography
                className="interSemibold20"
                sx={{ color: colors.black }}
              >
                {title}
              </Typography>
            </Stack>
            {options && (
              <IconButton
                data-testid={`desktop-page-title-option-click-ds`}
                onClick={(event: any) => setAnchorEl(event.currentTarget)}
                size="large"
                edge="end"
                aria-label="more"
                sx={{
                  color: colors.black,
                  padding: '0px'
                }}
              >
                <Horizontaldots size="24px" />
              </IconButton>
            )}
            {options !== undefined && options?.length > 0 && (
              <ContextMenu
                data-testid={`desktop-page-title-context-menu-ds`}
                options={options ?? []}
                open={open}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                onClick={(e: string) => onOptionsClick?.(e)}
                lastItemIsAlert={lastItemIsAlert}
              />
            )}
          </Stack>
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  );
};
