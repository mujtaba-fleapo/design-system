import { ThemeProvider } from '@emotion/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Popover from '@mui/material/Popover';

import { Typography } from '../../elements/Typography';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  options: { label: string; key: string }[];
  open: boolean;
  onClick: (key: string) => unknown;
  anchorEl: any;
  setAnchorEl: any;
  lastItemIsAlert?: boolean;
  disableMobilePanel?: boolean;
  locale?: string;
}

export const CustomPopover = (props: Props) => {
  const {
    options,
    onClick,
    open,
    anchorEl,
    setAnchorEl,
    lastItemIsAlert,
    disableMobilePanel,
    locale = defaultLocaleValue
  } = props;

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      {options.length > 0 && (
        <Popover
          data-testid={`context-menu-ds`}
          dir={getLocaleDirection(locale)}
          id="popover-menu"
          sx={{
            display: { xs: disableMobilePanel ? 'block' : 'none', md: 'block' },
            '& #ul-menu': {
              padding: 0
            }
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          disableAutoFocus={true}
          disableEnforceFocus={true}
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
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
        >
          <List
            data-testid={`popover-menu-list-ds`}
            sx={{
              minWidth: '160px',
              padding: 1,
              borderRadius: '4px',
              overflow: 'hidden'
            }}
          >
            {options.map((item, index) => (
              <ListItem
                data-testid={`popover-menu-item-${item.label
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
        </Popover>
      )}
    </ThemeProvider>
  );
};
