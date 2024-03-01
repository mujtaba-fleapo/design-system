import MuiSnackbar from '@mui/material/Snackbar';
import { useEffect, useState } from 'react';

interface Props {
  open: boolean;
  msg: string;
  key: string;
}

export const Snackbar = ({ open, msg, key }: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) setShow(true);
  }, [open]);

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={show}
      message={msg}
      key={key ?? msg}
    />
  );
};
