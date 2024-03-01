import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Download = ({ color = 'currentColor', size }: IconProps) => {
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
        <line x1="5" y1="21" x2="19" y2="21" stroke={fill} strokeWidth="2" />
        <line x1="12" y1="3" x2="12" y2="16" stroke={fill} strokeWidth="2" />
        <line
          x1="6.70711"
          y1="11.2929"
          x2="12.7071"
          y2="17.2929"
          stroke={fill}
          strokeWidth="2"
        />
        <line
          y1="-1"
          x2="8.48528"
          y2="-1"
          transform="matrix(-0.707107 0.707107 0.707107 0.707107 18 12)"
          stroke={fill}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
