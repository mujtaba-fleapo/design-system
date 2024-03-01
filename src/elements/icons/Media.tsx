import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Media = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_11240)">
          <path
            d="M3.6041 7.19689L10.7421 4.08789C10.8599 4.0374 10.9866 4.01101 11.1147 4.01027C11.2429 4.00953 11.3699 4.03445 11.4882 4.08356C11.6066 4.13268 11.7139 4.205 11.8039 4.29625C11.8939 4.3875 11.9647 4.49584 12.0121 4.61489L16.9361 16.5169C17.0385 16.7582 17.0419 17.0301 16.9458 17.274C16.8497 17.5179 16.6616 17.7143 16.4221 17.8209L9.2851 20.9299C9.16726 20.9805 9.04047 21.007 8.91222 21.0079C8.78396 21.0087 8.65684 20.9838 8.53836 20.9347C8.41988 20.8856 8.31245 20.8132 8.2224 20.7219C8.13236 20.6305 8.06153 20.5221 8.0141 20.4029L3.0901 8.49989C2.98775 8.25854 2.98427 7.98665 3.08041 7.74277C3.17654 7.49888 3.3646 7.30349 3.6041 7.19689Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 4H16C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V8.5"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
          <path
            d="M20 6C20.264 6.112 20.52 6.217 20.768 6.315C21.0121 6.41859 21.2051 6.6149 21.3045 6.86075C21.4039 7.1066 21.4015 7.38187 21.298 7.626L19 13"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_11240">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
