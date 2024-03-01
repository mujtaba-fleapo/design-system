import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Live = ({ color = 'currentColor', size, active }: IconProps) => {
  const fill = translateFill(color);
  return (
    <>
      {active ? (
        <img
          src="https://app.fanfix.io/static/icons/live-filled.png"
          alt="live"
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
              d="M14 3H9C5.68629 3 3 5.68629 3 9V15C3 18.3137 5.68629 21 9 21H15C18.3137 21 21 18.3137 21 15V10"
              stroke={fill}
              strokeWidth="2"
            />
            <circle cx="19" cy="5" r="2" stroke={fill} strokeWidth="2" />
            <path
              d="M12 9L10 12H14L12 15"
              stroke={fill}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </SvgIcon>
      )}
    </>
  );
};
