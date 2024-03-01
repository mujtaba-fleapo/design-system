import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import { useEffect, useState } from 'react';
import { Plus, Send } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface UploadedFileType {
  type: string;
  mime_type: string;
  size: number;
  name: string;
  File: File;
  allowed: boolean;
  comments: string;
}

interface Props {
  onChange: (value: string) => void;
  onAttachmentAdded: (files: UploadedFileType[]) => void;
  onSend: (message: string) => void;
  disabled: boolean;
  placeHolder?: string;
  onAddClick: () => void;
  hasMedia?: boolean;
  disableSendButton?: boolean;
  locale?: string;
}
export const CreatorMessageInput = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (message) props.onChange(message);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        dir={getLocaleDirection(locale)}
        display={'flex'}
        alignItems={'flex-end'}
        gap={1}
        width={'100%'}
      >
        <Box
          data-testid={`creator-message-input-add-media-ds`}
          bgcolor={colors.lightgray[200]}
          width={40}
          height={40}
          borderRadius={'4px'}
        >
          <IconButton
            disabled={props.disabled}
            data-testid={`creator-message-input-icon-button-ds`}
            onClick={() => props.onAddClick()}
            sx={{
              cursor: 'pointer',
              width: '100%',
              height: '100%',
              '& svg': {
                width: '16px',
                height: '16px'
              }
            }}
          >
            <Plus color="#000" />
          </IconButton>
        </Box>
        <Box
          data-testid={`creator-message-input-box-ds`}
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
              if (e.key === 'Enter' && !e.shiftKey && !props.disabled) {
                e.preventDefault();

                if ((!message && !props.hasMedia) || props.disableSendButton)
                  return;

                props.onSend(message);
                setMessage('');
              }
            }}
            data-testid={`creator-message-input-check-disable-ds`}
            disableUnderline={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
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
            props.disabled ||
            (!message && !props.hasMedia) ||
            props.disableSendButton
              ? colors.darkgray[100]
              : colors.black
          }
          data-testid={`creator-message-send-box-ds`}
          width={40}
          height={40}
          borderRadius={'50%'}
        >
          <IconButton
            disabled={
              props.disabled ||
              (!message && !props.hasMedia) ||
              props.disableSendButton
            }
            data-testid={`creator-message-send-button-ds`}
            onClick={() => {
              props.onSend(message);
              setMessage('');
            }}
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
    </ThemeProvider>
  );
};
