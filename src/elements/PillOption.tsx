import { ThemeProvider } from '@emotion/react';
import MuiCheckbox from '@mui/material/Checkbox';
import { PillSelected, PillUnSelected } from '../elements/icons';
import { theme } from '../theme';

interface Props {
  isChecked?: boolean;
  onChange?: (e: boolean) => void;
}

export const PillOption = (props: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiCheckbox
          data-testid={`pill-option-mui-check-box-ds`}
          checked={props.isChecked}
          onChange={(e) => props.onChange?.(e.target.checked)}
          icon={<PillUnSelected />}
          checkedIcon={<PillSelected />}
          sx={{
            '& .MuiSvgIcon-root': {
              width: '33px',
              height: '33px'
            }
          }}
        />
      </ThemeProvider>
    </>
  );
};
