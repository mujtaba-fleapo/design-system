import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const ChevronLeft = ({ color = 'currentColor', size }: IconProps) => {
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
          x1="14.7071"
          y1="6.70711"
          x2="8.70711"
          y2="12.7071"
          stroke={fill}
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="8.48528"
          y2="-1"
          transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 14 18)"
          stroke={fill}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
