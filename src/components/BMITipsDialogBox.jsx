import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { HiOutlineInformationCircle } from "react-icons/hi2";
import Tips from './Tips';

const BMITipsDialogBox = ({message}) => {
  const [open, setOpen] = React.useState(false);
  const [category, setCategory] = React.useState('');

  const handleClickOpen = (category) => {
    setCategory(category);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => handleClickOpen(message)}>
        <HiOutlineInformationCircle className='w-6 h-6 text-white font-semibold -ml-4 lg:ml-0' />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Health Tips"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Tips category={category} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BMITipsDialogBox;