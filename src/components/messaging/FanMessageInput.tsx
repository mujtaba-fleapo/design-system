import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { useEffect, useState } from 'react';
import { Typography } from '../../elements/Typography';
import { Send } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  onChange: (message: string) => void;
  onSend: (message: string) => void;
  disabled: boolean;
  placeHolder?: string;
  messageCost: number;
  isMessagePaid: boolean;
  setIsMessagePaid: (isMessagePaid: boolean) => void;
  locale?: string;
}

export const FanMessageInput = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) props.onChange(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  useEffect(() => {
    if (props.isMessagePaid) {
      setMessage('');
      props.setIsMessagePaid(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.isMessagePaid]); //esLint-disable-line

  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`fan-message-input-box-ds`}
        dir={getLocaleDirection(locale)}
        width={'100%'}
      >
        <Box
          display={'flex'}
          alignItems={'flex-end'}
          minWidth={280}
          gap={1}
          width={'100%'}
          mb={'2px'}
        >
          <Box
            component={'form'}
            flex={1}
            bgcolor={colors.lightgray[200]}
            borderRadius={'4px'}
            padding={'5px 0'}
            maxHeight={'100px'}
            minHeight={'40px'}
            sx={{
              overflowY: 'auto'
            }}
          >
            <Input
              multiline
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  props.onSend(message);
                }
              }}
              value={message}
              disableUnderline={true}
              onChange={(e) => {
                if (e.target.value.length > 250)
                  return setMessage(e.target.value.slice(0, 250));
                setMessage(e.target.value);
              }}
              disabled={props.disabled}
              placeholder={props.placeHolder || ''}
              inputProps={{
                underline: {
                  '&::before': {
                    borderBottom: 0,
                    background: 'red'
                  }
                },
                sx: {
                  '&::placeholder': {
                    color: colors.black,
                    fontSize: '16px',
                    fontWeight: 400
                  }
                }
              }}
              sx={{
                width: '100%',
                height: '100%',
                border: 0,
                background: colors.lightgray[200],
                px: '12px',
                fontSize: '16px',
                borderRadius: '4px'
              }}
            />
          </Box>
          <Box
            bgcolor={
              props.disabled || !message ? colors.darkgray[100] : colors.black
            }
            width={40}
            height={40}
            borderRadius={'50%'}
          >
            <IconButton
              disabled={props.disabled || !message}
              onClick={() => props.onSend(message)}
              sx={{
                width: '100%',
                height: '100%',
                '& svg': {
                  width: '16px',
                  height: '16px'
                }
              }}
            >
              <Send color="#fff" />
            </IconButton>
          </Box>
        </Box>
        <Typography
          className="interSemibold12"
          sx={{
            color: message.length < 250 ? colors.darkgray[400] : colors.errorRed
          }}
        >
          {message.length}/250
        </Typography>
      </Box>
    </ThemeProvider>
  );
};
