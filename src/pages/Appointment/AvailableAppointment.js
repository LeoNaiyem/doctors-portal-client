import { Alert, Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import Booking from './Booking';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08: 00 AM - 09: 00 AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetics Dentistry',
        time: '09: 00 AM - 10: 00 AM',
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10: 00 AM - 11: 00 AM',
        space: 7
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11: 00 AM - 12: 00 AM',
        space: 8
    },
    {
        id: 5,
        name: 'Oral Surgery',
        time: '11: 00 AM - 12: 00 AM',
        space: 8
    },
    {
        id: 6,
        name: 'Pediatric Dental',
        time: '11: 00 AM - 12: 00 AM',
        space: 8
    }
]

const AvailableAppointment = ({date}) => {
    const [appointmentSuccess, setAppointmentSuccess] = useState(false);
    //clear massage
    setTimeout(() => {
        setAppointmentSuccess(false);
       }, 8000);

    return (
        <Container sx={{my: '40px'}}>
            <Box sx={{ width: '100%' }}>
                <Typography sx={{ fontWeight: 500, color:'#14d1c8', textAlign: 'center', my:'10px'}} variant="h4" component="div">
                    Available Appointments On {date.toDateString()}
                </Typography>
                <Box sx={{ display:'flex', justifyContent: 'center' }}>
                    { appointmentSuccess && <Alert severity="success">Appointment Booked Successfully</Alert>}
                </Box>
                <Grid container spacing={ { xs: 2, md: 3 } } columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        bookings.map( booking => <Booking key={booking.id} setAppointmentSuccess = {setAppointmentSuccess} booking={booking} date={date} ></Booking> )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default AvailableAppointment;