import { ThemeProvider } from '@emotion/react';
import Fab from '@mui/material/Fab';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import { MouseEvent, useState } from 'react';
import {
  defaultMobileActionMenuText,
  defaultMobileActionMenuTextProps
} from '../../default-text';
import { PillButton } from '../../elements/PillButton';
import { Cards, Close, Live, Messageblast, Plus } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';

interface Props {
  onNewPost?: () => unknown;
  onMessageBlast?: () => unknown;
  onLiveStream?: () => unknown;
  text?: defaultMobileActionMenuTextProps;
  locale?: string;
}

export const MobileActionMenu = ({
  onLiveStream,
  onMessageBlast,
  onNewPost,
  text = defaultMobileActionMenuText,
  locale = defaultLocaleValue
}: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClose = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(open ? null : event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme}>
      <Fab
        data-testid={`mobile-action-menu-fab-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          ml: 2,
          position: 'fixed',
          zIndex: '99',
          bottom: '90px',
          right: '20px',
          backgroundColor: '#000'
        }}
        aria-label="add"
        onClick={handleClose}
      >
        {open ? <Close color="#FFF" /> : <Plus color="#FFF" />}
      </Fab>

      <Menu
        data-testid={`mobile-action-menu-ds`}
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{ background: 'rgba(0, 0, 0, 0.50)' }}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              padding: 0,
              background: 'transparent',
              overflow: 'visible',
              textAlign: 'right',
              mt: -1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1
              }
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
      >
        <MenuList
          data-testid={`mobile-action-menu-list-ds`}
          sx={{
            '& .MuiMenuItem-root': {
              justifyContent: 'flex-end',
              padding: '6px 0px'
            }
          }}
        >
          <MenuItem>
            <PillButton
              data-testid={`mobile-action-menu-cards-ds`}
              onClick={() => {
                onNewPost?.();
                setAnchorEl(null);
              }}
              text={text.newPostText}
              icon={<Cards />}
            />
          </MenuItem>
          <MenuItem>
            <PillButton
              data-testid={`mobile-action-menu-message-blast-ds`}
              onClick={() => {
                onMessageBlast?.();
                setAnchorEl(null);
              }}
              text={text.messageBlastText}
              icon={<Messageblast />}
            />
          </MenuItem>
          <MenuItem>
            <PillButton
              data-testid={`mobile-action-menu-list-ds`}
              onClick={() => {
                onLiveStream?.();
                setAnchorEl(null);
              }}
              text={text.liveStreamText}
              icon={<Live />}
            />
          </MenuItem>
        </MenuList>
      </Menu>
    </ThemeProvider>
  );
};
