import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Send = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_11119)">
          <path
            d="M10 14L21 3"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.9996 3L14.4996 21C14.4557 21.0957 14.3853 21.1769 14.2966 21.2338C14.208 21.2906 14.1049 21.3209 13.9996 21.3209C13.8943 21.3209 13.7912 21.2906 13.7025 21.2338C13.6139 21.1769 13.5435 21.0957 13.4996 21L9.99958 14L2.99958 10.5C2.90384 10.4561 2.82271 10.3857 2.76583 10.2971C2.70895 10.2084 2.67871 10.1053 2.67871 10C2.67871 9.89468 2.70895 9.79158 2.76583 9.70295C2.82271 9.61431 2.90384 9.54387 2.99958 9.5L20.9996 3Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_11119">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
