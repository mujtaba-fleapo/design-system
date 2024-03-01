import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
}

export const GridSkeleton: React.FC<Props> = ({ count = 10 }) => {
  return (
    <Box
      data-testid={`grid-skeleton-ds`}
      sx={{
        paddingBottom: { xs: '20px', md: 0 }
      }}
    >
      <Stack
        flexDirection={'row'}
        gap={{ xs: '8px', sm: '5px', md: '20px' }}
        flexWrap={'wrap'}
      >
        {Array.from(new Array(count)).map((index) => (
          <Skeleton
            key={index}
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
              },
              transform: 'scale(1,1)'
            }}
          />
        ))}
      </Stack>
    </Box>
  );
};
