import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const PlayerBackward = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '15px', height: size || '10px' }}>
      <svg
        width="15"
        height="10"
        viewBox="0 0 15 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.50016 5L14.5835 10V0L7.50016 5ZM0.000163108 5L7.0835 10V0L0.000163108 5Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
