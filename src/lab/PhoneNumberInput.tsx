import { styled } from '@mui/material/styles';
import { useState } from 'react';
import PhoneInput, { CountryData } from 'react-phone-input-2';
import { isValidPhoneNumber } from 'react-phone-number-input/input';

const Wrapper = styled('div')`
  .react-tel-input {
    position: relative;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.24px;

    input {
      padding-left: 10px;
      width: 100%;
      height: 45px;
      border: none;
      border-bottom: 1px solid var(--lightgray600);
    }

    :disabled {
      cursor: not-allowed;
    }

    .hide {
      display: none;
    }

    .v-hide {
      visibility: hidden;
    }

    .flag {
      background: none;
    }

    .flag-dropdown {
      position: absolute;
      top: 0;
      bottom: 0;
      padding: 0;

      &:hover,
      &:focus {
        cursor: pointer;
      }

      &.invalid-number {
        border-color: var(--errorRed);
      }

      &.open {
        z-index: 2;
      }
    }

    input[disabled] + .flag-dropdown:hover {
      cursor: default;
    }

    input[disabled] + .flag-dropdown:hover .selected-flag {
      background-color: transparent;
    }

    .selected-flag {
      outline: none;
      position: relative;
      width: 50px;
      height: 100%;

      .flag {
        display: flex;
        justify-content: flex-start;
        height: 100%;
        align-items: center;

        .arrow {
          width: 0;
          height: 0;
          border-left: 3px solid transparent;
          border-right: 3px solid transparent;
          border-top: 4px solid #555;

          &.up {
            border-top: none;
            border-bottom: 4px solid #555;
          }
        }
      }
    }

    .country-list {
      outline: none;
      z-index: 1;
      list-style: none;
      position: absolute;
      box-shadow: 1px 2px 10px rgb(0 0 0 / 10%);
      background-color: white;
      width: 90px;
      max-height: 200px;
      overflow-y: scroll;
      padding: 0;

      .flag {
        display: inline-block;
      }

      .divider {
        padding-bottom: 5px;
        margin-bottom: 5px;
        border-bottom: 1px solid #ccc;
      }

      .country {
        padding: 7px 9px;

        .dial-code {
          color: #6b6b6b;
        }

        &:hover {
          background-color: #f1f1f1;
        }

        &.highlight {
          background-color: #f1f1f1;
        }
      }

      .flag {
        margin-right: 7px;
        margin-top: 2px;
      }

      .country-name {
        display: none;
      }

      .search {
        position: sticky;
        top: 0;
        background-color: var(--white);
        padding: 10px 5px;
      }

      .search-emoji {
        display: none;
      }

      .search-box {
        border: 1px solid #cacaca;
        font-size: 16px;
        line-height: 16px;
        padding: 4px 5px;
        outline: none;
      }

      .no-entries-message {
        padding: 7px 10px 11px;
        opacity: 0.7;
      }
    }

    .invalid-number-message {
      position: absolute;
      z-index: 1;
      font-size: 13px;
      left: 46px;
      top: -8px;
      background: var(--white);
      padding: 0 2px;
      color: var(--errorRed);
    }

    .special-label {
      display: none;
      position: absolute;
      z-index: 1;
      font-size: 13px;
      left: 46px;
      top: -8px;
      background: var(--white);
      padding: 0 2px;
      white-space: nowrap;
    }
  }
`;

interface Props {
  value?: string;
  country?: string;
  onChange: (phone: string) => void;
}

export const PhoneNumberInput = (props: Props) => {
  const [phoneInvalid, setPhoneInvalid] = useState(false);
  const [phone, setPhone] = useState('');

  const _validatePhone = (number: string, formattedNumber: string) => {
    const isInValid = !isValidPhoneNumber(`+${number}`);
    setPhoneInvalid(isInValid);
    setPhone(formattedNumber);
    props.onChange?.(isInValid ? '' : formattedNumber);
  };

  return (
    <Wrapper data-testid="phone-number-input-wrapper-ds">
      <PhoneInput
        country={props.country || 'us'}
        value={props.value}
        inputProps={{
          required: true,
          autoFocus: true,
          autoComplete: 'tel',
          inputMode: 'tel'
        }}
        onChange={(v, data: CountryData, e, f) =>
          _validatePhone(v, e.target.value)
        }
        onEnterKeyPress={(e) => {
          if (!phoneInvalid) props.onChange?.(phone);
        }}
        enableSearch={true}
        disableSearchIcon={true}
        specialLabel={''}
      />
    </Wrapper>
  );
};
