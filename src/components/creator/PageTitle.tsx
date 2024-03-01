import { ThemeProvider } from '@emotion/react';
import Stack from '@mui/material/Stack';
import useMediaQuery from '@mui/material/useMediaQuery';
import { PillButton } from '../../elements/PillButton';
import { Typography } from '../../elements/Typography';
import { Download, Plus } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { theme } from '../../theme';

interface buttonItem {
  title: string;
  onClick: () => unknown;
  icon?: string;
  variant?: string;
}

interface PageTitleProps {
  title: string;
  buttonItems?: buttonItem[];
  locale?: string;
}

export const PageTitle = ({
  title = 'Title',
  buttonItems,
  locale = defaultLocaleValue
}: PageTitleProps) => {
  const isMobile = useMediaQuery('(max-width:992px)');
  return (
    <ThemeProvider theme={theme}>
      <Stack
        dir={getLocaleDirection(locale)}
        data-testid={`page-title-${title
          .replace(/\s+/g, '-')
          .toLowerCase()}-container-ds`}
        direction={'row'}
        alignItems={'center'}
        width={'100%'}
        justifyContent={'space-between'}
        gap="16px"
      >
        <Typography
          className={isMobile ? 'interSemibold20' : 'interSemibold24'}
        >
          {title}
        </Typography>
        <Stack direction={'row'} gap={'8px'}>
          {buttonItems?.map((button, index) => (
            <PillButton
              onClick={button.onClick}
              variant={button.variant || 'secondary'}
              size="small"
              key={index}
              icon={
                button.icon === 'plus' ? (
                  <Plus />
                ) : button.icon === 'download' ? (
                  <Download />
                ) : (
                  false
                )
              }
              text={button.title}
            />
          ))}
        </Stack>
      </Stack>
    </ThemeProvider>
  );
};
