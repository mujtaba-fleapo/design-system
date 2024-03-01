import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
}
export const PostsSkeleton: React.FC<Props> = ({ count = 1 }) => {
  return (
    <Stack
      data-testid="posts-skeleton-ds"
      spacing={1}
      sx={{ marginTop: '1rem' }}
    >
      <Stack direction="row" spacing={2}>
        <Box sx={{ flexGrow: 1 }}>
          {Array.from(new Array(count)).map((index) => (
            <Stack key={index} sx={{ display: 'block', paddingInline: '10px' }}>
              <Stack
                direction={'row'}
                justifyContent={'flex-start'}
                alignItems={'center'}
                gap={1}
              >
                <Skeleton
                  animation="wave"
                  variant="circular"
                  width={40}
                  height={40}
                />
                <Skeleton
                  animation="wave"
                  height={20}
                  width="15%"
                  variant="text"
                  style={{ marginBottom: 6 }}
                />
              </Stack>
              <Grid item lg={11} xs={11} sx={{ marginBottom: '2rem' }}>
                <Skeleton
                  animation="wave"
                  height={20}
                  width="40%"
                  variant="text"
                  style={{ marginBlock: 6 }}
                />
                <Skeleton
                  sx={{
                    marginBlock: 2,
                    height: 300
                  }}
                  animation="wave"
                  variant="rectangular"
                />
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="start"
                  spacing={1}
                >
                  <Stack
                    direction="row"
                    justifyItems="start"
                    alignItems="start"
                    spacing={2}
                  >
                    <Box sx={{ flexBasis: '5%' }}>
                      <Skeleton
                        animation="wave"
                        sx={{ height: 20, width: 20 }}
                        variant="rounded"
                      />
                    </Box>
                    <Box sx={{ flexBasis: '5%' }}>
                      <Skeleton
                        animation="wave"
                        sx={{ height: 20, width: 20 }}
                        variant="rounded"
                      />
                    </Box>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyItems="start"
                    alignItems="start"
                    spacing={1}
                  >
                    <Box sx={{ flexBasis: '5%' }}>
                      <Skeleton
                        animation="wave"
                        sx={{ height: 20, width: 80 }}
                        variant="rounded"
                      />
                    </Box>
                    <Box sx={{ flexBasis: '5%' }}>
                      <Skeleton
                        animation="wave"
                        sx={{ height: 20, width: 50 }}
                        variant="rounded"
                      />
                    </Box>
                  </Stack>
                </Stack>
              </Grid>
            </Stack>
          ))}
        </Box>
      </Stack>
    </Stack>
  );
};
