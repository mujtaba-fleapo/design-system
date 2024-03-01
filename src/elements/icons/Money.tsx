import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Money = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_11001)">
          <path
            d="M16 7H10.5C9.11929 7 8 8.11929 8 9.5V9.5C8 10.8807 9.11929 12 10.5 12H13.5C14.8807 12 16 13.1193 16 14.5V14.5C16 15.8807 14.8807 17 13.5 17H8"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12.5"
            y1="6"
            x2="12.5"
            y2="3"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12.5"
            y1="21"
            x2="12.5"
            y2="18"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_11001">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
