import { ThemeProvider } from '@emotion/react';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import { Typography } from '../../elements/Typography';
import { Close, Eye, Eyeslash, Search } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

type InputOptions = string | number;
type InputVariant = 'standard' | 'outlined';
type InputType =
  | 'search'
  | 'text'
  | 'password'
  | 'email'
  | 'currency'
  | 'name'
  | 'username';
type HTMLInputType = 'search' | 'text' | 'password' | 'email';

const inputTypeCharacterLimits: Record<InputType, number> = {
  name: 100,
  username: 50,
  email: 100,
  password: 100,
  search: 9999,
  text: 9999,
  currency: 7
};

interface Props {
  id: string;
  width?: string;
  label?: string;
  variant?: InputVariant;
  type?: InputType;
  htmlType?: HTMLInputType;
  placeholder?: string;
  onChange: (e: any) => void;
  value: InputOptions;
  disabled?: boolean;
  multiline?: boolean;
  validation?: (value: InputOptions) => boolean;
  characterLimit?: number;
  showCharacterCount?: boolean;
  locale?: string;
}

export const Input: React.FC<Props> = ({
  id,
  label,
  variant,
  type = 'text',
  htmlType = 'text',
  placeholder,
  onChange,
  disabled,
  multiline,
  validation,
  characterLimit,
  showCharacterCount = false,
  width,
  value,
  locale = defaultLocaleValue
}) => {
  const [localValue, setLocalValue] = useState(value ?? '');
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (e: any) => e.preventDefault();

  const getStringLength = (inputValue: InputOptions) => {
    let length = inputValue.toString().length;
    if (type === 'currency')
      length = inputValue.toString().replace(/[,./]/g, '').length;

    return length;
  };

  const EndInputAdornment = (inputType: InputType, val: InputOptions) => {
    const limit = characterLimit ?? inputTypeCharacterLimits[type];
    const charLimitAdornment = (
      <Typography
        className="interRegular12"
        sx={{ color: colors.grayText, pl: 1 }}
      >
        {getStringLength(localValue)}/{limit}
      </Typography>
    );

    const passwordAdornment = (
      <InputAdornment
        data-testid={`input-adornment-${id
          .toLocaleLowerCase()
          .replace(/\s+/g, '-')}-ds`}
        position="end"
      >
        <IconButton
          data-testid={`input-icon-button-${id
            .toLocaleLowerCase()
            .replace(/\s+/g, '-')}-ds`}
          aria-label="toggle password visibility"
          onClick={handleClickShowPassword}
          onMouseDown={handleMouseDownPassword}
          edge="end"
        >
          {showPassword ? <Eye /> : <Eyeslash />}
        </IconButton>
      </InputAdornment>
    );

    const searchAdornment = (
      <InputAdornment
        data-testid={`input-adornment-search-${id}-ds`}
        position="end"
      >
        {val.toString().length > 0 && (
          <IconButton
            data-testid={`input-icon-button-search-${id
              .toLocaleLowerCase()
              .replace(/\s+/g, '-')}-ds`}
            aria-label="toggle password visibility"
            edge="end"
            onClick={clearInput}
          >
            <Close size="15px" color="lightgray" />
          </IconButton>
        )}
        <IconButton
          data-testid={`input-icon-button-search-${id
            .toLocaleLowerCase()
            .replace(/\s+/g, '-')}-ds`}
          aria-label="toggle password visibility"
          edge="end"
        >
          <Search size="20px" />
        </IconButton>
      </InputAdornment>
    );

    return (
      <>
        {inputType === 'password' && passwordAdornment}
        {inputType === 'search' && searchAdornment}
        {showCharacterCount && charLimitAdornment}
      </>
    );
  };

  const StartInputAdornment = (inputType: InputType) => {
    const currencyAdornment = (
      <Typography className="interRegular16">$</Typography>
    );

    return <>{inputType === 'currency' && localValue && currencyAdornment}</>;
  };

  const getMuiInputProps = () => {
    return ['password', 'search', 'currency'].includes(type) ||
      showCharacterCount
      ? {
          startAdornment: StartInputAdornment(type),
          endAdornment: EndInputAdornment(type, value)
        }
      : {};
  };

  const nameValidator = (name: string) => {
    // make sure name has only letters and spaces, no numbers or special characters
    const regex = /^[a-zA-Z\s]*$/;
    return regex.test(name);
  };

  const numberValidator = (number: string) => {
    // make sure number has only numbers and ., no letters or special characters
    const regex = /^[0-9.,]*$/;
    return regex.test(number);
  };

  const usernameFormatter = (username: string) => {
    const _username = username.replace(/[^A-Za-z0-9_.-]/g, '').toLowerCase();
    return _username;
  };

  const emailFormatter = (email: string) => {
    const _email = email.replace(/[^a-zA-Z0-9._%+-@]/g, '').toLowerCase();
    return _email;
  };

  const currencyFormatter = (
    amount: number | string,
    splitDecimal: boolean
  ) => {
    const _amount = Number(amount)
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2
      })
      .split('$')[1];

    if (splitDecimal) return _amount.split('.')[0];
    else return _amount;
  };

  const formatInput = (inputValue: InputOptions) => {
    let parsedValue = inputValue;

    if (type === 'currency') {
      let currInputTrails = '';
      inputValue = inputValue.toString();
      inputValue = inputValue.replace(/,/g, '');
      currInputTrails = inputValue.split('.')[1]
        ? `.${inputValue.split('.')[1]}`
        : '';
      if (currInputTrails === '' && inputValue.includes('.'))
        currInputTrails = '.';
      inputValue = inputValue.split('.')[0];
      if (currInputTrails.length > 3)
        currInputTrails = currInputTrails.slice(0, 3);

      parsedValue = `${currencyFormatter(inputValue, true)}${currInputTrails}`;
    } else if (type === 'username')
      parsedValue = usernameFormatter(inputValue as string);
    else if (type === 'email')
      parsedValue = emailFormatter(inputValue as string);
    return parsedValue;
  };

  const sanitizeInput = (inputValue: string) => {
    let parsedValue = inputValue;
    if (type === 'currency') {
      inputValue = inputValue.replace(/,/g, '');
    }

    return parsedValue;
  };

  const checkInputValidity = (inputValue: InputOptions) => {
    // check if input is valid if validation function is provided
    let isValid = validation?.(inputValue) ?? true;

    // validate input based on type
    if (type === 'name') isValid = nameValidator(inputValue as string);
    else if (type === 'currency')
      isValid = numberValidator(inputValue as string);

    return isValid;
  };

  const checkInputLength = (inputValue: InputOptions) => {
    let limit = characterLimit ?? inputTypeCharacterLimits[type];
    if (type === 'currency') {
      // if inputValue does not have a decimal, decrease limit by 2
      if (!inputValue.toString().includes('.')) limit -= 2;
    }
    return limit ? getStringLength(inputValue) <= limit : true;
  };

  const handleLocalInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let inputValue = e.target.value as InputOptions;
    inputValue = inputValue.toString();
    inputValue = sanitizeInput(inputValue);

    // check if input is valid
    const isValid = checkInputValidity(inputValue);
    if (!isValid) return;

    // format input based on type
    let parsedValue = formatInput(inputValue);

    //check if input is within character limit
    const isWithinCharacterLimit = checkInputLength(inputValue);
    if (!isWithinCharacterLimit) return;

    setLocalValue(parsedValue);
    onChange?.(parsedValue);
  };

  const clearInput = () => {
    setLocalValue('');
    onChange?.('');
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (type === 'currency') {
      const parsed = currencyFormatter(
        String(localValue).replace(/,/g, ''),
        false
      );
      setLocalValue(parsed);
      onChange?.(parsed.replace(/,/g, ''));
    } else {
      setLocalValue(localValue.toString().trim());
      onChange?.(localValue.toString().trim());
    }
  };

  useEffect(() => {
    setLocalValue(value ?? '');
  }, [value]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <TextField
        dir={getLocaleDirection(locale)}
        multiline={multiline}
        maxRows={4}
        style={{ width: width || '100%' }}
        data-testid={`input-${id.toLocaleLowerCase().replace(/\s+/g, '-')}-ds`}
        value={localValue}
        onChange={handleLocalInputChange}
        id={id}
        name={id}
        label={label}
        disabled={disabled}
        variant={variant || 'standard'}
        type={showPassword ? 'text' : htmlType}
        placeholder={placeholder}
        InputLabelProps={{
          shrink: localValue ? true : false
        }}
        onBlur={handleBlur}
        InputProps={getMuiInputProps()}
        sx={{
          '& input::-webkit-search-cancel-button': {
            '-webkit-appearance': 'none'
          }
        }}
      />
    </ThemeProvider>
  );
};
