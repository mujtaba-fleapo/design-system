import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
import { MobilePanel } from './MobilePanel';

interface Props {
  options: { label: string; key: string }[];
  open: boolean;
  onClick: (key: string) => unknown;
  anchorEl: any;
  setAnchorEl: any;
  lastItemIsAlert?: boolean;
  disableMobilePanel?: boolean;
  enableMaxHeight?: boolean;
  locale?: string;
}

export const ContextMenu = (props: Props) => {
  const {
    options,
    onClick,
    open,
    anchorEl,
    setAnchorEl,
    lastItemIsAlert,
    disableMobilePanel,
    enableMaxHeight = false,
    locale = defaultLocaleValue
  } = props;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {options.length > 0 && !disableMobilePanel && (
        <MobilePanel
          data-testid={`context-menu-mobile-panel-ds`}
          sx={{ display: { md: 'none' } }}
          options={options}
          open={open}
          onClose={handleClose}
          onClick={(key: string) => {
            onClick(key);
            handleClose();
          }}
          lastItemIsAlert={lastItemIsAlert}
        />
      )}
      {options.length > 0 && (
        <Menu
          data-testid={`context-menu-ds`}
          dir={getLocaleDirection(locale)}
          id="context-menu"
          sx={{
            display: { xs: disableMobilePanel ? 'block' : 'none', md: 'block' },
            '& #ul-menu': {
              padding: 0
            },
            maxHeight: enableMaxHeight ? '300px' : 'none'
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                boxShadow: '0px 10px 20px 0px rgba(0, 0, 0, 0.05)',
                borderRadius: '4px',
                border: `1px solid ${colors.lightgray[600]}`
              }
            }
          }}
          MenuListProps={{
            // 'aria-labelledby': 'basic-button',
            id: 'ul-menu'
          }}
        >
          <List
            data-testid={`context-menu-list-ds`}
            sx={{
              minWidth: '160px',
              padding: 1,
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          >
            {options.map((item, index) => (
              <ListItem
                data-testid={`context-menu-item-${item.label
                  .replace(/\s+/g, '-')
                  .toLowerCase()}-ds`}
                onClick={() => {
                  onClick(item.key);
                  handleClose();
                }}
                key={item.key}
                sx={{
                  '&:not(:last-child)': { marginBottom: '4px' },
                  '&:hover': { background: colors.lightgray[200] },
                  padding: '4px 6px',
                  borderRadius: '2px',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }}
              >
                <Typography
                  sx={{
                    color:
                      lastItemIsAlert && index === options.length - 1
                        ? colors.attentionOrange
                        : 'inherit'
                  }}
                  className="interSemibold14"
                >
                  {item.label}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Menu>
      )}
    </ThemeProvider>
  );
};

export const ShowMobileMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (key: string) => {};

  return (
    <>
      <IconButton
        data-testid={`context-menu-icon-button-ds`}
        sx={{
          color: colors.black
        }}
        onClick={(event: any) => setAnchorEl(event.currentTarget)}
      >
        <Horizontaldots />
      </IconButton>

      <ContextMenu
        data-testid={`context-menu-options-ds`}
        options={[
          {
            label: 'Edit',
            key: 'edit'
          },
          {
            label: 'Delete',
            key: 'Delete'
          }
        ]}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={handleClick}
      />
    </>
  );
};
