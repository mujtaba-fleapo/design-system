import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Subscription = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon
      sx={{
        width: size || '16px',
        height: size || '16px'
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="9" cy="8" r="3" stroke={fill} strokeWidth="2" />
        <path
          d="M15 20C15 16.6863 12.3137 14 9 14C5.68629 14 3 16.6863 3 20"
          stroke={fill}
          strokeWidth="2"
        />
        <line
          x1="19"
          y1="10"
          x2="19"
          y2="14"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="12"
          x2="17"
          y2="12"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </SvgIcon>
  );
};
