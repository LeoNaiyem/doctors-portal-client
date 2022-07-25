import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import bg from '../../images/appointment.png';
import doctorImg from '../../images/doctor.png';



const appointmentBg = {
    background: `url(${bg})`,
    backgroundPosition: 'center'
}
const AppointmentBanner = () => {
    return (
            <Box style={appointmentBg} sx={{ flexGrow: 1, mt: '150px', mb:'40px' }}>
                <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <img style={{ marginTop:'-130px', width: "100%", height: "510px", objectFit: 'contain'}} src={doctorImg} alt="" />
                    </Grid>
                    <Grid item sx={{ display:'flex', justifyContent: 'flexStart', alignItems: 'center'}} xs={4} sm={4} md={6}>
                        <Box>
                            <Typography sx={{color:'#14d1c8', fontWeight:'500'}} variant="h4">
                                Appointment
                            </Typography>
                            <Typography sx={{color:'#fff', my:'20px', fontWeight:'600'}} variant="h3">
                                Make An Appointment Today
                            </Typography>
                            <Typography sx={{color: 'lightGray', fontSize:'18px'}} variant="p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda reiciendis ipsum quasi dicta suscipit. Possimus hic nisi doloribus temporibus officia.
                            </Typography>
                            <Button variant='contained' sx={{ backgroundColor:'#11d1c8', mt:'20px'}}>Learn More</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
    );
};

export default AppointmentBanner;