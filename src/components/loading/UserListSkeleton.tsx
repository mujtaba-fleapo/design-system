import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
}
export const UserListSkeleton: React.FC<Props> = ({ count = 7 }) => {
  return (
    <Stack
      data-testid="user-list-skeleton"
      spacing={1}
      sx={{ marginTop: '1rem' }}
    >
      <Stack direction="column" spacing={2}>
        {Array.from(new Array(count)).map((index) => (
          <Stack
            key={index}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack
              direction={'row'}
              justifyContent={'flex-start'}
              alignItems={'center'}
              gap={1}
            >
              <Skeleton
                animation="wave"
                variant="circular"
                width={80}
                height={80}
              />
              <Stack
                direction="column"
                justifyContent="center"
                alignItems="flex-start"
              >
                <Skeleton
                  animation="wave"
                  height={15}
                  width={80}
                  variant="text"
                  style={{ marginBottom: 6 }}
                />
                <Skeleton
                  animation="wave"
                  height={15}
                  width={60}
                  variant="text"
                  style={{ marginBottom: 6 }}
                />
                <Stack
                  direction="row"
                  justifyItems="start"
                  alignItems="start"
                  spacing={1}
                >
                  <Box sx={{ flexBasis: '5%' }}>
                    <Skeleton
                      animation="wave"
                      sx={{ height: 15, width: 15 }}
                      variant="rounded"
                    />
                  </Box>
                  <Box sx={{ flexBasis: '5%' }}>
                    <Skeleton
                      animation="wave"
                      sx={{ height: 15, width: 15 }}
                      variant="rounded"
                    />
                  </Box>
                </Stack>
              </Stack>
            </Stack>
            <Box sx={{ flexBasis: '5%' }}>
              <Skeleton
                animation="wave"
                sx={{ height: 20, width: 100 }}
                variant="rounded"
              />
            </Box>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};
