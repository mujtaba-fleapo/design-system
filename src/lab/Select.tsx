import { ThemeProvider } from '@emotion/react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import MuiSelect from '@mui/material/Select';
import { theme } from '../theme';

interface Props {
  id?: string;
  label: string;
  multiple?: boolean;
  options: { value: string; label: string }[];
  onChange?: (e: string) => void;
}

export const Select = (props: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <FormControl
        data-testid="select-container-ds"
        variant="standard"
        sx={{ width: '100%' }}
      >
        <InputLabel id={props.id || 'select'}>{props.label}</InputLabel>
        <MuiSelect
          labelId={props.id || 'select'}
          id={props.id || 'select'}
          multiple={props.multiple}
          onChange={(e) => props.onChange?.(e.target.value as string)}
          label={props.label}
          defaultValue={props.options[0].value}
        >
          {props.options?.map((option) => {
            return (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            );
          })}
        </MuiSelect>
      </FormControl>
    </ThemeProvider>
  );
};
