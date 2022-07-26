import { Box, Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import React from 'react';

const Patient = ({patient}) => {
    const {name, city, img, comment} = patient;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275, padding:'1rem 2rem', mt:'40px' }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" component="div" gutterBottom>
                        {comment}
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{ mt: '10px' }}>
                        <Avatar alt={name} src={img} />
                        <Box>
                            <Typography sx={{color:'#11d1c8', mb:'-5px', fontWeight:500}} > {name} </Typography>
                            <Typography color="text.secondary" variant="caption"> {city} </Typography>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Patient;