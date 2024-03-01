import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import {
  defaultPaymentMethodCreditCardText,
  defaultPaymentMethodCreditCardTextProps
} from '../../default-text';
import { Typography } from '../../elements/Typography';
import { Delete, PaymentIcon } from '../../elements/icons';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';
import { theme } from '../../theme';

interface Props {
  cardType: string;
  cardNum: string;
  cardExpiration: string;
  onActionButtonClick?: () => unknown;
  loading?: boolean;
  locale?: string;
  text?: defaultPaymentMethodCreditCardTextProps;
}

export const PaymentMethodCreditCard = ({
  locale = defaultLocaleValue,
  text = defaultPaymentMethodCreditCardText,
  ...props
}: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        data-testid={`payment-method-credit-card-box-ds`}
        dir={getLocaleDirection(locale)}
        sx={{
          background: colors.white,
          border: `1px solid ${colors.lightgray[500]}`,
          borderRadius: '4px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          padding: 2,
          width: '100%'
        }}
      >
        <Box>
          <PaymentIcon
            data-testid={`payment-method-credit-card-payment-icon-ds`}
            icon="visa"
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flex: 1
          }}
        >
          <Box>
            <Typography className="interSemibold14">
              {`${text.cardEndingInText} `}
              {props.cardNum}
            </Typography>
            <Typography className="interRegular13">
              {`${text.expiresText} `}
              {props.cardExpiration}
            </Typography>
          </Box>

          <IconButton
            data-testid={`payment-method-credit-card-icon-button-ds`}
            size="large"
            edge="end"
            aria-label="more"
            onClick={() => props.onActionButtonClick?.()}
            sx={{
              color: colors.black,
              padding: '6px',
              marginRight: 0
            }}
          >
            {props.loading ? <CircularProgress size={20} /> : <Delete />}
          </IconButton>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
