import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Image = ({ color = 'currentColor', size }: IconProps) => {
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
        <path
          d="M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          d="M3 18L6.89247 14.7563C7.24855 14.4595 7.76185 14.4464 8.13266 14.7245L9.9 16.05C10.2556 16.3167 10.7444 16.3167 11.1 16.05L15.7 12.6C16.1418 12.2686 16.7686 12.3582 17.1 12.8L21 18"
          stroke={fill}
          strokeWidth="2"
        />
        <circle cx="9" cy="9" r="2" stroke={fill} strokeWidth="2" />
      </svg>
    </SvgIcon>
  );
};
