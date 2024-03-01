'use client';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import { FormEventHandler, ReactElement, useEffect, useState } from 'react';
import {
  defaultCreditCardInputText,
  defaultCreditCardInputTextProps
} from '../../default-text';
import { PillButton } from '../../elements/PillButton';
import {
  defaultLocaleValue,
  getLocaleDirection
} from '../../helpers/getLocale';
import { colors } from '../../styles/colors';

const vgsVaultId = 'tntiodlvy7l';
const vgsEnvironment = 'sandbox';

const Wrapper = styled(Box)`
  * {
    box-sizing: border-box;
  }
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI';
  }
  iframe {
    width: 100%;
    height: 100%;
  }
  form {
    width: 100%;
    margin: 10px auto;
  }
  .form-field {
    width: 100%;
    height: 2.6rem;
    position: relative;
    margin-bottom: 0;
    padding: 0px;
  }
`;

interface CreditCardInputProps {
  vgsVaultId?: string;
  vgsEnvironment?: string;
  buttonText?: string;
  buttonIcon?: ReactElement;
  fullWidthButton?: boolean;
  buttonLoading?: boolean;
  accessToken: string;
  handleSubmitNewCard?: (status: any, data: any) => unknown;
  onError: (error: any) => unknown;
  onSubmit?: () => unknown;
  threeDSUrl?: string;
  showZipCode?: boolean;
  text?: defaultCreditCardInputTextProps;
  locale?: string;
}

interface VGSCollectStateParams {
  name: string;
  errorMessages: string[];
  isDirty: boolean;
  isTouched: boolean;
  isFocused: boolean;
  isValid: boolean;
  isEmpty: boolean;
  last4?: string;
  bin?: string;
  cardType?: string;
  errors?: any[];
}

type VGSCollectFormState = Record<string, VGSCollectStateParams> | null;

const fieldStyles = {
  boxSizing: 'border-box',
  height: '34px',
  fontSize: '16px',
  borderRadius: '0',
  appearance: 'none',
  WebkitAppearance: 'none',
  borderBottom: `1px solid ${colors.lightgray[600]}`,
  '&::placeholder': {
    fontSize: '13px'
  }
};

export const CreditCardInputV2 = ({
  locale = defaultLocaleValue,
  text = defaultCreditCardInputText,
  ...props
}: CreditCardInputProps) => {
  const [form, setForm] = useState<any>();
  const [isLoaded, scriptLoaded] = useState(false);
  const [cardFormError, setCardFormError] = useState(false);
  const [cardFormComplete, setCardFormComplete] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://js.verygoodvault.com/vgs-collect/2.18.0/vgs-collect.js';
    script.async = true;
    script.onload = () => scriptLoaded(true);
    document.body.appendChild(script);
  });

  const onUpdateCallback = (fields: VGSCollectFormState) => {
    if (!fields) return;
    for (const fieldKey in fields) {
      if (!fields[fieldKey].isValid) {
        setCardFormError(true);
        return;
      }
      if (fields[fieldKey].isEmpty) {
        setCardFormComplete(false);
        return;
      }
    }
    setCardFormError(false);
    setCardFormComplete(true);
  };

  useEffect(() => {
    if (isLoaded && !form) {
      const vgsForm = window.VGSCollect.create(
        props.vgsVaultId || vgsVaultId,
        props.vgsEnvironment || vgsEnvironment,
        (state) => {
          onUpdateCallback(state);
        }
      );
      setForm(vgsForm);

      vgsForm.field('#cc-holder', {
        type: 'text',
        name: 'cardholderName',
        placeholder: text.cardHolderNamePlaceholderText,
        validations: ['required'],
        css: fieldStyles
      });

      vgsForm.field('#cc-number', {
        type: 'card-number',
        name: 'cardNumber',
        placeholder: text.cardNumberPlaceholderText,
        showCardIcon: { left: 0, top: 18 },
        css: {
          ...fieldStyles,
          padding: '0px 0px 0px 40px',
          paddingRight: 10
        },
        tokenization: {
          format: 'FPE_T_FOUR',
          storage: 'PERSISTENT'
        },
        validations: ['required', 'validCardNumber']
      });

      vgsForm.field('#cc-expiration-date', {
        type: 'card-expiration-date',
        name: 'cardExpirationDate',
        placeholder: text.cardExpirationDatePlaceholderText,
        validations: ['required', 'validCardExpirationDate'],
        css: { ...fieldStyles },
        yearLength: 2
      });

      vgsForm.field('#cc-cvc', {
        type: 'card-security-code',
        name: 'cardCvc',
        placeholder: text.cardCvcPlaceholderText,
        validations: ['required', 'validCardSecurityCode'],
        css: { ...fieldStyles }
      });

      if (props.showZipCode) {
        vgsForm.field('#zip-code', {
          type: 'zip-code',
          name: 'billingZipCode',
          placeholder: text.billingZipCodePlaceholderText,
          validations: ['required'],
          css: { ...fieldStyles }
        });
      }
    }
  }, [isLoaded, form]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    form?.submit(
      '/v2/cards',
      {
        headers: {
          Authorization: `Bearer ${props.accessToken}`
        },
        data: (fields: Record<string, string>) => {
          props.onSubmit?.();
          return {
            ...fields,
            billingZipCode: props.showZipCode ? fields.billingZipCode : '00000'
          };
        }
      },
      (status: number, response: unknown) => {
        console.log(status, response);
        props.handleSubmitNewCard?.(status, response);
      },
      (error: unknown) => {
        console.log(error);
        props.onError?.(error);
      }
    );
  };

  return (
    <Wrapper dir={getLocaleDirection(locale)}>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-field" id="cc-holder" />
        <Grid container spacing={0}>
          <Grid item xs={6}>
            <div
              className="form-field"
              id="cc-number"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={props.showZipCode ? 2.5 : 3}>
            <div
              className="form-field"
              id="cc-expiration-date"
              style={{ width: '100%' }}
            />
          </Grid>
          <Grid item xs={props.showZipCode ? 1.5 : 3}>
            <div className="form-field" id="cc-cvc" style={{ width: '100%' }} />
          </Grid>
          {props.showZipCode && (
            <Grid item xs={2}>
              <div
                className="form-field"
                id="zip-code"
                style={{ width: '100%' }}
              />
            </Grid>
          )}
        </Grid>

        <Box position="relative" zIndex={2} paddingTop={1}>
          <PillButton
            fullWidth={Boolean(props.fullWidthButton)}
            type="submit"
            icon={props.buttonIcon ?? null}
            text={props.buttonText || 'Save Payment Method'}
            disabled={cardFormError || !cardFormComplete}
            loading={props.buttonLoading}
          />
        </Box>
      </form>
    </Wrapper>
  );
};
