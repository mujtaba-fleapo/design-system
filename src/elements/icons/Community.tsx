import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Community = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <circle cx="8" cy="6" r="2" stroke={fill} strokeWidth="2" />
        <path
          d="M11 12C11 10.3431 9.65685 9 8 9C6.34315 9 5 10.3431 5 12"
          stroke={fill}
          strokeWidth="2"
        />
        <circle cx="16" cy="6" r="2" stroke={fill} strokeWidth="2" />
        <path
          d="M19 12C19 10.3431 17.6569 9 16 9C14.3431 9 13 10.3431 13 12"
          stroke={fill}
          strokeWidth="2"
        />
        <circle cx="8" cy="15" r="2" stroke={fill} strokeWidth="2" />
        <path
          d="M11 21C11 19.3431 9.65685 18 8 18C6.34315 18 5 19.3431 5 21"
          stroke={fill}
          strokeWidth="2"
        />
        <circle cx="16" cy="15" r="2" stroke={fill} strokeWidth="2" />
        <path
          d="M19 21C19 19.3431 17.6569 18 16 18C14.3431 18 13 19.3431 13 21"
          stroke={fill}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
