import { ThemeOptions, createTheme } from '@mui/material/styles';
import { colors } from '../styles/colors';
import variables from '../styles/variables.module.scss';

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    sd: true;
    md: true;
    lg: true;
    xl: true;
  }
}

export const themeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: Number(variables.xs),
      sm: Number(variables.sm),
      sd: Number(variables.sd),
      md: Number(variables.md),
      lg: Number(variables.lg),
      xl: Number(variables.xl)
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '40px',

          padding: 0,
          fontWeight: 600,
          '& .MuiLoadingButton-loadingIndicator': {
            position: 'relative',
            left: '0'
          },
          '&:disabled': {
            color: colors.white,
            backgroundColor: '#d9d9d9'
          },
          '&.MuiLoadingButton-loading': {
            '& .MuiButton-startIcon': {
              display: 'none'
            }
          },
          '& .MuiButton-startIcon': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }
        },
        contained: {
          '&:hover': {
            backgroundColor: 'black'
          }
        },
        sizeSmall: {
          height: 32,
          fontSize: 12,
          padding: '0 16px',
          letterSpacing: '-0.18px',
          '& .MuiButton-startIcon': {
            width: 16,
            height: 16
          }
        },
        sizeMedium: {
          height: 40,
          fontSize: 13,
          padding: '0 20px',
          letterSpacing: '-0.195px',
          '& .MuiButton-startIcon': {
            width: 16,
            height: 16
          }
        },
        sizeLarge: {
          height: 48,
          fontSize: 14,
          padding: '0 24px',
          letterSpacing: '-0.21px',
          '& .MuiButton-startIcon': {
            width: 20,
            height: 20
          }
        },
        startIcon: {
          position: 'relative',
          top: '-1px'
        }
      }
    },
    MuiFab: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: colors.black
          },
          '& .MuiSvgIcon-root': {
            width: 20,
            height: 20
          }
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          width: '100%'
        }
      }
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true
      }
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '32px 24px',
          '&:last-child': {
            paddingBottom: '32px'
          }
        }
      }
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {
          variant: 'h6'
        },
        subheaderTypographyProps: {
          variant: 'body2'
        }
      },
      styleOverrides: {
        root: {
          padding: '32px 24px'
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        ':root': {
          '--black': colors.black,
          '--white': colors.white,
          '--gray': colors.grayText,
          '--orange': colors.attentionOrange,
          '--errorRed': colors.errorRed,
          '--lightgray100': colors.lightgray[100],
          '--lightgray200': colors.lightgray[200],
          '--lightgray300': colors.lightgray[300],
          '--lightgray400': colors.lightgray[400],
          '--lightgray500': colors.lightgray[500],
          '--lightgray600': colors.lightgray[600],
          '--darkgray100': colors.darkgray[100],
          '--darkgray200': colors.darkgray[200],
          '--darkgray300': colors.darkgray[300],
          '--darkgray400': colors.darkgray[400],
          '--darkgray500': colors.darkgray[500],
          '--primary-gradient': colors.primarygradient
        },
        '*': {
          fontFamily: 'var(--primary-font) !important'
        },
        '*,:before, :after': {
          boxSizing: 'border-box',
          WebkitBoxSizing: 'border-box',
          textRendering: 'optimizeLegibility',
          outline: 0,
          margin: 0
        },
        ':after:focus, :before:focus, :focus': {
          outline: 0
        },
        ':after, :before': {
          MozOsxFontSmoothing: 'grayscale',
          WebkitFontSmoothing: 'antialiased'
        },
        html: {
          overflow: 'unset!important',
          overscrollBehavior: 'none'
        },
        'body, html': {
          padding: 0,
          margin: 0,
          overflowX: 'hidden',
          fontSize: '16px!important',
          fontStyle: 'normal',
          fontWeight: 400,
          color: colors.black
        },
        input: {
          WebkitAppearance: 'none',
          appearance: 'none',
          borderRadius: 0,
          WebkitBorderRadius: 0
        },
        a: {
          color: 'inherit',
          textDecoration: 'none'
        },
        '.flex-center-between': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        },
        '.flex-center-center': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        },
        '.flex-center': {
          display: 'flex',
          alignItems: 'center'
        },
        '.flex-start-between': {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between'
        },
        '.flex-start-start': {
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start'
        },
        '.flex-center-start': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start'
        },
        '.word-break-break': {
          wordBreak: 'break-word'
        },
        '.h-screen': {
          height: '100dvh',
          maxHeight: '-webkit-fill-available'
        },
        '.min-h-screen': {
          minHeight: '100dvh'
        },
        '.overflow-hidden': {
          overflow: 'hidden!important'
        },
        '.interLight28': {
          fontWeight: 300,
          fontSize: '20px',
          letterSpacing: '-1.4px'
        },
        '.interLight24': {
          fontWeight: 300,
          fontSize: '24px',
          letterSpacing: '-0.96px'
        },
        '.interLight20': {
          fontWeight: 300,
          fontSize: '20px',
          letterSpacing: '-0.6px'
        },
        '.interLight18': {
          fontWeight: 300,
          fontSize: '18px',
          letterSpacing: '-0.45px'
        },
        '.interLight16': {
          fontWeight: 300,
          fontSize: '16px',
          letterSpacing: '-0.4px'
        },
        '.interLight14': {
          fontWeight: 300,
          fontSize: '14px',
          letterSpacing: '-0.35px'
        },
        '.interLight13': {
          fontWeight: 300,
          fontSize: '13px',
          letterSpacing: '-0.325px'
        },
        '.interLight12': {
          fontWeight: 300,
          fontSize: '12px',
          letterSpacing: '-0.3px'
        },
        '.interLight10': {
          fontWeight: 300,
          fontSize: '10px',
          letterSpacing: '-0.25px'
        },
        '.interRegular28': {
          fontWeight: 400,
          fontSize: '28px',
          letterSpacing: '-1.12px'
        },
        '.interRegular24': {
          fontWeight: 400,
          fontSize: '24px',
          letterSpacing: '-0.72px'
        },
        '.interRegular20': {
          fontWeight: 400,
          fontSize: '20px',
          letterSpacing: '-0.4px'
        },
        '.interRegular18': {
          fontWeight: 400,
          fontSize: '18px',
          letterSpacing: '-0.27px'
        },
        '.interRegular16': {
          fontWeight: 400,
          fontSize: '16px',
          letterSpacing: '-0.24px'
        },
        '.interRegular14': {
          fontWeight: 400,
          fontSize: '14px',
          letterSpacing: '-0.21px'
        },
        '.interRegular13': {
          fontWeight: 400,
          fontSize: '13px',
          letterSpacing: '-0.195px'
        },
        '.interRegular12': {
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '-0.18px'
        },
        '.interRegular10': {
          fontWeight: 400,
          fontSize: '10px',
          letterSpacing: '-0.15px'
        },
        '.interMedium28': {
          fontWeight: 500,
          fontSize: '28px',
          letterSpacing: '-1.12px'
        },
        '.interMedium24': {
          fontWeight: 500,
          fontSize: '24px',
          letterSpacing: '-0.72px'
        },
        '.interMedium20': {
          fontWeight: 500,
          fontSize: '20px',
          letterSpacing: '-0.4px'
        },
        '.interMedium18': {
          fontWeight: 500,
          fontSize: '18px',
          letterSpacing: '-0.27px'
        },
        '.interMedium16': {
          fontWeight: 500,
          fontSize: '16px',
          letterSpacing: '-0.24px'
        },
        '.interMedium14': {
          fontWeight: 500,
          fontSize: '14px',
          letterSpacing: '-0.21px'
        },
        '.interMedium13': {
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '-0.195px'
        },
        '.interMedium12': {
          fontWeight: 500,
          fontSize: '12px',
          letterSpacing: '-0.18px'
        },
        '.interMedium10': {
          fontWeight: 500,
          fontSize: '10px',
          letterSpacing: '-0.15px'
        },
        '.interSemibold28': {
          fontWeight: 600,
          fontSize: '28px',
          letterSpacing: '-1.12px'
        },
        '.interSemibold24': {
          fontWeight: 600,
          fontSize: '24px',
          letterSpacing: '-0.72px'
        },
        '.interSemibold20': {
          fontWeight: 600,
          fontSize: '20px',
          letterSpacing: '-0.4px'
        },
        '.interSemibold18': {
          fontWeight: 600,
          fontSize: '18px',
          letterSpacing: '-0.27px'
        },
        '.interSemibold16': {
          fontWeight: 600,
          fontSize: '16px',
          letterSpacing: '-0.24px'
        },
        '.interSemibold14': {
          fontWeight: 600,
          fontSize: '14px',
          letterSpacing: '-0.21px'
        },
        '.interSemibold13': {
          fontWeight: 600,
          fontSize: '13px',
          letterSpacing: '-0.195px'
        },
        '.interSemibold12': {
          fontWeight: 600,
          fontSize: '12px',
          letterSpacing: '-0.18px'
        },
        '.interSemibold10': {
          fontWeight: 600,
          fontSize: '10px',
          letterSpacing: '-0.15px'
        },
        '.interBold28': {
          fontWeight: 700,
          fontSize: '28px',
          letterSpacing: '-0.84x'
        },
        '.interBold24': {
          fontWeight: 700,
          fontSize: '24px',
          letterSpacing: '-0.6px'
        },
        '.interBold20': {
          fontWeight: 700,
          fontSize: '20px',
          letterSpacing: '-0.3px'
        },
        '.interBold18': {
          fontWeight: 700,
          fontSize: '18px',
          letterSpacing: '-0.18px'
        },
        '.interBold16': {
          fontWeight: 700,
          fontSize: '16px',
          letterSpacing: '-0.16px'
        },
        '.interBold14': {
          fontWeight: 700,
          fontSize: '14px',
          letterSpacing: '-0.14px'
        },
        '.interBold13': {
          fontWeight: 700,
          fontSize: '13px',
          letterSpacing: '-0.13px'
        },
        '.interBold12': {
          fontWeight: 700,
          fontSize: '12px',
          letterSpacing: '-0.12px'
        },
        '.interBold10': {
          fontWeight: 700,
          fontSize: '10px',
          letterSpacing: '-0.1px'
        },
        '.text-truncate': {
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: '#E6E8F0'
        }
      }
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          borderTop: `1px solid ${colors.lightgray[400]}`,
          borderBottom: `1px solid ${colors.lightgray[400]}`,
          height: '50px',
          '& .MuiTableCell-root': {
            color: colors.black,
            padding: 0,
            borderBottom: 'none',
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: 1,
            letterSpacing: '0.12px',
            textTransform: 'uppercase',
            '& .MuiSvgIcon-root': {
              width: 16,
              height: 16,
              position: 'relative'
            }
          },
          '& .MuiTableCell-paddingCheckbox': {
            paddingTop: 4,
            paddingBottom: 4
          }
        }
      }
    },
    MuiTableBody: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-root': {
            height: '40px',
            padding: '8px 0',
            borderBottom: `1px solid ${colors.lightgray[400]}`
          },
          '& .action-col .MuiSvgIcon-root': {
            width: '24px',
            height: '24px'
          }
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        dense: {
          height: 32,
          minHeight: 32
        }
      }
    },
    MuiSwitch: {
      styleOverrides: {
        root: {
          width: 48,
          height: 28,
          padding: 0,
          margin: 0
        },
        switchBase: {
          padding: 1,
          top: 1,
          left: 1,
          '&.Mui-checked': {
            color: colors.white,
            '&+.MuiSwitch-track': {
              backgroundColor: '#30D158',
              opacity: 1,
              border: 'none'
            }
          },
          '&$checked, &$colorPrimary$checked, &$colorSecondary$checked': {
            transform: 'translateX(16px)',
            color: colors.white,
            '& + $track': {
              opacity: 1,
              border: 'none'
            }
          }
        },
        thumb: {
          width: 24,
          height: 24
        },
        track: {
          borderRadius: 13,
          border: '1px solid #e9e9ea',
          backgroundColor: '#e9e9ea',
          opacity: 1,
          transition:
            'background-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '& .MuiSvgIcon-root': {
            width: 20,
            height: 20,
            '@keyframes pulse': {
              '0%': {
                transform: 'scale(1)',
                boxShadow: '0 0 0 0 rgba(204, 169, 44, 0.4)'
              },
              '70%': {
                transform: 'scale(2)',
                boxShadow: '0 0 0 5px rgba(204, 169, 44, 0)'
              },
              '100%': {
                transform: 'scale(1)',
                boxShadow: '0 0 0 0 rgba(204, 169, 44, 0)'
              }
            }
          }
        }
      }
    },
    MuiBadge: {
      styleOverrides: {
        root: {
          '& .MuiBadge-badge': {
            width: 20,
            height: 20,
            fontSize: 10,
            letterSpacing: '-0.1px;',
            fontWeight: 700,
            backgroundColor: colors.attentionOrange,
            borderRadius: '50%',
            '&.MuiBadge-dot': {
              width: 8,
              height: 8
            }
          }
        }
      }
    },
    MuiMenuList: {
      styleOverrides: {
        root: {
          padding: '8px'
        }
      }
    }
  },
  palette: {
    action: {
      active: '#000000',
      focus: 'rgba(55, 65, 81, 0.12)',
      hover: 'rgba(55, 65, 81, 0.04)',
      selected: 'rgba(55, 65, 81, 0.08)',
      disabledBackground: 'rgba(55, 65, 81, 0.12)',
      disabled: 'rgba(55, 65, 81, 0.26)'
    },
    background: {
      default: colors.white,
      paper: colors.white
    },
    divider: '#E6E8F0',
    primary: {
      main: colors.black,
      light: '#EBEFF4',
      dark: '#3832A0',
      contrastText: colors.white
    },
    secondary: {
      main: '#10B981',
      light: '#3FC79A',
      dark: '#0B815A',
      contrastText: colors.white
    },
    success: {
      main: '#EBEFF4',
      light: '#43C6B7',
      dark: '#0E8074',
      contrastText: colors.white
    },
    info: {
      main: colors.white,
      light: '#64B6F7',
      dark: '#0B79D0',
      contrastText: colors.white
    },
    warning: {
      main: '#EB543F',
      light: '#FFBF4C',
      dark: '#B27B16',
      contrastText: colors.white
    },
    error: {
      main: '#D14343',
      light: '#DA6868',
      dark: '#922E2E',
      contrastText: colors.white
    },
    text: {
      primary: '#121828',
      secondary: '#65748B',
      disabled: 'rgba(55, 65, 81, 0.48)'
    }
  },
  shape: {
    borderRadius: 8
  },
  shadows: [
    'none',
    '0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1)',
    '0px 1px 2px rgba(100, 116, 139, 0.12)',
    '0px 1px 4px rgba(100, 116, 139, 0.12)',
    '0px 1px 5px rgba(100, 116, 139, 0.12)',
    '0px 1px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 6px rgba(100, 116, 139, 0.12)',
    '0px 3px 6px rgba(100, 116, 139, 0.12)',
    '0px 2px 4px rgba(31, 41, 55, 0.06), 0px 4px 6px rgba(100, 116, 139, 0.12)',
    '0px 5px 12px rgba(100, 116, 139, 0.12)',
    '0px 5px 14px rgba(100, 116, 139, 0.12)',
    '0px 5px 15px rgba(100, 116, 139, 0.12)',
    '0px 6px 15px rgba(100, 116, 139, 0.12)',
    '0px 7px 15px rgba(100, 116, 139, 0.12)',
    '0px 8px 15px rgba(100, 116, 139, 0.12)',
    '0px 9px 15px rgba(100, 116, 139, 0.12)',
    '0px 10px 15px rgba(100, 116, 139, 0.12)',
    '0px 12px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 13px 22px -8px rgba(100, 116, 139, 0.25)',
    '0px 14px 24px -8px rgba(100, 116, 139, 0.25)',
    '0px 10px 10px rgba(31, 41, 55, 0.04), 0px 20px 25px rgba(31, 41, 55, 0.1)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)',
    '0px 25px 50px rgba(100, 116, 139, 0.25)'
  ],
  typography: {
    allVariants: {
      fontWeight: 'reset',
      fontSize: 'reset',
      letterSpacing: 'reset'
    }
  }
};

export const theme = createTheme(themeOptions);
