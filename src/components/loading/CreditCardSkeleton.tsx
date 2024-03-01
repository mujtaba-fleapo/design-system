'use client';

import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const CreditCardSkeleton = () => {
  return (
    <Box
      sx={{
        width: '100%'
      }}
    >
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        sx={{ borderRadius: 1 }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        mt={1}
        spacing={2}
        sx={{ borderRadius: 1 }}
      >
        <Skeleton
          variant="rectangular"
          width="60%"
          height={40}
          sx={{ borderRadius: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width="20%"
          height={40}
          sx={{ borderRadius: 1 }}
        />
        <Skeleton
          variant="rectangular"
          width="20%"
          height={40}
          sx={{ borderRadius: 1 }}
        />
      </Stack>
      <Skeleton
        variant="rectangular"
        width="100%"
        height={40}
        sx={{ borderRadius: 5, mt: 1.5 }}
      />
    </Box>
  );
};
