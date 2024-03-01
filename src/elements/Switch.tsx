import { ThemeProvider } from '@emotion/react';
import MuiSwitch from '@mui/material/Switch';
import { theme } from '../theme';

interface Props {
  isChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

export const Switch = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <MuiSwitch
        data-testid={`switch-button-ds`}
        checked={props.isChecked}
        onChange={(e) => props.onChange?.(e.target.checked)}
      />
    </ThemeProvider>
  );
};
