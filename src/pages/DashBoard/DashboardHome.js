import { Box, Grid } from '@mui/material';
import * as React from 'react';
import Calender from '../../Shared/Calender';
import BookedAppointments from './BookedAppointments';

const DashboardHome = () => {    
  const [date, setDate] = React.useState(new Date());
    return (
        <Box>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} sm={4} md={6}>
                    <Calender date ={date} setDate={setDate}></Calender>
                </Grid>
                <Grid item xs={2} sm={4} md={6}>
                    <BookedAppointments date={date} ></BookedAppointments>
                </Grid>
            </Grid>
        </Box>
    );
};

export default DashboardHome;