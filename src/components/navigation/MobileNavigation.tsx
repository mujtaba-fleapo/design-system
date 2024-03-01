import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Avatar } from '../../elements/Avatar';
import { Badge } from '../../elements/Badge';
import { Pulse } from '../../elements/Pulse';
import { Icon, IconType } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';

export type MobileNavigationItem = {
  linkName: string;
  icon: IconType;
  onClick?: (e: React.MouseEvent) => void;
  unReadCount?: number;
  path: string;
};

interface MobileNavigationProps {
  items: MobileNavigationItem[];
  avatar?: string | null;
  activePath?: string;
  isAssetLoading?: boolean;
  isOnline?: boolean;
  locale?: string;
}
export const MobileNavigation = ({
  items,
  avatar,
  activePath,
  isAssetLoading,
  isOnline,
  locale = defaultLocaleValue
}: MobileNavigationProps) => {
  const getIcon = ({
    linkName,
    icon,
    unReadCount,
    path
  }: {
    linkName: string;
    icon: IconType;
    unReadCount: number;
    path: string;
  }) => {
    const iconElement = (
      <Icon
        name={icon}
        active={activePath === path}
        hasBadge={unReadCount > 0}
        size="24px"
      />
    );

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

    if (unReadCount > 0)
      return (
        <Pulse>
          <Badge variant={'standard'} number={unReadCount}>
            {iconElement}
          </Badge>
        </Pulse>
      );
    else return <>{iconElement}</>;
  };

  return (
    <Box component="nav" aria-label="mailbox folders">
      <List
        data-testid={`mobile-navigation-list-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'fixed',
          zIndex: '999',
          bottom: 0,
          left: 0,
          right: 0,
          background: colors.lightgray[100],
          '& .MuiListItemButton-root:hover': {
            bgcolor: colors.lightgray[300],
            '&, & .MuiListItemIcon-root': {
              color: colors.black
            }
          }
        }}
      >
        {items.map((item, index) => {
          return (
            <ListItem
              data-testid={`mobile-navigation-list-item-${index}-ds`}
              key={index}
              disablePadding
              sx={{
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                p: 1,
                cursor: 'pointer',
                borderRadius: '50%',
                transition: 'all 0.8s cubic-bezier(0.5, 0.4, 0.01, 1.36)',
                boxShadow:
                  activePath === item.path
                    ? '0px 0.5px 1px 0px rgba(48, 16, 60, 0.1), 0px 1px 17px 0px rgba(47, 19, 77, 0.1)'
                    : ''
              }}
              onClick={item.onClick}
            >
              <ListItemIcon
                data-testid={`mobile-navigation-list-item-icon-ds`}
                sx={{
                  width: 'auto',
                  minWidth: 'auto',
                  color: colors.black,
                  opacity:
                    item.icon === 'Account' || activePath === item.path
                      ? '1'
                      : '0.8'
                }}
              >
                {getIcon({
                  linkName: item.linkName,
                  icon: item.icon,
                  unReadCount: item.unReadCount ?? 0,
                  path: item.path
                })}
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
