import { Button, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import React from 'react';
import treatmentImg from '../../images/treatment.png';

const Treatment = () => {
    return (
        <Container>
            <Grid sx={{display:'flex', minHeight: '400px', alignItems: 'center', my:'40px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                
                <Grid item xs={4} sm={4} md={6}>
                    <img style={{objectFit:'cover', height: '400px', width: '100%'}} src={treatmentImg} alt="there is supposed to be a img" />
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                        <Typography sx={{ fontWeight: 600}} variant="h2">
                            Exceptional Dental <br />
                            Care, on Your Terms
                        </Typography>
                        <Typography sx={{ color:'gray', my:'20px'}} variant="p" component="div">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque repudiandae dolor odit asperiores vel, nemo consectetur sed. Placeat consequatur in nesciunt, facere qui minus perferendis ex quae recusandae porro amet sunt mollitia dolor similique quisquam unde numquam provident ad illo asperiores culpa ipsam praesentium quis itaque. Similique id et odit magnam ratione architecto, laudantium expedita quod placeat totam reprehenderit consectetur.
                        </Typography>
                        <Button variant='contained' sx={{ backgroundColor:'#11d1c8'}}>Learn More</Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Treatment;