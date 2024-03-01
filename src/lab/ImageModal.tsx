import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import Paper from '@mui/material/Paper';
import Slide from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { TransitionProps } from '@mui/material/transitions';
import * as React from 'react';
import { Close } from '../elements/icons';

const StyledPaper = styled(Paper)`
  background-color: rgba(0, 0, 0, 0.6);
  max-width: revert;
  width: 1200px;
  justify-content: center;
`;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface ImageModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
}

export const ImageModal = ({ children, open, onClose }: ImageModalProps) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={open}
        onClose={onClose}
        TransitionComponent={Transition}
        PaperComponent={StyledPaper}
        sx={{ justifyContent: { xs: 'center', md: '' }, userSelect: 'none' }}
      >
        <Box
          data-testid="modal-close-ds"
          onClick={() => onClose?.()}
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top="16px"
          right="16px"
          p="5px"
          borderRadius="50%"
          zIndex="10"
          sx={{ cursor: 'pointer', backgroundColor: 'black' }}
        >
          <Close size="20px" color="white" />
        </Box>
        <Box>{children}</Box>
      </Dialog>
    </div>
  );
};
