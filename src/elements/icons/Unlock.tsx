import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Unlock = ({ color = 'currentColor', size }: IconProps) => {
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
          d="M4 15C4 13.0609 4.01234 12.3285 4.19577 11.7639C4.59145 10.5462 5.54618 9.59145 6.76393 9.19577C7.32849 9.01234 8.06089 9 10 9H14C15.9391 9 16.6715 9.01234 17.2361 9.19577C18.4538 9.59145 19.4086 10.5462 19.8042 11.7639C19.9877 12.3285 20 13.0609 20 15C20 16.9391 19.9877 17.6715 19.8042 18.2361C19.4086 19.4538 18.4538 20.4086 17.2361 20.8042C16.6715 20.9877 15.9391 21 14 21H10C8.06089 21 7.32849 20.9877 6.76393 20.8042C5.54618 20.4086 4.59145 19.4538 4.19577 18.2361C4.01234 17.6715 4 16.9391 4 15Z"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          d="M8 10V7C8 4.79086 9.79086 3 12 3V3"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          d="M16 6V6C16 4.34315 14.6569 3 13 3H12"
          stroke={fill}
          strokeWidth="2"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.47534 13.4729C10.1091 12.8424 11.1367 12.8424 11.7705 13.4729L12 13.7012L12.2295 13.4729C12.8633 12.8424 13.8909 12.8424 14.5247 13.4729C15.1584 14.1033 15.1584 15.1255 14.5247 15.756L12.459 17.8109C12.2055 18.063 11.7945 18.063 11.541 17.8109L9.47534 15.756C8.84155 15.1255 8.84155 14.1033 9.47534 13.4729Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
