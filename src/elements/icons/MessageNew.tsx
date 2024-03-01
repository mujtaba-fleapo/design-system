import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const MessageNew = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
      >
        <path
          d="M12 5H9C5.68629 5 3 7.68629 3 11V17C3 20.3137 5.68629 23 9 23H21V14"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 16C9 16.8284 8.32843 17.5 7.5 17.5C6.67157 17.5 6 16.8284 6 16C6 15.1716 6.67157 14.5 7.5 14.5C8.32843 14.5 9 15.1716 9 16ZM13.5 16C13.5 16.8284 12.8284 17.5 12 17.5C11.1716 17.5 10.5 16.8284 10.5 16C10.5 15.1716 11.1716 14.5 12 14.5C12.8284 14.5 13.5 15.1716 13.5 16ZM16.5 17.5C17.3284 17.5 18 16.8284 18 16C18 15.1716 17.3284 14.5 16.5 14.5C15.6716 14.5 15 15.1716 15 16C15 16.8284 15.6716 17.5 16.5 17.5Z"
          fill={fill}
        />
        <line x1="16" y1="5" x2="26" y2="5" stroke={fill} strokeWidth="2" />
        <line
          x1="21"
          y1="4.37114e-08"
          x2="21"
          y2="10"
          stroke={fill}
          strokeWidth="2"
        />
      </svg>
    </SvgIcon>
  );
};
