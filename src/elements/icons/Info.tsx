import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Info = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_10975)">
          <circle cx="12" cy="12" r="9" stroke={fill} strokeWidth="2" />
          <circle cx="12" cy="8" r="1" fill={fill} />
          <path
            d="M12 12L12 16"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_10975">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
