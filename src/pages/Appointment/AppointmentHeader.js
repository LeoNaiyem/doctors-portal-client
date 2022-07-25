import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import React from 'react';
import Chair from '../../images/chair.png';
import Calender from '../../Shared/Calender';

const AppointmentHeader = ({date, setDate}) => {
    return (
        <Container sx={{display: 'flex', alignItems: 'center', height:'400px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Calender date= {date} setDate={setDate} ></Calender>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img style={{width:'100%'}} src={Chair} alt="" />
                    </Grid>
                </Grid>
            </Box>
       </Container>
    );
};

export default AppointmentHeader;