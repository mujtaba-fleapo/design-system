import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';
import { translateFill } from './translate-fill';

export const Expand = ({ color = 'currentColor', size }: IconProps) => {
  const fill = translateFill(color);

  return (
    <SvgIcon>
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.33398 4.16732V2.50065C1.33398 2.05862 1.50958 1.6347 1.82214 1.32214C2.1347 1.00958 2.55862 0.833984 3.00065 0.833984H4.66732"
          stroke={fill}
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1.33398 10.834V12.5007C1.33398 12.9427 1.50958 13.3666 1.82214 13.6792C2.1347 13.9917 2.55862 14.1673 3.00065 14.1673H4.66732"
          stroke={fill}
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.334 0.833984H13.0007C13.4427 0.833984 13.8666 1.00958 14.1792 1.32214C14.4917 1.6347 14.6673 2.05862 14.6673 2.50065V4.16732"
          stroke={fill}
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M11.334 14.1673H13.0007C13.4427 14.1673 13.8666 13.9917 14.1792 13.6792C14.4917 13.3666 14.6673 12.9427 14.6673 12.5007V10.834"
          stroke={fill}
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
};
