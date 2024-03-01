import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
}
export const InsightsSkeleton: React.FC<Props> = ({ count = 3 }) => {
  return (
    <Stack spacing={2}>
      {Array.from(new Array(count)).map((index) => (
        <Stack
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="column" justifyContent="center">
            <Skeleton animation="wave" height={20} width={30} variant="text" />
            <Skeleton animation="wave" height={20} width={60} variant="text" />
          </Stack>
          <Stack direction="column" justifyContent="center">
            <Skeleton animation="wave" height={20} width={30} variant="text" />
            <Skeleton animation="wave" height={20} width={80} variant="text" />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
