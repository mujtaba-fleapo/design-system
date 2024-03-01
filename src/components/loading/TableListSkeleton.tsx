import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
  columnCount?: number;
}
export const TableListSkeleton: React.FC<Props> = ({
  count = 3,
  columnCount = 6
}) => {
  return (
    <Stack paddingTop={2} spacing={2}>
      <Skeleton
        animation="wave"
        height={40}
        sx={{
          flexGrow: 1,
          transform: 'scale(1, 1)'
        }}
      />
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
            key="skeleton-stack"
            width={'100%'}
            spacing={1}
            direction={'row'}
            justifyContent={'space-between'}
          >
            {Array.from(new Array(columnCount)).map((index) => (
              <Skeleton
                key={index}
                animation="wave"
                height={40}
                sx={{
                  flexGrow: 1,
                  transform: 'scale(1, 1)'
                }}
              />
            ))}
          </Stack>

          <Skeleton animation="wave" height={15} width={25} variant="text" />
        </Stack>
      ))}
    </Stack>
  );
};
