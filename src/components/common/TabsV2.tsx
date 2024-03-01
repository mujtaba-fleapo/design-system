import { ThemeProvider } from '@emotion/react';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
interface Props {
  options: { label: string; key: string }[];
  onChange: (event: React.SyntheticEvent, newValue: string) => unknown;
  active: string;
  locale?: string;
}
export function TabsV2({
  options,
  active,
  onChange,
  locale = defaultLocaleValue
}: Props) {
  return (
    <ThemeProvider theme={theme}>
      <Tabs
        data-testid="tabsv2-container-ds"
        dir={getLocaleDirection(locale)}
        value={active}
        onChange={onChange}
        aria-label="message-switch-tabsV2"
        sx={{
          '.MuiTabs-indicator': {
            backgroundColor: 'black',
            top: '22px',
            height: '2px'
          },
          '& .MuiTabs-flexContainer': {
            gap: '20px'
          },
          minHeight: '24px'
        }}
      >
        {options.map((tab) => (
          <Tab
            key={`${tab.label}${tab.key}`}
            label={tab.label}
            value={tab.key}
            sx={{
              textTransform: 'none',
              minWidth: 'auto',
              fontSize: '1rem',
              letterSpacing: '-0.24px',
              padding: '0',
              '&.Mui-selected': {
                color: 'black'
              },
              minHeight: 'unset'
            }}
          />
        ))}
      </Tabs>
    </ThemeProvider>
  );
}
