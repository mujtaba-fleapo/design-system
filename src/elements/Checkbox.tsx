import { ThemeProvider } from '@emotion/react';
import MuiCheckbox, { checkboxClasses } from '@mui/material/Checkbox';
import { SxProps, Theme } from '@mui/material/styles';
import { colors } from '../styles/colors';
import { theme } from '../theme';
import { Checkbold } from './icons/Checkbold';

interface Props {
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange?: (e: boolean) => void;
  size?: number;
  sx?: SxProps<Theme>;
  isGradient?: boolean;
}

export const Checkbox = ({
  isChecked,
  isDisabled,
  onChange,
  size = 18,
  sx,
  isGradient
}: Props) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <MuiCheckbox
          data-testid={`check-box-ds`}
          checked={isChecked}
          disabled={isDisabled}
          sx={{
            p: 0,
            background: colors.white,
            borderRadius: 0.5,
            border: `2px solid ${colors.lightgray[600]}`,
            height: size,
            width: size,
            [`&:hover`]: {
              background: colors.white
            },
            [`&.${checkboxClasses.checked}`]: {
              border: 'none',
              background: isGradient ? colors.primarygradient : colors.black
            },
            ...sx
          }}
          icon={<></>}
          onChange={(e: any) => {
            e.stopPropagation();
            onChange?.(e.target.checked);
          }}
          checkedIcon={
            <Checkbold
              size="15px!important"
              color={isGradient ? colors.black : colors.white}
            />
          }
        />
      </ThemeProvider>
    </>
  );
};
