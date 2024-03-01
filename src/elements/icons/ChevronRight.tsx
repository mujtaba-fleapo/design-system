import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const ChevronRight = ({ color = 'currentColor', size }: IconProps) => {
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
        <line
          y1="-1"
          x2="8.48528"
          y2="-1"
          transform="matrix(0.707107 0.707107 0.707107 -0.707107 10 6)"
          stroke={fill}
          strokeWidth="2"
        />
        <line
          x1="9.29289"
          y1="17.2929"
          x2="15.2929"
          y2="11.2929"
          stroke={fill}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
