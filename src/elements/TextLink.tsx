import Link from '@mui/material/Link';
import { Typography } from '../elements/Typography';
import { ChevronRight } from '../elements/icons';
import { defaultLocaleValue, getLocaleDirection } from '../helpers/getLocale';

interface Props {
  url: string;
  text: string;
  locale?: string;
}

export const TextLink = ({ locale = defaultLocaleValue, ...props }: Props) => {
  return (
    <Link
      data-testid={`text-link-${props.text
        .replace(/\s+/g, '-')
        .toLowerCase()}-ds`}
      dir={getLocaleDirection(locale)}
      href={props.url}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        color: 'black',
        textDecoration: 'none',
        '& svg': {
          width: '16px',
          height: '16px'
        }
      }}
    >
      <Typography className="interSemibold14">{props.text}</Typography>
      <ChevronRight color="#000" />
    </Link>
  );
};
