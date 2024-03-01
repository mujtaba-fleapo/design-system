import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { IconProps } from './IconProps';

export const PlayIcon = ({
  color = 'currentColor',
  size,
  onClick
}: IconProps) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.50)',
        // backdropFilter: 'blur(10px)',
        maxWidth: '80px',
        maxHeight: '80px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        height: '50%',
        aspectRatio: '1/1'
      }}
      onClick={onClick}
    >
      <SvgIcon
        sx={{
          maxWidth: '30px',
          maxHeight: '30px',
          width: '50%',
          height: '50%'
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <g clipPath="url(#clip0_6318_12186)">
            <path
              d="M14.1113 7.1977L5.67383 2.04731C5.53329 1.95825 5.37098 1.90951 5.20461 1.90641C5.03825 1.90331 4.87424 1.94597 4.73047 2.02974C4.58458 2.10978 4.46296 2.22767 4.37841 2.37099C4.29386 2.51432 4.2495 2.67778 4.25 2.84419V13.1567C4.2495 13.3231 4.29386 13.4866 4.37841 13.6299C4.46296 13.7732 4.58458 13.8911 4.73047 13.9711C4.87424 14.0549 5.03825 14.0976 5.20461 14.0945C5.37098 14.0914 5.53329 14.0426 5.67383 13.9536L14.1113 8.80317C14.2496 8.71974 14.364 8.602 14.4434 8.46136C14.5228 8.32072 14.5646 8.16195 14.5646 8.00044C14.5646 7.83893 14.5228 7.68016 14.4434 7.53952C14.364 7.39888 14.2496 7.28113 14.1113 7.1977Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_6318_12186">
              <rect
                width="15"
                height="15"
                fill="white"
                transform="translate(0.5 0.5)"
              />
            </clipPath>
          </defs>
        </svg>
      </SvgIcon>
    </Box>
  );
};
