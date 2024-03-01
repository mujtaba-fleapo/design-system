import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const PlayerForward = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon sx={{ width: size || '15px', height: size || '10px' }}>
      <svg
        width="16"
        height="10"
        viewBox="0 0 16 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.66683 5L0.583496 10V0L7.66683 5ZM15.1668 5L8.0835 10V0L15.1668 5Z"
          fill={fill}
        />
      </svg>
    </SvgIcon>
  );
};
