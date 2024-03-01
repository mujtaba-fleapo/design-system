import { ThemeProvider } from '@emotion/react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useState } from 'react';
import { Checkbox } from '../../elements/Checkbox';
import { Typography } from '../../elements/Typography';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';

interface Props {
  options: string[];
  onChange?: (value: string[]) => void;
  locale?: string;
}

interface ItemState {
  item: string;
  isChecked: boolean;
}

export const CheckboxList = (props: Props) => {
  const { options, locale = defaultLocaleValue } = props;
  const [items, setItems] = useState<ItemState[]>(
    options.map((item) => ({ item, isChecked: false }))
  );

  const handleCheckboxChange = (index: number) => {
    const updatedItems = [...items];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;
    setItems(updatedItems);
  };

  return (
    <ThemeProvider theme={theme}>
      <List
        dir={getLocaleDirection(locale)}
        data-testid={`check-box-list-ds`}
        component={'ul'}
        sx={{ p: 0, m: 0 }}
      >
        {options?.map((item, index) => (
          <ListItem
            data-testid={`check-box-list-item-${index}-ds`}
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              '&:not(:last-child)': { marginBottom: '12px' }
            }}
          >
            <Checkbox
              data-testid={`check-box-list-onchange-${index}-ds`}
              isChecked={items[index].isChecked}
              onChange={() => handleCheckboxChange(index)}
            />
            <Typography className="interRegular13">{item}</Typography>
          </ListItem>
        ))}
      </List>
    </ThemeProvider>
  );
};
