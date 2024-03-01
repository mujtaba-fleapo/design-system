import { ThemeProvider } from '@emotion/react';
import LoadingButton from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { SxProps, Theme } from '@mui/material/styles';
import { useEffect, useRef } from 'react';
import { defaultLocaleValue, getLocaleDirection } from '../helpers/getLocale';
import { colors } from '../styles/colors';
import { theme } from '../theme';
import { Typography } from './Typography';
import { Unlock } from './icons';

interface Props {
  fullWidth?: boolean;
  text: string | React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  /**
   * @types 'primary' | 'secondary' | 'text' | 'unlock' | 'gradient' | 'gradient-unlock'| 'warning' | 'warning-outlined'
   */
  variant?: string;
  color?: 'black' | 'gray';
  size?: 'small' | 'medium' | 'large';
  sx?: SxProps<Theme>;
  background?: string;
  backgroundHover?: string;
  locale?: string;
  showProcessingFee?: boolean;
}

export const PillButton = ({
  locale = defaultLocaleValue,
  ...props
}: Props) => {
  const muiButtonType = () => {
    switch (props.variant) {
      case 'primary' || 'unlock' || 'gradient' || 'gradient-unlock':
        return 'contained';
      case 'secondary':
        return 'outlined';
      case 'text':
        return 'text';
      default:
        return 'contained';
    }
  };

  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.offsetX;
      const y = e.offsetY;
      buttonRef.current!.style.setProperty('--mouse-x', x + 'px');
      buttonRef.current!.style.setProperty('--mouse-y', y + 'px');
    };

    const button = buttonRef.current;

    if (button) {
      button.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      button?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getStartIcon = () => {
    return props.variant === 'unlock' && props.showProcessingFee ? (
      <Box marginTop="-7px">
        <Unlock />
      </Box>
    ) : props.variant === 'gradient-unlock' || props.variant === 'unlock' ? (
      <Unlock />
    ) : (
      props.icon
    );
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <LoadingButton
          data-testid={`pill-button-${props.text && typeof props.text === 'string'
            ? props.text.replace(/\s+/g, '-').toLowerCase()
            : props.variant
            }-ds`}
          dir={getLocaleDirection(locale)}
          ref={buttonRef}
          fullWidth={props.fullWidth}
          loading={props.loading}
          disabled={props.disabled}
          className="pill-btn"
          startIcon={getStartIcon()}
          variant={muiButtonType()}
          type={props.type || 'button'}
          onClick={props.onClick ? (e) => props.onClick?.(e) : undefined}
          size={props.size || 'medium'}
          sx={{
            '&:disabled': {
              color: '#696969!important',
              background: props.background || 'rgb(218, 217, 217)!important'
            },
            '& .MuiLoadingButton-loadingIndicatorEnd': {
              left: '0',
              transform: 'translateX(8px)'
            },
            position: 'relative',
            transition: 'background-color .6s ease',
            overflow: 'hidden',
            '&:after': {
              content: '""',
              position: 'absolute',
              width: 0,
              height: 0,
              top: 'var(--mouse-y)',
              left: 'var(--mouse-x)',
              transformStyle: 'flat',
              transform: 'translate3d(-50%,-50%,0)',
              background: colors.lightgray[500],
              borderRadius: '100%',
              opacity: 0.15,
              transition: 'width .3s ease, height .3s'
            },

            '&:active': {
              '&:after': {
                width: '1000px',
                height: '1000px'
              }
            },
            ...props.sx,
            ...(props.variant === 'unlock'
              ? {
                '&:disabled': {
                  color: '#8f8f8f!important',
                  background:
                    props.background || 'rgb(218, 217, 217)!important'
                },
                background: props.background || 'rgba(0, 0, 0, 0.30)',
                '&:hover': {
                  background: props.backgroundHover || 'rgba(0, 0, 0, 0.30)'
                }
              }
              : {}),
            ...(props.variant === 'gradient-unlock'
              ? {
                color: `${colors.black} !important`,
                background: colors.primarygradient
              }
              : {}),
            ...(props.variant === 'warning'
              ? {
                '&:disabled': {
                  color: '#8f8f8f!important',
                  background:
                    props.background || 'rgb(218, 217, 217)!important'
                },
                background: colors.attentionOrange,
                color: colors.white,
                '&:hover': {
                  background: colors.attentionOrange
                }
              }
              : {}),
            ...(props.variant === 'warning-outlined'
              ? {
                '&:disabled': {
                  color: '#8f8f8f!important',
                  background: 'rgb(218, 217, 217)!important'
                },
                border: `1px solid ${colors.attentionOrange}`,
                color: colors.attentionOrange,
                background: colors.white,
                '&:hover': {
                  background: colors.attentionOrange,
                  color: colors.white
                }
              }
              : {}),
            ...(props.variant === 'gradient'
              ? {
                color: `${colors.black} !important`,
                background: colors.primarygradient
              }
              : {})
          }}
        >
          {props.variant !== 'unlock' ? (
            props.text || 'Text'
          ) : props.showProcessingFee ? (
            <>
              <Stack direction="column">
                <Typography
                  sx={{
                    fontSize: '10.5px'
                  }}
                >
                  {props.text}
                </Typography>
                <Typography
                  sx={{
                    fontSize: '8px',
                    letterSpacing: '.5px',
                    fontWeight: 500,
                    textAlign: 'right'
                  }}
                >
                  + fees
                </Typography>
              </Stack>
            </>
          ) : (
            <>{props.text || 'Text'}</>
          )}
        </LoadingButton>
      </ThemeProvider>
    </>
  );
};
