import Grid from '@mui/material/Grid';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { NotificationListItem } from './NotificationListItem';

export interface NotificationItem {
  firstName: string;
  lastName: string;
  message: string;
  avatar?: string | null;
  unRead?: boolean;
  id: string;
}

interface Props {
  items: NotificationItem[];
  onClick: (item: NotificationItem) => void;
  locale?: string;
}

export const NotificationList = ({
  items,
  onClick,
  locale = defaultLocaleValue
}: Props) => {
  return (
    <Grid container width={'100%'} dir={getLocaleDirection(locale)}>
      {items.map((item, index) => (
        <Grid
          data-testid={`notification-list-item-${index}-grid-ds`}
          item
          md={12}
          key={item.id}
          px={0}
          width={'100%'}
          sx={{
            '&:not(:first-of-type)': { paddingTop: '2px' },
            '&:not(:last-child)': {
              paddingBottom: '12px',
              borderBottom: `1px solid ${colors.lightgray[400]}`
            }
          }}
        >
          <NotificationListItem
            data-testid={`notification-list-item-ds`}
            firstName={item.firstName}
            lastName={item.lastName}
            unRead={item.unRead}
            message={item.message}
            avatar={item.avatar}
            onClick={() => onClick(item)}
            locale={locale}
          />
        </Grid>
      ))}
    </Grid>
  );
};
