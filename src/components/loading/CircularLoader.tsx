import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export const CircularLoader = () => {
  return (
    <Box
      width={'100%'}
      display={'flex'}
      justifyContent={'center'}
      alignContent={'center'}
      marginTop={'25px'}
    >
      <CircularProgress
        data-testid={`loading-indicator-circle-ds`}
        sx={{ color: '#000' }}
      />
    </Box>
  );
};
