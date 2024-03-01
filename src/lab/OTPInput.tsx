import { useState } from 'react';
import OtpInput from 'react18-input-otp';

interface Props {
  onChange?: (e: string) => void;
}

export const OTPInput = (props: Props) => {
  const [otp, setOtp] = useState('');

  const handleChange = (e: any) => {
    setOtp(e);
    if (e.length === 6) props.onChange?.(e);
  };

  return (
    <OtpInput
      data-testid="otp-input-ds"
      autoComplete="one-time-code"
      shouldAutoFocus
      isInputNum
      value={otp}
      onChange={handleChange}
      numInputs={6}
      containerStyle={{ width: '100%' }}
      inputStyle={{
        width: '44px',
        borderRadius: '3px',
        height: '52px',
        margin: '0 4px',
        border: '1px solid black',
        fontSize: '18px',
        fontWeight: '500',
        letterSpacing: '-0.27px'
      }}
    />
  );
};
