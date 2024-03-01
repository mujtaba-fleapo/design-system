import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Block = ({ color = 'currentColor', size }: IconProps) => {
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
        <circle cx="9" cy="8" r="3" stroke={fill} strokeWidth="2" />
        <path
          d="M15 20C15 16.6863 12.3137 14 9 14C5.68629 14 3 16.6863 3 20"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          d="M16 12C16 12.7956 16.3161 13.5587 16.8787 14.1213C17.4413 14.6839 18.2044 15 19 15C19.7956 15 20.5587 14.6839 21.1213 14.1213C21.6839 13.5587 22 12.7956 22 12C22 11.2044 21.6839 10.4413 21.1213 9.87868C20.5587 9.31607 19.7956 9 19 9C18.2044 9 17.4413 9.31607 16.8787 9.87868C16.3161 10.4413 16 11.2044 16 12Z"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 14L21 10"
          stroke={fill}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
