import Box from '@mui/material/Box';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide, { SlideProps } from '@mui/material/Slide';
import { styled } from '@mui/material/styles';
import { forwardRef } from 'react';
import { Typography } from '../elements/Typography';
import { Close } from '../elements/icons';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(0)
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1)
  }
}));

const SlideTransition = forwardRef<HTMLDivElement, SlideProps>((props, ref) => (
  <Slide direction="up" ref={ref} {...props} />
));

export interface ModalProps {
  title?: string;
  children: React.ReactNode;
  open: boolean;
  onClose?: () => void;
  size?: 'small' | 'medium' | 'large';
  closeOnBackdropClick?: boolean;
  disableOverflow?: boolean;
}

export const Modal = ({
  title,
  children,
  open,
  onClose,
  closeOnBackdropClick = true,
  size,
  disableOverflow = false
}: ModalProps) => {
  const sizePresets = (size: any) => {
    switch (size) {
      case 'small':
        return { width: '360px', boxP: '20px' };
      case 'medium':
        return { width: '680px', boxP: '40px' };
      case 'large':
        return { width: '1180px', boxP: '40px' };
      default:
        return { width: '680px', boxP: '40px' };
    }
  };

  const handleClose = () => {
    onClose?.();
  };

  return (
    <BootstrapDialog
      className="modal-1"
      maxWidth="sm"
      sx={{
        '& > .MuiDialog-container': {
          justifyContent: { xs: 'flex-end', sm: 'center' },
          alignItems: { xs: 'end', sm: 'center' },
          position: 'fixed',
          bottom: '0',
          width: '100%',
          '@keyframes modal-animation': {
            '0%': {
              transform: 'translateY(50%)'
            },
            '50%': {
              transform: 'translateY(-10%)'
            },
            '100%': {
              transform: 'translateY(0%)'
            }
          },
          animation: 'modal-animation 0.8s cubic-bezier(0.9, -0.2, 0.17, 0.82)',
          '& > .MuiPaper-root': {
            width: '100%',
            maxWidth: {
              xs: '100%',
              sm: sizePresets(size).width
            },

            minHeight: '100px',
            maxHeight: { xs: '90dvh', sm: 'auto' },
            boxShadow: 'unset',
            margin: { xs: '0', sm: 4 },
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            borderBottomLeftRadius: { xs: '0', sm: '8px' },
            borderBottomRightRadius: { xs: '0', sm: '8px' }
          }
        }
      }}
      aria-labelledby="customized-dialog-title"
      open={open}
      TransitionComponent={SlideTransition}
      TransitionProps={{
        easing: {
          exit: 'cubic-bezier(0.9, -0.2, 0.26, 0.82)'
        },
        timeout: {
          exit: 600
        }
      }}
      onClose={(reason: string) => {
        if (reason === 'backdropClick' && !closeOnBackdropClick) return;
        handleClose();
      }}
    >
      <Box
        data-testid={`modal-${
          title ? title.replace(/\s+/g, '-').toLowerCase() : 'no-title'
        }-ds`}
        sx={{
          p: {
            xs: '32px 16px 16px',
            sm: sizePresets(size).boxP
          },
          overflow: disableOverflow ? 'hidden !important' : 'auto'
        }}
      >
        {onClose && (
          <Box
            data-testid="modal-close-ds"
            onClick={() => handleClose()}
            display="flex"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            top="16px"
            right="16px"
            borderRadius="50%"
            padding="5px"
            zIndex="10"
            sx={{ cursor: 'pointer', backgroundColor: 'white' }}
          >
            <Close size="20px" />
          </Box>
        )}

        {title && (
          <DialogTitle
            sx={{
              m: 0,
              p: 0,
              maxWidth: 'calc(100% - 45px)',
              wordBreak: 'break-word'
            }}
            id="customized-dialog-title"
          >
            <Typography className="interSemibold20">{title}</Typography>
          </DialogTitle>
        )}

        <DialogContent sx={{ zIndex: '4', padding: 0 }}>
          <Box data-testid="modal-content-ds">{children}</Box>
        </DialogContent>
      </Box>
    </BootstrapDialog>
  );
};
