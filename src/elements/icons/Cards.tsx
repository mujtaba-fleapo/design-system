import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Cards = ({ color = 'currentColor', size }: IconProps) => {
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
          d="M5 21H15C16.1046 21 17 20.1046 17 19V9C17 7.89543 16.1046 7 15 7H5C3.89543 7 3 7.89543 3 9V19C3 20.1046 3.89543 21 5 21Z"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          d="M3 18.6667L5.89247 16.2563C6.24855 15.9595 6.76186 15.9464 7.13266 16.2245L8.23333 17.05C8.58889 17.3167 9.07778 17.3167 9.43333 17.05L12.7 14.6C13.1418 14.2686 13.7686 14.3582 14.1 14.8L17 18.6667"
          stroke={fill}
          strokeWidth="2"
        />
        <circle
          cx="7.66688"
          cy="11.6666"
          r="1.55556"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          d="M7 3H18C19.6569 3 21 4.34315 21 6V17"
          stroke={fill}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
