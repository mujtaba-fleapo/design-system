import { styled } from '@mui/material/styles';

const Wrapper = styled('div')`
  width: 128px;
  height: 80px;
  zoom: 0.3;
  background: url('https://app.fanfix.io/static/images/payment_method_sprites.png');

  &.visa {
    background-position: -10px -10px;
  }

  &.mastercard {
    background-position: -158px -10px;
  }

  &.maestro {
    background-position: -306px -10px;
  }

  &.cirrus {
    background-position: -454px -10px;
  }

  &.paypal {
    background-position: -602px -10px;
  }

  &.westernunion {
    background-position: -750px -10px;
  }

  &.visaelectron {
    background-position: -898px -10px;
  }

  &.amazon {
    background-position: -1046px -10px;
  }

  &.worldpay {
    background-position: -1194px -10px;
  }

  &.dinersclub {
    background-position: -1342px -10px;
  }

  &.bg {
    background-position: -1490px -10px;
  }

  &.skrill {
    background-position: -1638px -10px;
  }

  &.sage {
    background-position: -1786px -10px;
  }

  &.discover {
    background-position: -1934px -10px;
  }

  &.skrillmoneybookers {
    background-position: -2082px -10px;
  }

  &.jcb {
    background-position: -2230px -10px;
  }

  &.ebay {
    background-position: -2378px -10px;
  }

  &.eway {
    background-position: -2526px -10px;
  }

  &.bg {
    background-position: -2674px -10px;
  }

  &.solo {
    background-position: -2822px -10px;
  }

  &.directdebit {
    background-position: -2970px -10px;
  }

  &.amex {
    background-position: -3118px -10px;
  }

  &.shopify {
    background-position: -3266px -10px;
  }

  &.bg {
    background-position: -3414px -10px;
  }
`;

interface PaymentProps {
  icon: string;
  className?: string;
}

export const PaymentIcon = ({ icon, className }: PaymentProps) => {
  return <Wrapper className={`card-icon ${icon} ${className}`} />;
};
