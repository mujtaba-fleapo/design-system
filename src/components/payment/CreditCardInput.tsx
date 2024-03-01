import { ThemeProvider } from '@emotion/react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import {
  ICollectFormPayloadStructure,
  VGSCollectForm,
  VGSCollectFormState,
  VGSCollectProvider,
  VGSCollectVaultEnvironment
} from '@vgs/collect-js-react';
import { ReactElement, useState } from 'react';
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
import { theme } from '../../theme';

const vgsVaultId = 'tntiodlvy7l';
const vgsEnvironment = 'sandbox';

const {
  CardNumberField,
  CardExpirationDateField,
  CardSecurityCodeField,
  TextField
} = VGSCollectForm;

const Wrapper = styled(Box)`
  iframe {
    width: 100%;
    height: 34px;
  }
  label {
    display: inline-block;
    font-size: 16px;
    margin-bottom: 0.6rem;
    text-transform: uppercase;
  }
  #cc-holder,
  .single-line-form {
    display: flex;
    justify-content: space-between;
    border-radius: 0;
    background-color: var(--white);
    margin: 0;
  }
  #cc-holder {
    margin-bottom: 16px;
  }
  .single-line-form div {
    flex: 1;
  }
  .single-line-form div:nth-of-type(1) {
    flex-grow: 5;
  }
  .single-line-form div:nth-of-type(2) {
    flex-grow: 2;
  }
  .form-field {
    height: 100%;
  }
  .form-field-group {
    display: flex;
    flex-flow: wrap;
  }
  .form-field-group div {
    flex: 0 0 50%;
  }
  .form-field-group div:first-of-type div {
    border-radius: 4px 0 0 4px;
    clip-path: inset(-3px 0px -3px -3px);
  }
  .form-field-group div:last-child div {
    border-radius: 0 4px 4px 0;
  }
`;

interface CreditCardInputProps {
  vgsVaultId?: string;
  vgsEnvironment?: VGSCollectVaultEnvironment;
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
  locale?: string;
  text?: defaultCreditCardInputTextProps;
}

export const CreditCardInput = ({
  locale = defaultLocaleValue,
  ...props
}: CreditCardInputProps) => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper className="payment-cards" dir={getLocaleDirection(locale)}>
        <VGSCollectProvider>
          <VGSForm {...props} />
        </VGSCollectProvider>
      </Wrapper>
    </ThemeProvider>
  );
};

const VGSForm = ({
  text = defaultCreditCardInputText,
  ...props
}: CreditCardInputProps) => {
  const [cardFormError, setCardFormError] = useState(false);
  const [cardFormComplete, setCardFormComplete] = useState(false);

  const fieldStyles = {
    boxSizing: 'border-box',
    height: '34px',
    fontSize: '16px',
    borderRadius: '0',
    appearance: 'none',
    WebkitAppearance: 'none',
    borderBottom: `1px solid ${colors.lightgray[600]}`
  };

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

  const handleFormSubmitSuccess = (status: any, data: any) => {
    props.handleSubmitNewCard?.(status, data);
  };

  const handleFormSubmitError = (error: any) => {
    props.onError(error);
  };

  return (
    <VGSCollectForm
      data-testid={`credit-card-input-form-ds`}
      vaultId={props.vgsVaultId || vgsVaultId}
      environment={props.vgsEnvironment || vgsEnvironment}
      action="/v2/cards"
      submitParameters={{
        headers: {
          Authorization: `Bearer ${props.accessToken}`
        },
        data: (fields: ICollectFormPayloadStructure) => {
          props.onSubmit?.();
          return {
            ...fields,
            billingZipCode: props.showZipCode ? fields.billingZipCode : '00000'
          };
        }
      }}
      onSubmitCallback={handleFormSubmitSuccess}
      onErrorCallback={handleFormSubmitError}
      onUpdateCallback={onUpdateCallback}
    >
      <Box className="form-field">
        <TextField
          name="cardholderName"
          className="vgs-field"
          css={fieldStyles}
          placeholder={text.cardHolderNamePlaceholderText}
          validations={['required']}
          type="text"
          inputMode="text"
        />
      </Box>
      <Box
        className="single-line-form"
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: 2
        }}
      >
        <Box className="form-field card-name-text" sx={{ width: '100%' }}>
          <CardNumberField
            name="cardNumber"
            validations={['required', 'validCardNumber']}
            placeholder={text.cardNumberPlaceholderText}
            showCardIcon={{ left: 0, top: 18 }}
            css={{
              padding: '0px 0px 0px 40px',
              ...fieldStyles
            }}
            tokenization={{
              format: 'FPE_T_FOUR',
              storage: 'PERSISTENT'
            }}
          />
        </Box>

        <Box className="form-field" sx={{ width: '20%' }}>
          <CardExpirationDateField
            name="cardExpirationDate"
            validations={['required', 'validCardExpirationDate']}
            placeholder={text.cardExpirationDatePlaceholderText}
            yearLength={2}
            css={fieldStyles}
          />
        </Box>

        <Box className="form-field" sx={{ width: '10%' }}>
          <CardSecurityCodeField
            name="cardCvc"
            validations={['required', 'validCardSecurityCode']}
            placeholder={text.cardCvcPlaceholderText}
            css={fieldStyles}
          />
        </Box>

        {props.showZipCode && (
          <Box className="form-field" sx={{ width: '10%' }}>
            <VGSCollectForm.ZipCodeField
              name="billingZipCode"
              className="vgs-field"
              css={fieldStyles}
              validations={['required']}
              placeholder={text.billingZipCodePlaceholderText}
            />
          </Box>
        )}
      </Box>

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
    </VGSCollectForm>
  );
};
