import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Messageblast = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_11144)">
          <path
            d="M11 12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13C12.2652 13 12.5196 12.8946 12.7071 12.7071C12.8946 12.5196 13 12.2652 13 12C13 11.7348 12.8946 11.4804 12.7071 11.2929C12.5196 11.1054 12.2652 11 12 11C11.7348 11 11.4804 11.1054 11.2929 11.2929C11.1054 11.4804 11 11.7348 11 12Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 7C11.0111 7 10.0444 7.29324 9.22215 7.84265C8.39991 8.39206 7.75904 9.17295 7.3806 10.0866C7.00217 11.0002 6.90315 12.0055 7.09608 12.9755C7.289 13.9454 7.76521 14.8363 8.46447 15.5355C9.16373 16.2348 10.0546 16.711 11.0246 16.9039C11.9945 17.0969 12.9998 16.9978 13.9134 16.6194C14.827 16.241 15.6079 15.6001 16.1574 14.7779C16.7068 13.9556 17 12.9889 17 12"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.0005 3.0549C11.1465 2.84691 9.27379 3.22018 7.64127 4.12307C6.00876 5.02596 4.69716 6.41385 3.88791 8.09476C3.07867 9.77566 2.81177 11.6665 3.12413 13.5057C3.4365 15.345 4.3127 17.0417 5.63152 18.3611C6.95033 19.6806 8.6466 20.5577 10.4857 20.871C12.3247 21.1843 14.2157 20.9183 15.897 20.1099C17.5783 19.3015 18.9669 17.9906 19.8706 16.3586C20.7743 14.7265 21.1485 12.8539 20.9415 10.9999"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 6V9H18L21 6H18V3L15 6Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15 9L12 12"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_11144">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
