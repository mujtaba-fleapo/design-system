import { ThemeProvider } from '@emotion/react';
import List from '@mui/material/List';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
import { DesktopSubMenuItem } from './DesktopSubMenuItem';

interface Props {
  options: { label: string; key: string }[];
  onClick: (key: string) => void;
  locale?: string;
}

export const DesktopSubMenu = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <List
        data-testid={`desktop-submenu-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          width: '100%'
        }}
      >
        {props.options &&
          props.options.map((item) => {
            return (
              <DesktopSubMenuItem
                data-testid={`desktop-submenu-item-ds`}
                key={item.key}
                label={item.label}
                onClick={() => props.onClick?.(item.key)}
                locale={locale}
              />
            );
          })}
      </List>
    </ThemeProvider>
  );
};
