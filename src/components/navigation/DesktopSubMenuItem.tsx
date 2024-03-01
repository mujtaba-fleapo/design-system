import { ThemeProvider } from '@emotion/react';
import ListItem from '@mui/material/ListItem';
import { Typography } from '../../elements/Typography';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';
interface Props {
  label: string;
  key: string;
  onClick: (key: string) => void;
  locale?: string;
}
export const DesktopSubMenuItem = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <ListItem
        data-testid={`desktop-submenu-${props.label
          .replace(/\s+/g, '-')
          .toLowerCase()}-ds`}
        dir={getLocaleDirection(locale)}
        onClick={() => props.onClick(props.key)}
        sx={{
          p: 2,

          '&:not(:last-child)': {
            borderBottom: `1px solid ${colors.lightgray[200]}`
          },
          cursor: 'pointer'
        }}
      >
        <Typography className="interSemibold14">{props.label}</Typography>
      </ListItem>
    </ThemeProvider>
  );
};
