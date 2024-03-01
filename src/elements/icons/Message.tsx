import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Message = ({
  color = 'currentColor',
  size,
  active,
  hasBadge
}: IconProps) => {
  const fill = translateFill(color);

  return (
    <>
      {active ? (
        <>
          {hasBadge ? (
            <img
              src="https://app.fanfix.io/static/icons/messages-new-filled.png"
              alt="messages"
              style={{ width: size || '16px', height: size || '16px' }}
            />
          ) : (
            <img
              src="https://app.fanfix.io/static/icons/messages-filled.png"
              alt="messages"
              style={{ width: size || '16px', height: size || '16px' }}
            />
          )}
        </>
      ) : (
        <>
          {hasBadge ? (
            <SvgIcon sx={{ width: size || '16px', height: size || '16px' }}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3H11C6.58172 3 3 6.58172 3 11V13C3 17.4183 6.58172 21 11 21H21V12"
                  stroke={fill}
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 14C9 14.8284 8.32843 15.5 7.5 15.5C6.67157 15.5 6 14.8284 6 14C6 13.1716 6.67157 12.5 7.5 12.5C8.32843 12.5 9 13.1716 9 14ZM13.5 14C13.5 14.8284 12.8284 15.5 12 15.5C11.1716 15.5 10.5 14.8284 10.5 14C10.5 13.1716 11.1716 12.5 12 12.5C12.8284 12.5 13.5 13.1716 13.5 14ZM16.5 15.5C17.3284 15.5 18 14.8284 18 14C18 13.1716 17.3284 12.5 16.5 12.5C15.6716 12.5 15 13.1716 15 14C15 14.8284 15.6716 15.5 16.5 15.5Z"
                  fill={fill}
                />
              </svg>
            </SvgIcon>
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
                  d="M3 10C3 6.13401 6.13401 3 10 3H14C17.866 3 21 6.13401 21 10V21H10C6.13401 21 3 17.866 3 14V10Z"
                  stroke={fill}
                  strokeWidth="2"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 14C9 14.8284 8.32843 15.5 7.5 15.5C6.67157 15.5 6 14.8284 6 14C6 13.1716 6.67157 12.5 7.5 12.5C8.32843 12.5 9 13.1716 9 14ZM13.5 14C13.5 14.8284 12.8284 15.5 12 15.5C11.1716 15.5 10.5 14.8284 10.5 14C10.5 13.1716 11.1716 12.5 12 12.5C12.8284 12.5 13.5 13.1716 13.5 14ZM16.5 15.5C17.3284 15.5 18 14.8284 18 14C18 13.1716 17.3284 12.5 16.5 12.5C15.6716 12.5 15 13.1716 15 14C15 14.8284 15.6716 15.5 16.5 15.5Z"
                  fill={fill}
                />
              </svg>
            </SvgIcon>
          )}
        </>
      )}
    </>
  );
};
