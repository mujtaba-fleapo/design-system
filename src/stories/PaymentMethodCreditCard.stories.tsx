// PaymentMethodCreditCard.stories.ts|tsx

import { Meta, StoryObj } from '@storybook/react';

import { Alert, Box, Link, Typography } from '@mui/material';
import { PaymentMethodCreditCard } from '../components/payment/PaymentMethodCreditCard';

const meta: Meta<typeof PaymentMethodCreditCard> = {
  component: PaymentMethodCreditCard,
  title: '4. Components/PaymentMethodCreditCard',
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof PaymentMethodCreditCard>;

export const Brand: Story = {
  args: {
    cardNum: 'test card',
    cardExpiration: '4/24'
  }
};

Brand.storyName = `🔶 PaymentMethodCreditCard`;

export const Spanish: Story = {
  args: {
    cardNum: 'publicación',
    cardExpiration: '4/24',
    cardEndingIntext: 'publicación',
    expiresText: 'publicación'
  }
};

Spanish.storyName = `🔶 Spanish`;

export const Arabic: Story = {
  args: {
    cardNum: 'ارسل',
    cardExpiration: '4/24',
    cardEndingIntext: 'ارسل',
    expiresText: 'ارسل',
    locale: 'ar'
  }
};

Arabic.storyName = `🔶 Arabic`;

export const DesktopPaymentMethodCreditCard: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <PaymentMethodCreditCard /> component`}</Alert>
  )
};
export const MobilePaymentMethodCreditCard: Story = {
  render: (args) => (
    <Alert color="error">{`Obsolete: Use <PaymentMethodCreditCard /> component`}</Alert>
  )
};
const FigmaPreview = (props: any): JSX.Element => {
  return (
    <div
      style={{
        width: '90vw',
        height: '90vh'
      }}
    >
      <Box>
        {props.notImplemented && (
          <Typography variant="body1" gutterBottom sx={{ color: 'red' }}>
            NOT IMPLEMENTED
          </Typography>
        )}
        {props.inprogress && (
          <Typography variant="body1" gutterBottom sx={{ color: 'orange' }}>
            IN PROGRESS
          </Typography>
        )}
        {props.ok && (
          <Typography variant="body1" gutterBottom sx={{ color: 'green' }}>
            VERIFIED
          </Typography>
        )}
        <Link target="_blank" href={props.url} variant="body1">
          URL: {props.url}
        </Link>
      </Box>
      <iframe
        title="Figma Preview"
        style={{ border: '1px dotted black' }}
        width="100%"
        height="100%"
        src={props.url}
      ></iframe>
    </div>
  );
};

export const Figma: Story = {
  render: (): JSX.Element => (
    <FigmaPreview
      ok
      url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fl2mfmKnw7R89TAfSaz4p0O%2FFanfix-2.0-Design-System%3Ftype%3Ddesign%26node-id%3D237%253A5035%26mode%3Ddev"
    />
  )
};

Figma.storyName = '🎨 Figma';
