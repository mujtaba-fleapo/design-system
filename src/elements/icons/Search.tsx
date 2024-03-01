import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Search = ({ color = 'currentColor', size, active }: IconProps) => {
  const fill = translateFill(color);

  return (
    <>
      {active ? (
        <img
          src="https://app.fanfix.io/static/icons/explore-filled.png"
          alt="explore"
          style={{ width: size || '16px', height: size || '16px' }}
        />
      ) : (
        <SvgIcon
          sx={{
            width: size || '16px',
            height: size || '16px',
            cursor: 'pointer'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="10" cy="10" r="7" stroke={fill} strokeWidth="2" />
            <path d="M20 20L15 15" stroke={fill} strokeWidth="2" />
          </svg>
        </SvgIcon>
      )}
    </>
  );
};
