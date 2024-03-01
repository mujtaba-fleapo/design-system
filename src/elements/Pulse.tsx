import Box from '@mui/material/Box';
import { keyframes, styled } from '@mui/material/styles';
import { ReactNode } from 'react';

interface PulseProps {
  children: ReactNode;
}

export const Pulse = ({ children }: PulseProps) => {
  const pulse = keyframes`
    0% {
      opacity: 1;
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    50% {
      opacity: 0;
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
    100% {
      opacity: 0;
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }
  `;

  const Wrapper = styled(Box)`
    .pulse span {
      overflow: visible;
      &::before {
        content: '';
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: inherit;
        border-radius: inherit;
        -webkit-transition:
          opacity 0.3s,
          -webkit-transform 0.3s;
        transition:
          opacity 0.3s,
          -webkit-transform 0.3s;
        transition:
          opacity 0.3s,
          transform 0.3s;
        transition:
          opacity 0.3s,
          transform 0.3s,
          -webkit-transform 0.3s;
        -webkit-animation: ${pulse} 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        animation: ${pulse} 1s cubic-bezier(0.24, 0, 0.38, 1) infinite;
        z-index: -1;
      }
    }
  `;

  return <Wrapper>{children}</Wrapper>;
};
