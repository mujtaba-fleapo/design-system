export const getLocaleDirection = (locale: string | undefined) => {
  if (locale === 'ar') {
    return 'rtl';
  }
  return 'ltr';
};

export const defaultLocaleValue = 'en';
