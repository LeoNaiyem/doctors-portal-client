import { Container, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Cavity from '../../images/cavity.png';
import Fluoride from '../../images/fluoride.png';
import Whitening from '../../images/whitening.png';
import SingleService from './SingleService';


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint numquam ipsam hic non dignissimos debitis totam aliquid aperiam amet.',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint numquam ipsam hic non dignissimos debitis totam aliquid aperiam amet.',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, sint numquam ipsam hic non dignissimos debitis totam aliquid aperiam amet.',
        img: Whitening
    },
]

const Services = () => {
    return (
        <Container sx={{mt: '40px'}}>
            <Box sx={{ width: '100%' }}>
                <Typography sx={{ fontWeight: 500, color:'#14d1c8', textAlign: 'center', my:'10px'}} variant="h4" component="div">
                    Our Services
                </Typography>
                <Typography sx={{ fontWeight: 600, textAlign: 'center', mb:'30px'}} variant="h3" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={ { xs: 2, md: 3 } } columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map( service => <SingleService key={service.name} service={service} ></SingleService> )
                    }
                </Grid>
            </Box>
        </Container>
    );
};

export default Services;