import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const PlayerVolume = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '11px', height: size || '10px' }}>
      <svg
        width="11"
        height="10"
        viewBox="0 0 11 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 3.28962V6.71038H2.2805L5.13113 9.561V0.438997L2.2805 3.28962H0ZM7.69669 5C7.69669 3.99088 7.11517 3.12429 6.27138 2.70239V7.2919C7.11517 6.87571 7.69669 6.00912 7.69669 5ZM6.27138 0V1.17446C7.91904 1.66477 9.12201 3.1927 9.12201 5C9.12201 6.8073 7.91904 8.33523 6.27138 8.82554V10C8.55758 9.48119 10.2623 7.44014 10.2623 5C10.2623 2.55986 8.55758 0.518814 6.27138 0V0Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
