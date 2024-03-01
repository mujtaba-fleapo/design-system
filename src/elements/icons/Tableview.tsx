import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Tableview = ({ color = 'currentColor', size }: IconProps) => {
  const fillColor = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <g clipPath="url(#clip0_1991_94923)">
          <rect
            x="3.5"
            y="4"
            width="13"
            height="2.25"
            stroke={fillColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3.5"
            y="9"
            width="13"
            height="2.25"
            stroke={fillColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="3.5"
            y="14"
            width="13"
            height="2.25"
            stroke={fillColor}
            strokeWidth="1.25"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_1991_94923">
            <rect width="20" height="20" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
