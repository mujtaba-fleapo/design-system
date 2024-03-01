import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Unblock = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 11C10.6569 11 12 9.65685 12 8C12 6.34315 10.6569 5 9 5C7.34315 5 6 6.34315 6 8C6 9.65685 7.34315 11 9 11Z"
          stroke={fill}
        />
        <path
          d="M15 20C15 16.6863 12.3137 14 9 14C5.68629 14 3 16.6863 3 20"
          stroke={fill}
        />
        <path
          d="M16 12C16 12.7956 16.3161 13.5587 16.8787 14.1213C17.4413 14.6839 18.2044 15 19 15C19.7956 15 20.5587 14.6839 21.1213 14.1213C21.6839 13.5587 22 12.7956 22 12C22 11.2044 21.6839 10.4413 21.1213 9.87868C20.5587 9.31607 19.7956 9 19 9C18.2044 9 17.4413 9.31607 16.8787 9.87868C16.3161 10.4413 16 11.2044 16 12Z"
          stroke={fill}
        />
        <path d="M17 14L18 13" stroke={fill} />
        <path d="M20 11L21 10" stroke={fill} />
      </svg>
    </SvgIcon>
  );
};
