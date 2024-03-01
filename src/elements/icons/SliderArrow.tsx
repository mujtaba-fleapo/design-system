import Box from '@mui/material/Box';
import { ChevronLeft } from './ChevronLeft';
import { ChevronRight } from './ChevronRight';

interface Props {
  direction: 'left' | 'right';
}

export const SliderArrow = (props: Props) => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(0, 0, 0, 0.20)',
        width: '32px',
        height: '32px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {props.direction === 'left' ? (
        <ChevronLeft color="#fff" />
      ) : (
        <ChevronRight color="#fff" />
      )}
    </Box>
  );
};
