import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import React from 'react';

interface Props {
  count?: number;
  type?: 'dashboard' | 'message';
}
export const MessageRowSkeleton: React.FC<Props> = ({
  count = 3,
  type = 'message'
}) => {
  return (
    <Stack data-testid="message-row-skeleton-ds" sx={{ marginTop: '1rem' }}>
      {Array.from(new Array(count)).map((index) => (
        <Stack
          data-testid="chat-user-loader-ms"
          direction="row"
          sx={{
            width: '100%',
            padding: '.5rem'
          }}
          gap={1}
          key={index}
        >
          <Box
            sx={{
              display: 'flex',
              width: '300px',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '200px',
                alignItems: 'center'
              }}
              gap={1}
            >
              <Skeleton
                animation="wave"
                variant="circular"
                width={40}
                height={40}
              />
              <Box>
                <Skeleton
                  animation="wave"
                  height={10}
                  width={40}
                  variant="text"
                  style={{ marginBottom: 6 }}
                />
                <Skeleton
                  animation="wave"
                  height={10}
                  width={100}
                  variant="text"
                />
              </Box>
            </Box>
            {type === 'message' && (
              <Box>
                <Skeleton
                  animation="wave"
                  height={10}
                  width={30}
                  variant="text"
                />
              </Box>
            )}
          </Box>
        </Stack>
      ))}
    </Stack>
  );
};
