import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

export const GridLoader: React.FC = () => {
  return (
    <Box
      data-testid={`grid-loader-ds`}
      sx={{
        paddingBottom: { xs: '20px', md: 0 }
      }}
    >
      <Stack
        flexDirection={'row'}
        gap={{ xs: '8px', sm: '5px', md: '20px' }}
        flexWrap={'wrap'}
      >
        {Array(10)
          .fill(null)
          .map((_e, idx) => (
            <Skeleton
              key={idx}
              animation="wave"
              sx={{
                aspectRatio: '1/1',
                minHeight: '100%',
                width: {
                  xs: 'calc(50% - 4px)',
                  sm: 'calc(20% -  4px)',
                  md: 'calc(20% - 20px)'
                },
                height: {
                  xs: 'calc(100% - 4px)',
                  sm: 'calc(100% -  4px)',
                  md: 'calc(100% - 20px)'
                }
              }}
            />
          ))}
      </Stack>
    </Box>
  );
};
