import Box from '@mui/material/Box';

interface Props {
  size?: number;
  onClick?: () => void;
  variant?: 'white' | 'primary';
}

export const Logo = ({ size = 200, onClick, variant = 'primary' }: Props) => {
  return (
    <Box display="flex">
      <img
        style={{ width: `${size}px` }}
        src={
          variant === 'primary'
            ? 'https://app.fanfix.io/static/logo/logo.png'
            : 'https://app.fanfix.io/static/logo/logo-white.svg'
        }
        alt="FanFix"
        onClick={onClick}
      />
    </Box>
  );
};
