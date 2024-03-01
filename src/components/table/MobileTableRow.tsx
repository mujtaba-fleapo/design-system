import { ThemeProvider } from '@emotion/react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import { Avatar } from '../../elements/Avatar';
import { Checkbox } from '../../elements/Checkbox';
import { Thumbnail } from '../../elements/Thumbnail';
import { Typography } from '../../elements/Typography';
import { Horizontaldots } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  key: string;
  data: any;
  index: number;
  handleClick: (e: any, rowData: any) => void;
  onRowItemClick?: (index: number) => unknown;
  hasActions?: boolean;
  circularImages?: boolean;
  imageKey?: string;
  headers: { icon: React.ReactNode | string; title: string; key: string }[];
  showThreeDots?: boolean;
  enableSelection?: boolean;
  isSelected?: boolean;
  onSelect?: () => void;
  showMask?: boolean;
  locale?: string;
}

export const MobileTableRow = ({
  key,
  data,
  index,
  handleClick,
  hasActions,
  showThreeDots = true,
  circularImages,
  onRowItemClick,
  imageKey,
  headers,
  enableSelection,
  isSelected,
  onSelect,
  showMask,
  locale = defaultLocaleValue
}: Props) => {
  const handleActionIconClick = (e: any) => {
    handleClick(e, data);
  };

  return (
    <ThemeProvider theme={theme}>
      <ListItem
        data-testid={`mobile-table-row-${index}-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          borderBottom: `1px solid ${colors.lightgray[400]}`,
          px: 0,
          py: 1,
          '&:first-of-type': {
            borderTop: `1px solid ${colors.lightgray[400]}`
          },
          '&:hover': {
            backgroundColor: colors.lightgray[200]
          }
        }}
      >
        <Stack direction={'row'} width={'100%'}>
          {enableSelection && (
            <Stack
              gap={1}
              width="40px"
              height={'40px'}
              justifyContent={'center'}
              alignItems={'center'}
              display={'flex'}
            >
              <Checkbox isGradient isChecked={isSelected} onChange={onSelect} />
            </Stack>
          )}
          <Stack
            data-testid={`mobile-table-row-content-container-${index}-ds`}
            direction="row"
            gap={1}
            width={hasActions ? 'calc(100% - 24px)' : '100%'}
            sx={{
              '&:hover': {
                ...(onRowItemClick && {
                  cursor: 'pointer'
                })
              }
            }}
            onClick={(e) => {
              onRowItemClick?.(index);
            }}
          >
            {imageKey &&
              (circularImages ? (
                <Avatar size="40px" src={data[imageKey]} />
              ) : (
                <Thumbnail
                  src={data[imageKey]}
                  type={data.assetType}
                  height="40px"
                  width="40px"
                  sx={{ borderRadius: '3px' }}
                  showMask={showMask}
                />
              ))}
            <Box
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-between'}
              data-testid={`mobile-table-row-content-details-${index}-ds`}
            >
              <Typography
                className="interSemibold13"
                sx={{
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  maxWidth: '180px'
                }}
              >
                {data[headers[0]?.key]}
              </Typography>
              <Box
                data-testid={`mobile-table-row-smaller-details-${index}-ds`}
                className="interRegular13"
                display={'flex'}
                alignItems={'center'}
                gap="12px"
                flexWrap={'wrap'}
              >
                {headers.slice(1).map((item, index) => {
                  return (
                    <Box
                      data-testid={`mobile-table-row-small-detail-${index}-ds`}
                      key={item.key}
                      display={'flex'}
                      alignItems={'center'}
                      sx={{ gap: '4px' }}
                    >
                      {item.icon} {data[item.key]}
                    </Box>
                  );
                })}
              </Box>
            </Box>
          </Stack>
        </Stack>
        {hasActions && (
          <Box
            width={'24px'}
            data-testid={`mobile-table-row-action-icon-${index}-ds`}
          >
            {showThreeDots && (
              <IconButton
                size="large"
                edge="end"
                aria-label="more"
                sx={{ color: colors.black, padding: '4px' }}
                onClick={(e) => handleActionIconClick(e)}
              >
                <Horizontaldots />
              </IconButton>
            )}
          </Box>
        )}
      </ListItem>
    </ThemeProvider>
  );
};
