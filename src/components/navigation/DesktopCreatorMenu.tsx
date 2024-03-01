import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { Badge } from '../../elements/Badge';
import { Pulse } from '../../elements/Pulse';
import { Typography } from '../../elements/Typography';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';

interface NavigationItem {
  title: string;
  path: string;
}

interface DesktopCreatorMenuProps {
  NavigationItems: NavigationItem[];
  messagesCount: number;
  onRouteChange: (path: string) => unknown;
  activePath?: string;
  locale?: string;
  header?: string;
}

export const DesktopCreatorMenu = ({
  NavigationItems,
  messagesCount,
  onRouteChange,
  activePath,
  locale = defaultLocaleValue
}: DesktopCreatorMenuProps) => {
  const handleItemClick = (index: number, path: string) => {
    onRouteChange(path);
  };

  return (
    <Stack
      data-testid={`desktop-creator-menu-stack-ds`}
      dir={getLocaleDirection(locale)}
      direction={'row'}
      gap={{ xs: '4px', lg: '8px' }}
    >
      {NavigationItems?.map((item, index) => (
        <Box
          data-testid={`desktop-creator-menu-box-ds`}
          bgcolor={
            activePath === item.path ? colors.lightgray[200] : 'transparent'
          }
          borderRadius={5}
          key={index}
          padding={{ xs: '7px 12px 7px 12px', lg: '7px 16px 7px 16px' }}
          onClick={() => handleItemClick(index, item.path)}
          sx={{
            cursor: 'pointer',
            '&:hover': { backgroundColor: colors.lightgray[200] }
          }}
        >
          {item.title === 'Messages' ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography className="interMedium14">{item.title}</Typography>
              {messagesCount > 0 && (
                <Pulse>
                  <Badge
                    number={messagesCount}
                    sx={{ margin: '0 5px 0 14px', top: '-1px' }}
                    data-testid={`desktop-creator-menu-badge-ds`}
                  />
                </Pulse>
              )}
            </Box>
          ) : (
            <Typography className="interMedium14">{item.title}</Typography>
          )}
        </Box>
      ))}
    </Stack>
  );
};
