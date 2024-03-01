import { ThemeProvider } from '@emotion/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useEffect, useState } from 'react';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
import { DesktopTabText } from './DesktopTabText';

interface Props {
  options: { title: string; id: string }[];
  onClick: (key: string) => unknown;
  active?: string;
  locale?: string;
}
export const Tabs = ({ locale = defaultLocaleValue, ...props }: Props) => {
  const { options, onClick } = props;

  const [index, setIndex] = useState<number | null>(null);

  const onItemClick = (text: string, i: number) => {
    setIndex(i);
  };

  useEffect(() => {
    if (props.active) {
      const index = options?.findIndex((item) => item.id === props.active);
      setIndex(index);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.active]);

  return (
    <ThemeProvider theme={theme}>
      <List
        data-testid={`tabs-list-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          display: 'inline-flex',
          alignItems: 'flex-start',
          gap: '20px'
        }}
      >
        {options?.map((item, i) => (
          <ListItem
            data-testid={`tabs-list-item-${item.title
              .replace(/\s+/g, '-')
              .toLowerCase()}-ds`}
            key={item.id}
            sx={{
              padding: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              whiteSpace: 'nowrap',
              gap: '4px',
              cursor: 'pointer'
            }}
          >
            <DesktopTabText
              data-testid={`tabs-desktop-tab-text-${i}-ds`}
              active={i === index}
              text={item.title}
              onClick={() => {
                onClick?.(item.id);
                onItemClick(item.id, i);
              }}
              locale={locale}
            />
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
};
