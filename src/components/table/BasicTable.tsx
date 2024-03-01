import { ThemeProvider } from '@emotion/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
import { BasicTableRow } from './BasicTableRow';

interface Props {
  data: {
    label: string;
    value: string;
  }[];
  locale?: string;
}

export const BasicTable = ({ data, locale = defaultLocaleValue }: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Table
          dir={getLocaleDirection(locale)}
          data-testid={`basic-table-ds`}
          aria-label="simple table"
          sx={{ width: '100%' }}
        >
          <TableBody data-testid={`basic-table-body-ds`}>
            {data.map((item, index) => {
              return (
                <BasicTableRow
                  data-testid={`basic-table-row-${index}-ds`}
                  label={item.label}
                  value={item.value}
                />
              );
            })}
          </TableBody>
        </Table>
      </ThemeProvider>
    </>
  );
};
