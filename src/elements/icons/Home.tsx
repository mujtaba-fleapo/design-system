import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Home = ({ color = 'currentColor', size, active }: IconProps) => {
  const fill = translateFill(color);

  return (
    <>
      {active ? (
        <img
          src="https://app.fanfix.io/static/icons/home-filled.png"
          alt="home"
          style={{ width: size || '16px', height: size || '16px' }}
        />
      ) : (
        <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 8L5 18C5 19.6569 6.34315 21 8 21H16C17.6569 21 19 19.6569 19 18V4"
              stroke={fill}
              strokeWidth="2"
            />
            <path
              d="M2 11.1667L9.8826 3.94095C11.0666 2.85562 12.8954 2.89536 14.0311 4.03109L22 12"
              stroke={fill}
              strokeWidth="2"
            />
            <path
              d="M10 20V15C10 13.8954 10.8954 13 12 13V13C13.1046 13 14 13.8954 14 15V20"
              stroke={fill}
              strokeWidth="2"
            />
          </svg>
        </SvgIcon>
      )}
    </>
  );
};
