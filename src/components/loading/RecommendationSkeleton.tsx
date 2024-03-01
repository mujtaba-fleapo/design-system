import Grid from '@mui/material/Grid';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
}
export const RecommendationSkeleton: React.FC<Props> = ({ count = 12 }) => {
  return (
    <Grid container spacing={4} paddingTop={'20px'}>
      {Array.from(new Array(count)).map((index) => (
        <Grid item key={index} xs={4} md={3}>
          <Stack
            direction={'column'}
            alignItems="center"
            justifyContent="center"
            sx={{
              border: '2px solid #e3e3e3',
              borderRadius: '10px',
              padding: '10px'
            }}
          >
            <Skeleton
              animation="wave"
              height={70}
              width={70}
              variant="circular"
            />
            <Skeleton animation="wave" height={20} width={70} variant="text" />
            <Stack
              direction={'row'}
              spacing={2}
              justifyContent={'space-between'}
            >
              <Skeleton
                animation="wave"
                sx={{ height: 15, width: 15 }}
                variant="rounded"
              />
              <Skeleton
                animation="wave"
                sx={{ height: 15, width: 15 }}
                variant="rounded"
              />
            </Stack>
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
