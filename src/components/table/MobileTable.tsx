import Box from '@mui/material/Box';
import List from '@mui/material/List';
import { useState } from 'react';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { ContextMenu } from '../navigation/ContextMenu';
import { TableContextOption } from './DesktopTable';
import { MobileTableRow } from './MobileTableRow';

interface Props {
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
  hasActions?: boolean;
  data: any[];
  circularImages?: boolean;
  imageKey?: string;
  options?: TableContextOption[];
  onMenuItemClick?: (key: string, index: number) => void;
  showContextMenu?: boolean;
  lastItemIsAlert?: boolean;
  onRowClick?: (index: number) => void;
  selections?: any[];
  onSelect?: (val: any) => void;
  enableSelection?: boolean;
  locale?: string;
}

export const MobileTable = ({
  headers,
  hasActions,
  data,
  circularImages,
  showContextMenu = true,
  imageKey,
  options,
  onRowClick,
  onMenuItemClick,
  lastItemIsAlert,
  enableSelection,
  selections,
  onSelect,
  locale = defaultLocaleValue
}: Props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [index, setIndex] = useState(0);
  const open = Boolean(anchorEl);
  const [localOptions, setLocalOptions] = useState<
    { label: string; key: string }[]
  >(options ?? []);

  const handleClick = (event: any, index: number, rowData: any) => {
    setAnchorEl(event.currentTarget);
    setIndex(index);
    if (options && options.length > 0) {
      const filteredOptions: {
        label: string;
        key: string;
      }[] = [];
      options.map((option) => {
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
      selections && selections.length > 0 && selections.includes(asset.asset)
    );
  };
  return (
    <>
      <List
        data-testid={`mobile-table-posts-list-ds`}
        dir={getLocaleDirection(locale)}
        sx={{ width: '100%' }}
      >
        {data.map((item, index) => {
          const selected = isSelected(item);
          const masked = selections && selections.length > 0 && !selected;
          return (
            <Box
              onClick={() => !showContextMenu && onMenuItemClick?.('', index)}
              key={`row-${index}`}
            >
              <MobileTableRow
                key={`row-${index}`}
                data={item}
                index={index}
                handleClick={(e, optionalOptionData) =>
                  handleClick(e, index, optionalOptionData)
                }
                hasActions={hasActions}
                showThreeDots={showContextMenu}
                circularImages={circularImages}
                imageKey={imageKey}
                headers={headers}
                onRowItemClick={onRowClick}
                showMask={masked}
                isSelected={selected}
                enableSelection={enableSelection}
                onSelect={() => onSelect?.(item)}
                locale={locale}
              />
            </Box>
          );
        })}
      </List>
      <ContextMenu
        options={localOptions}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={(e: string) => onMenuItemClick?.(e, index)}
        lastItemIsAlert={lastItemIsAlert}
        locale={locale}
      />
    </>
  );
};
