import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { Avatar } from '../../elements/Avatar';
import { Checkbox } from '../../elements/Checkbox';
import { Thumbnail } from '../../elements/Thumbnail';
import { Horizontaldots } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  data: any;
  index: number;
  handleClick: (e: any, rowData: any) => void;
  onRowItemClick?: (index: number) => unknown;
  menuOpen: boolean;
  hasActions?: boolean;
  circularImages?: boolean;
  imageKey?: string;
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
  enableSelection?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  showMask?: boolean;
  locale?: string;
}

export const DesktopTableRow = ({
  data,
  index,
  handleClick,
  onRowItemClick,
  menuOpen,
  hasActions,
  circularImages,
  imageKey,
  headers,
  enableSelection = false,
  isSelected = false,
  onSelect,
  showMask,
  locale = defaultLocaleValue
}: Props) => {
  const handleActionIconClick = (e: any) => {
    handleClick(e, data);
  };

  return (
    <ThemeProvider theme={theme}>
      <TableRow
        data-testid={`desktop-table-row-${index}-ds`}
        dir={getLocaleDirection(locale)}
        key={index}
        className="interRegular14"
        sx={{
          '&:hover': {
            backgroundColor: colors.lightgray[200],
            ...(onRowItemClick && {
              cursor: 'pointer'
            })
          }
        }}
      >
        {enableSelection && (
          <TableCell
            data-testid={`desktop-table-cell-checkbox-${index}-ds`}
            align="right"
            padding="checkbox"
            className="action-col"
          >
            <Checkbox isGradient isChecked={!!isSelected} onChange={onSelect} />
          </TableCell>
        )}
        {headers.map((item, headerIndex) => {
          return (
            <TableCell
              data-testid={`desktop-table-cell-${headerIndex}-ds`}
              align="left"
              key={`table-cell${headerIndex}`}
              onClick={() => {
                onRowItemClick?.(index);
              }}
            >
              {headerIndex === 0 ? (
                <Box display="flex" alignItems="center" gap={1}>
                  {imageKey &&
                    (circularImages ? (
                      <Avatar src={data[imageKey]} />
                    ) : (
                      // eslint-disable-next-line jsx-a11y/alt-text
                      <Thumbnail
                        src={data[imageKey]}
                        type={data.assetType}
                        height="40px"
                        width="40px"
                        showMask={showMask}
                      />
                    ))}
                  {data[item.key] && (
                    <Box
                      sx={{
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        width: '200px'
                      }}
                    >
                      {data[item.key]}
                    </Box>
                  )}
                </Box>
              ) : (
                data[item.key]
              )}
            </TableCell>
          );
        })}
        {/* // data[imageKey] */}
        {hasActions && (
          <TableCell
            data-testid={`desktop-table-cell-action-ds`}
            align="left"
            className="action-col"
          >
            <IconButton
              data-testid={`action-col-button-${index}-ds`}
              aria-controls={menuOpen ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={menuOpen ? 'true' : undefined}
              onClick={(e) => handleActionIconClick(e)}
            >
              <Horizontaldots />
            </IconButton>
          </TableCell>
        )}
      </TableRow>
    </ThemeProvider>
  );
};
