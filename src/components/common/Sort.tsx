import { ThemeProvider } from '@emotion/react';
import Stack from '@mui/material/Stack';
import { useEffect, useRef, useState } from 'react';
import { Typography } from '../../elements/Typography';
import { ChevronDown } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';
import { ContextMenu } from '../navigation/ContextMenu';

interface Options {
  label: string;
  key: string;
}
interface Props {
  options: Options[];
  onMenuItemClick: (key: string) => void;
  header?: string;
  selectedIndex?: number;
  enableContextMaxHeight?: boolean;
  locale?: string;
  width: string | number;
  wordBreakTitle?: boolean;
}

export const Sort = ({
  options,
  onMenuItemClick,
  header,
  selectedIndex,
  wordBreakTitle,
  width = '100%',
  enableContextMaxHeight = false,
  locale = defaultLocaleValue
}: Props) => {
  const [selected, setSelected] = useState<Options>(options[0]);
  const prevOptions = useRef<number>();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    if (prevOptions.current && prevOptions.current !== options.length)
      setSelected(options[0]);
    prevOptions.current = options.length;
  }, [options]);

  useEffect(() => {
    selectedIndex && setSelected(options[selectedIndex]);
  }, [selectedIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const handleMenuItemClick = (key: string) => {
    setSelected(options.find((option) => option.key === key) as Options);
    onMenuItemClick(key);
    setAnchorEl(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <Stack
        data-testid={`sort-stack-${selected.label
          .replace(/\s+/g, '-')
          .toLowerCase()}-ds`}
        dir={getLocaleDirection(locale)}
        width={width}
        spacing={1}
        direction="row"
        alignItems="center"
        onClick={(event: any) => setAnchorEl(event.currentTarget)}
        sx={{
          cursor: 'pointer',
          wordBreak: wordBreakTitle ? 'break-word' : 'normal'
        }}
      >
        <Typography
          className="interMedium14"
          sx={{ display: 'flex', alignItems: 'center' }}
        >
          {header}
          {selected.label}
        </Typography>
        <ChevronDown size="16px" />
      </Stack>
      <ContextMenu
        disableMobilePanel
        data-testid={`sort-context-menu-ds`}
        options={options}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        onClick={handleMenuItemClick}
        enableMaxHeight={enableContextMaxHeight}
      />
    </ThemeProvider>
  );
};
