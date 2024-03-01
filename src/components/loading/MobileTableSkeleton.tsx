import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
}
export const MobileTableSkeleton: React.FC<Props> = ({ count = 6 }) => {
  return (
    <Stack spacing={2}>
      {Array.from(new Array(count)).map((index) => (
        <Stack
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Skeleton animation="wave" height={40} width={40} variant="rounded" />
          <Stack
            width={'100%'}
            direction={'row'}
            justifyContent={'space-between'}
            alignItems="center"
          >
            <Stack direction="column" justifyContent="center">
              <Skeleton
                animation="wave"
                height={20}
                width={120}
                variant="text"
              />
              <Skeleton
                animation="wave"
                height={20}
                width={180}
                variant="text"
              />
            </Stack>

            <Skeleton animation="wave" height={15} width={25} variant="text" />
          </Stack>
        </Stack>
      ))}
    </Stack>
  );
};
