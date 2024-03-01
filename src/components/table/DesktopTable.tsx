import { ThemeProvider } from '@emotion/react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';
import { DesktopTableHeader } from './DesktopTableHeader';
import { DesktopTableRow } from './DesktopTableRow';

const TableWrapper = styled(Table)`
  .table-heading {
    th {
      &:last-child {
        padding-right: 0;
      }
    }

    .heading-icon {
      display: flex;
      align-items: center;
      gap: 4px;

      svg {
        margin-top: -5px;
        top: 3px;
      }

      p {
        line-height: normal;
      }
    }
  }

  tbody {
    tr {
      td {
        padding-right: 20px !important;
      }
    }
  }

  &.has-actions {
    tbody {
      tr {
        td {
          &:last-child {
            padding-right: 0 !important;
            width: 40px;
          }
        }
      }
    }
  }
`;

export type Direction = 'asc' | 'desc';

export interface TableContextOption {
  label: string;
  key: string;
  states?: {
    value: any;
    option: {
      label: string;
      key: string;
    };
  }[];
}

interface Props {
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
  hasActions?: boolean;
  data: any[];
  circularImages?: boolean;
  imageKey?: string;
  options?: TableContextOption[];
  lastItemIsAlert?: boolean;
  onMenuItemClick?: (key: string, index: number) => void;
  onSort?: (key: string, direction: Direction) => void;
  sortedColumn?: string;
  sortableHeaders?: string[];
  onRowClick?: (index: number) => void;
  selections?: any[];
  onSelect?: (val: any) => void;
  enableSelection?: boolean;
  locale?: string;
}

export const DesktopTable = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(0);
  const open = Boolean(anchorEl);
  const [localOptions, setLocalOptions] = useState<
    { label: string; key: string }[]
  >(props.options ?? []);

  const handleClick = (event: any, index: number, rowData: any) => {
    setAnchorEl(event.currentTarget);
    setIndex(index);
    if (props.options && props.options.length > 0) {
      const filteredOptions: {
        label: string;
        key: string;
      }[] = [];
      props.options.map((option) => {
        if (option.states) {
          const rowValue = rowData[option.key];
          const state = option.states.find((state) => state.value === rowValue);
          if (!state) return undefined;
          filteredOptions.push(state.option);
          return state.option;
        } else {
          filteredOptions.push(option);
          return option;
        }
      });
      setLocalOptions(filteredOptions);
    }
  };

  const isSelected = (asset: any) => {
    return (
      props.selections &&
      props.selections.length > 0 &&
      props.selections.includes(asset.asset)
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        dir={getLocaleDirection(locale)}
        data-testid={`desktop-table-container-ds`}
      >
        <TableWrapper
          data-testid={`desktop-table-root-ds`}
          className={`desktop-table ${props.hasActions ? 'has-actions' : ''}`}
        >
          {props.data.length > 0 && (
            <DesktopTableHeader
              data-testid={`desktop-table-header-ds`}
              headers={props.headers}
              hasActions={props.hasActions}
              onSort={props.onSort}
              sortedColumn={props.sortedColumn}
              sortableHeaders={props.sortableHeaders}
              enableSelection={props.enableSelection}
              locale={locale}
            />
          )}
          <TableBody>
            {props.data.map((row: any, index: number) => {
              const selected = isSelected(row);
              const masked =
                props.selections && props.selections.length > 0 && !selected;
              return (
                <DesktopTableRow
                  onRowItemClick={props.onRowClick}
                  data-testid={`desktop-table-row-${index}-ds`}
                  key={`row-${index}`}
                  index={index}
                  data={row}
                  handleClick={(e, optionalOptionData) =>
                    handleClick(e, index, optionalOptionData)
                  }
                  menuOpen={open}
                  hasActions={props.hasActions}
                  circularImages={props.circularImages}
                  imageKey={props.imageKey}
                  headers={props.headers}
                  isSelected={selected}
                  showMask={masked}
                  onSelect={() => props.onSelect?.(row)}
                  enableSelection={props.enableSelection}
                  locale={locale}
                />
              );
            })}
          </TableBody>
        </TableWrapper>
      </TableContainer>
      <ContextMenu
        data-testid={`desktop-table-context-menu-ds`}
        options={localOptions}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => props.onMenuItemClick?.(e, index)}
        lastItemIsAlert={props.lastItemIsAlert}
        locale={locale}
      />
    </ThemeProvider>
  );
};
