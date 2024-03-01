'use client';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useEffect, useState } from 'react';
import {
  defaultDesktopFanNavigationText,
  defaultDesktopFanNavigationTextProps
} from '../../default-text';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Logo } from '../../elements/Logo';
import { PillButton } from '../../elements/PillButton';
import { Pulse } from '../../elements/Pulse';
import { DollarSign, Icon, IconType, Message } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';

export type DesktopFanNavigationItem = {
  linkName: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
  unReadCount?: number;
  onClickLogo?: (e: React.MouseEvent) => void;
};

export interface DesktopFanNavigationProps {
  activePath?: string;
  handleMessage?: (e: React.MouseEvent) => void;
  handleTip?: (e: React.MouseEvent) => void;
  avatar?: string;
  items: DesktopFanNavigationItem[];
  isAssetLoading?: boolean;
  onClickLogo?: () => void;
  anchor?: 'left' | 'right' | 'top' | 'bottom';
  text?: defaultDesktopFanNavigationTextProps;
  isOnline?: boolean;
  locale?: string;
}

const drawerWidth = 240;

export const DesktopFanNavigation = ({
  handleMessage,
  handleTip,
  items,
  avatar,
  activePath,
  isAssetLoading,
  onClickLogo,
  anchor = 'left',
  text = defaultDesktopFanNavigationText,
  isOnline,
  locale = defaultLocaleValue
}: DesktopFanNavigationProps) => {
  const [initialLoad, setInitialLoad] = useState(false);

  useEffect(() => {
    setInitialLoad(true);
  }, []);

  const getIcon = (icon: IconType) => {
    if (icon === 'Account')
      if (isAssetLoading)
        return (
          <Avatar
            alt="user"
            src="https://app.fanfix.io/static/images/default-avatar.png"
            size="31px"
          />
        );
      else
        return (
          <Avatar alt="user" src={avatar} size="31px" isOnline={isOnline} />
        );
    else return <Icon name={icon} size="24px" />;
  };

  return (
    <>
      <Box
        data-testid={`desktop-fan-nav-container-ds`}
        dir={getLocaleDirection(locale)}
        component="nav"
        sx={{
          width: { md: drawerWidth },
          flexShrink: { md: 0 }
        }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="permanent"
          anchor={anchor}
          sx={{
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: { xs: '100%', md: drawerWidth },
              height: { xs: 'auto', md: '100%' },
              background: colors.lightgray[100],
              border: 0,
              transition: 'transform 0.8s cubic-bezier(0.13, 1.36, 0.38, 0.98)',
              transform: initialLoad ? 'translateX(0)' : 'translateX(-100%)'
            }
          }}
          open
        >
          <Box
            width="100%"
            height="100%"
            display="flex"
            justifyContent="space-between"
            flexDirection="column"
          >
            <Box>
              <Box paddingY={5} paddingX={3}>
                <Logo size={164} onClick={onClickLogo} />
              </Box>

              <Box data-testid={`desktop-fan-nav-drawer-ds`} paddingX={'12px'}>
                <List
                  data-testid={`desktop-fan-nav-list-ds`}
                  sx={{
                    display: 'inline',
                    width: 'auto',
                    padding: 0,
                    '& > li:not(:last-child)': {
                      marginBottom: 1
                    },
                    background: colors.lightgray[100],
                    '& .MuiListItemButton-root:hover': {
                      bgcolor: `${colors.lightgray[300]}`,
                      '&, & .MuiListItemIcon-root': {
                        color: 'black'
                      }
                    }
                  }}
                >
                  {items.map((text, index) => (
                    <ListItem
                      data-testid={`desktop-fan-nav-list-item-${text.linkName
                        .replace(/\s+/g, '-')
                        .toLowerCase()}-ds`}
                      key={text.linkName}
                      onClick={(e) => text.onClick?.(e)}
                      sx={{
                        padding: '8px 12px',
                        transition:
                          'all 0.8s cubic-bezier(0.5, 0.4, 0.01, 1.36)',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        '&:hover': {
                          background: colors.lightgray[300]
                        },
                        '&:not(:last-child)': {
                          marginBottom: '8px'
                        },
                        backgroundColor:
                          activePath === '/' + text.linkName.toLocaleLowerCase()
                            ? colors.lightgray[300]
                            : 'transparent'
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          minWidth: 'auto',
                          marginRight: 2,
                          color: colors.black,
                          '&:hover': { background: 'inherit' }
                        }}
                      >
                        {getIcon(text.icon)}
                      </ListItemIcon>
                      <ListItemText
                        sx={{
                          margin: '0',
                          '& .MuiTypography-root': {
                            fontWeight: 600
                          }
                        }}
                        primary={text.linkName}
                      />
                      {text.unReadCount && text.unReadCount > 0 && (
                        <ListItemText
                          primary={
                            <Box display="flex" justifyContent="flex-end">
                              <Pulse>
                                <Badge
                                  sx={{ top: '-1px' }}
                                  number={text.unReadCount}
                                />
                              </Pulse>
                            </Box>
                          }
                          sx={{ marginRight: '12px' }}
                        />
                      )}
                    </ListItem>
                  ))}
                </List>
              </Box>
            </Box>
            {/* Buttons Wrapper*/}
            <Box
              data-testid={`desktop-fan-nav-buttons-ds`}
              paddingY={5}
              paddingX={3}
              width="100%"
              display={{ xs: 'none', md: 'block' }}
              sx={{ background: colors.lightgray[100] }}
            >
              <PillButton
                data-testid={`desktop-fan-navigation-message-ds`}
                text={text.messageText}
                icon={<Message />}
                variant="primary"
                sx={{ width: '192px', innerHeight: '40px' }}
                onClick={(e) => handleMessage && handleMessage(e)}
              />
              <Box sx={{ marginTop: '12px' }}>
                <PillButton
                  data-testid={`desktop-fan-navigation-dollar-sign-ds`}
                  text={text.tipText}
                  icon={<DollarSign />}
                  variant="primary"
                  sx={{ width: '192px', innerHeight: '40px' }}
                  onClick={(e) => handleTip && handleTip(e)}
                />
              </Box>
            </Box>
          </Box>
        </Drawer>
      </Box>
    </>
  );
};
