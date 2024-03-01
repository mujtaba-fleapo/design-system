import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Circlemoney = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_10995)">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="9"
            stroke={fill}
            strokeWidth="2"
          />
          <path
            d="M14 9.5H11.25C10.5596 9.5 10 10.0596 10 10.75V10.75C10 11.4404 10.5596 12 11.25 12H12.75C13.4404 12 14 12.5596 14 13.25V13.25C14 13.9404 13.4404 14.5 12.75 14.5H10"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="8.5"
            x2="12"
            y2="8"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="16"
            x2="12"
            y2="15.5"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_10995">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
