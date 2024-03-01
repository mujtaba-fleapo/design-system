import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import React from 'react';

interface Props {
  rows?: number;
}

export const ListLoader: React.FC<Props> = ({ rows }: Props) => {
  return (
    <Box
      data-testid={`list-loader-ds`}
      sx={{
        paddingBottom: { xs: '20px', md: 0 }
      }}
    >
      {Array(rows || 5)
        .fill(null)
        .map((_e, idx) => (
          <Box
            key={idx}
            sx={{
              padding: '8px 0'
            }}
          >
            <Skeleton
              animation="wave"
              sx={{
                height: '40px',
                width: '100%',
                transform: 'scale(1, 1)'
              }}
            />
          </Box>
        ))}
    </Box>
  );
};
