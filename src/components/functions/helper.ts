import { differenceInSeconds, isToday, isYesterday } from 'date-fns';
import dayjs from 'dayjs';
import _ from 'lodash';

export const validateEmail = (email: string) => {
  if (/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,10})+$/.test(email)) return true;
  return false;
};
export const isAlpha = (str: string) => /^[A-Za-z\s]{0,50}$/.test(str);
export const isUserName = (str: string) => /^[a-z0-9_.-]{0,50}$/.test(str);

export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export function formatDate(isoDateString: string) {
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  const date = new Date(isoDateString);
  return date.toLocaleDateString('en-US', options as any);
}
export const capitalize = (str: string) => {
  return str.replace(/\b(\w)/g, (char) => char.toUpperCase());
};

export const usernameHelper = (username: string) => {
  return `/@${username}`;
};

export const defaultLocaleValue = 'en';

export const getLocaleDirection = (locale: string | undefined) => {
  if (locale === 'ar') {
    return 'rtl';
  }
  return 'ltr';
};

export const currencyFormatter = {
  formatDollarAmount: (
    amount: number,
    excludeDecimals?: boolean,
    withoutDollarSign?: boolean
  ) => {
    if (excludeDecimals) return `$${amount}`;
    const USD = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
    if (withoutDollarSign) return USD.split('$')[1];
    return USD;
  },
  formatCentsToDollar: (amount: number, excludeDecimals?: boolean) => {
    return currencyFormatter.formatDollarAmount(amount / 100, excludeDecimals);
  },
  formatDollarToCents: (amount: number) => {
    return Math.round(amount * 100);
  }
};

export const cookieDomain = () => {
  if (typeof window === 'undefined') return undefined;
  if (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1'
  ) {
    return undefined;
  }

  const parts = window.location.hostname.split('.');
  const domain = parts.slice(-2).join('.');
  return domain;
};

export const restrictedUsernameStrings: string[] = [
  'home',
  'explore',
  'messages',
  'account',
  'media',
  'vault',
  'notifications',
  'login',
  'reset-password',
  'forgot-password',
  'about-us',
  'contact-us',
  'terms-and-condition',
  'community',
  'dashboard',
  'insights',
  'posts',
  'profile',
  'settings',
  'onboarding',
  'approval',
  'sign-up',
  'terms-of-service',
  'privacy-policy',
  'content-guidelines'
];

export const isFullName = (fullName: string) => {
  if (!fullName) return false;
  return /^[a-zA-Z]+(?:\s[a-zA-Z]+)+/g.test(fullName);
};

export const validatePassword = (password: string) => {
  if (password.length >= 6) return true;
  return false;
};

export const shuffleArrayContents = (arr: any[]) => {
  return _.shuffle(arr);
};

export const getRelativeDate = (timestamp: number | string) => {
  const msgDate = new Date(timestamp);
  const todayDate = new Date();
  const secondsElapsed = differenceInSeconds(todayDate, msgDate);

  if (isToday(msgDate)) {
    if (secondsElapsed < 60) {
      return `${secondsElapsed}s ago`;
    } else if (secondsElapsed < 60 * 60) {
      const mins = Math.round(secondsElapsed / 60);
      return `${mins}m ago`;
    } else {
      const hrs = Math.round(secondsElapsed / (60 * 60));
      return `${hrs}hr${hrs > 1 ? 's' : ''} ago`;
    }
  } else if (isYesterday(msgDate)) return 'Yesterday';
  else if (secondsElapsed < 7 * 24 * 60 * 60) {
    const days = Math.ceil(secondsElapsed / (24 * 60 * 60));
    return `${days}d ago`;
  } else if (secondsElapsed < 30 * 24 * 60 * 60) {
    const weeks = Math.ceil(secondsElapsed / (7 * 24 * 60 * 60));
    return `${weeks}w ago`;
  } else if (secondsElapsed < 365 * 24 * 60 * 60) {
    const months = Math.ceil(secondsElapsed / (30 * 24 * 60 * 60));
    return `${months}mo ago`;
  } else {
    const years = Math.ceil(secondsElapsed / (365 * 24 * 60 * 60));
    return `${years}y ago`;
  }
};

export const convertNumToLocal = (num: number, isRevenue?: boolean) => {
  const val = isRevenue ? Math.round(num / 100) : num;
  return val ? Number(val).toLocaleString() : 0;
};

export const getTodaysDate = (expiring?: boolean) => {
  const currentDate = dayjs();
  const date = dayjs(currentDate.toDate());
  return expiring
    ? date.add(1, 'hour').format('MM/DD/YY HH:mm')
    : date.format('MM/DD/YY HH:mm');
};

export const getTime = (dateString: string) => {
  const date = new Date(dateString);
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export const formatCurrency = (val: string | number) => {
  return ` $${Number(val).toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  })} `;
};
