import { Button, Paper, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import AppointmentModal from './AppointmentModal';


const Booking = ({booking, date, setAppointmentSuccess}) => {
    const {name, time, space} = booking;
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Grid item sx={{mt:5}} xs={4} sm={4} md={4}>
                <Paper sx={{padding:'2rem 0', textAlign: 'center'}} elevation={3}>
                    <Typography sx={{my:1, color:'#14d1c8', fontWeight:600}} variant="h5">
                        {name}
                    </Typography>
                    <Typography sx={{fontWeight:500, fontSize:'18px'}} variant="h5">
                        {time}
                    </Typography>
                    <Typography sx={{my:1, color: 'gray'}} variant="caption" display="block" >
                        AVAILABLE SPACE {space}
                    </Typography>
                    <Button onClick={handleOpen} variant='contained' sx={{ backgroundColor:'#11d1c8'}}>Book Appointment</Button>
                </Paper>
            </Grid>
            <AppointmentModal
            date={date}
            open ={open}
            handleClose = {handleClose}
            booking = {booking}
            setAppointmentSuccess = {setAppointmentSuccess}
            >

            </AppointmentModal>
        </>
    );
};

export default Booking;