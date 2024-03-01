import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const PlayerPlay = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '20px', height: size || '20px' }}>
      <svg
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.583496 10C0.583496 4.48 5.0635 0 10.5835 0C16.1035 0 20.5835 4.48 20.5835 10C20.5835 15.52 16.1035 20 10.5835 20C5.0635 20 0.583496 15.52 0.583496 10ZM14.5835 10L8.5835 5.5V14.5L14.5835 10Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
