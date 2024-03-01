import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Plus = ({ color = 'currentColor', size }: IconProps) => {
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
        <line x1="12" y1="2" x2="12" y2="22" stroke={fill} strokeWidth="2" />
        <line x1="22" y1="12" x2="2" y2="12" stroke={fill} strokeWidth="2" />
      </svg>
    </SvgIcon>
  );
};
