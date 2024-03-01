import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const List = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_11245)">
          <path d="M20 7H21V5H20V7ZM11 7H20V5H11V7Z" fill={fill} />
          <path d="M20 13H21V11H20V13ZM11 13H20V11H11V13Z" fill={fill} />
          <path d="M20 19H21V17H20V19ZM12 19H20V17H12V19Z" fill={fill} />
          <path
            d="M4 16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14C6.53043 14 7.03914 14.2107 7.41421 14.5858C7.78929 14.9609 8 15.4696 8 16C8 16.591 7.5 17 7 17.5L4 20H8"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 10V4L4 6"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_11245">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
