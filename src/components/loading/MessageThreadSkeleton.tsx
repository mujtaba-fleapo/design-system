import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
}
export const MessageThreadSkeleton: React.FC<Props> = ({ count = 3 }) => {
  return (
    <Stack data-testid="message-thread-skeleton-ds" sx={{ marginTop: '1rem' }}>
      <Stack
        sx={{
          border: '2px solid #e3e3e3',
          borderRadius: '10px',
          padding: '10px'
        }}
        gap={5}
      >
        <Stack
          direction={'row'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Skeleton
            animation="wave"
            height={30}
            width={'25%'}
            sx={{
              transform: 'scale(1, 1)'
            }}
          />
          <Skeleton
            animation="wave"
            height={30}
            width={30}
            variant="rectangular"
          />
        </Stack>

        <Stack width={'100%'} gap={3}>
          {Array.from(new Array(count)).map((index) => (
            <>
              <Stack
                direction={'row'}
                gap={2}
                width={'80%'}
                alignSelf="flex-start"
                key={index}
              >
                <Skeleton
                  animation="wave"
                  height={30}
                  width={30}
                  variant="circular"
                />
                <Skeleton
                  animation="wave"
                  height={30}
                  width={'60%'}
                  sx={{
                    transform: 'scale(1, 1)'
                  }}
                />
              </Stack>

              <Stack
                direction={'row'}
                gap={2}
                width={'80%'}
                alignSelf="flex-end"
                justifyContent={'flex-end'}
              >
                <Skeleton
                  animation="wave"
                  height={30}
                  width={'60%'}
                  sx={{
                    transform: 'scale(1, 1)'
                  }}
                />
                <Skeleton
                  animation="wave"
                  height={30}
                  width={30}
                  variant="circular"
                />
              </Stack>
            </>
          ))}
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Skeleton
            animation="wave"
            height={30}
            width={30}
            variant="rectangular"
          />
          <Skeleton
            animation="wave"
            height={30}
            sx={{
              flexGrow: 1,
              transform: 'scale(1, 1)'
            }}
            variant="rectangular"
          />
          <Skeleton
            animation="wave"
            height={30}
            width={30}
            variant="circular"
          />
        </Stack>
      </Stack>
    </Stack>
  );
};
