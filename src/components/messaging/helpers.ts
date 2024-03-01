import { defaultMessageThreadText } from '../../default-text';

export const formatExpiryString = (expiresAt: string) => {
  // this function formats the expiry string so that it returns the time left in the format of 1d 2h 3m
  const expiryDate = new Date(expiresAt);
  const currentDate = new Date();
  const diff = expiryDate.getTime() - currentDate.getTime();
  if (diff < 0) return defaultMessageThreadText.expiredText;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  let expiryString = defaultMessageThreadText.expiresInText;
  if (days > 0) expiryString += `${days}${defaultMessageThreadText.dText} `;
  if (hours > 0) expiryString += `${hours}${defaultMessageThreadText.hrText} `;
  if (minutes > 0)
    expiryString += `${minutes}${defaultMessageThreadText.mText} `;
  expiryString += `${seconds}${defaultMessageThreadText.sText} `;
  return expiryString;
};

export const currencyFormatter = {
  formatDollarAmount: (amount: number, excludeDecimals?: boolean) => {
    if (excludeDecimals) return `$${amount}`;
    const USD = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
    return USD;
  },
  formatCentsToDollar: (amount: number, excludeDecimals?: boolean) => {
    return currencyFormatter.formatDollarAmount(amount / 100, excludeDecimals);
  },
  formatDollarToCents: (amount: number) => {
    return Math.round(amount * 100);
  }
};
