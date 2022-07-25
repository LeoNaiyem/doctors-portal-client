import { Button, TextField } from '@mui/material';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Fade from '@mui/material/Fade';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import React from 'react';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    padding: '1.5rem, 3.5rem',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
  };

const AppointmentModal = ({open, handleClose, booking, date}) => {
    const {name, time} = booking;

    const handleBookingSubmit = e => {
        e.preventDefault();
        alert("Successfully Booked")
        handleClose();
    }

    return (
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography sx={{textAlign:'center', color:'#14d1c8', fontWeight:'500'}} id="transition-modal-title" variant="h5" component="h2">
              {name}
            </Typography>

            <form onSubmit={handleBookingSubmit}>
                <TextField
                id="outlined-size-small"
                disabled
                defaultValue={date.toDateString()}
                size="small"
                sx={{width:'90%', margin:1}}
                />
                <TextField
                id="outlined-size-small"
                disabled
                defaultValue={time}
                size="small"
                sx={{width:'90%', margin:1}}
                />
                <TextField
                id="outlined-size-small"
                defaultValue='Your Name'
                size="small"
                sx={{width:'90%', margin:1}}
                />
                <TextField
                id="outlined-size-small"
                defaultValue= 'Your Email'
                size="small"
                sx={{width:'90%', margin:1}}
                />
                <TextField
                id="outlined-size-small"
                defaultValue= 'Phone'
                size="small"
                sx={{width:'90%', margin:1}}
                />
                <Button sx={{backgroundColor:'#14d1c8', marginLeft:1}} type="submit" variant="contained">Submit</Button>
            </form>
          </Box>
        </Fade>
      </Modal>
    );
};

export default AppointmentModal;