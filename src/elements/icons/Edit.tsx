import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Edit = ({ color = 'currentColor', size }: IconProps) => {
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
        <g clipPath="url(#clip0_2136_11252)">
          <path
            d="M4 20.0001H8L18.5 9.50006C18.7626 9.23741 18.971 8.92561 19.1131 8.58245C19.2553 8.23929 19.3284 7.87149 19.3284 7.50006C19.3284 7.12862 19.2553 6.76083 19.1131 6.41767C18.971 6.07451 18.7626 5.7627 18.5 5.50006C18.2374 5.23741 17.9256 5.02907 17.5824 4.88693C17.2392 4.74479 16.8714 4.67163 16.5 4.67163C16.1286 4.67163 15.7608 4.74479 15.4176 4.88693C15.0744 5.02907 14.7626 5.23741 14.5 5.50006L4 16.0001V20.0001Z"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 6.5L17.5 10.5"
            stroke={fill}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0_2136_11252">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </SvgIcon>
  );
};
