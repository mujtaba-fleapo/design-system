import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Comment = ({ color = 'currentColor', size }: IconProps) => {
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 17.917C19.8377 17.441 22 14.973 22 12V8C22 4.68629 19.3137 2 16 2H8C4.68629 2 2 4.68629 2 8V12C2 15.3137 4.68629 18 8 18H10.5858L13.5858 21C14.8457 22.2599 17 21.3676 17 19.5858V17.917ZM16 4H8C5.79086 4 4 5.79086 4 8V12C4 14.2091 5.79086 16 8 16H10.5858C11.1162 16 11.6249 16.2107 12 16.5858L15 19.5858V17C15 16.4477 15.4477 16 16 16C18.2091 16 20 14.2091 20 12V8C20 5.79086 18.2091 4 16 4Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
