import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const CloseFilled = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);
  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <circle cx="40" cy="40" r="40" fill="black" />
        <path
          d="M53.4677 29.8965L43.3661 39.998L53.4677 50.0995L50.1005 53.4667L39.999 43.3652L29.8974 53.4667L26.5303 50.0995L36.6318 39.998L26.5303 29.8965L29.8974 26.5293L39.999 36.6308L50.1005 26.5293L53.4677 29.8965Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
