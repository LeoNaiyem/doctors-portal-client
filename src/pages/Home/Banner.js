import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import React from 'react';
import { Link } from "react-router-dom";
import Chair from '../../images/chair.png';




// const topBackground = {
//     background: `url(${bg})`,

// }

const Banner = () => {
    return (
       <Container sx={{display: 'flex', alignItems: 'center', height:'400px'}}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={7}>
                        <Typography sx={{fontWeight:'500'}} variant='h3'>
                            Your New Smile <br />
                            Stars Here!
                        </Typography>
                        <Typography sx={{fontWeight:'300', fontSize:'16px', mt:'20px', color:'gray'}} variant='h6'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores consectetur sequi deserunt atque nesciunt?
                        </Typography>

                        <Link style = {{color:'white', textDecoration:'none'}} to='/appointment'>
                            <Button variant='contained' sx={{ backgroundColor:'#11d1c8', mt:'20px'}}>Get appointment</Button>
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <img style={{width:'450px'}} src={Chair} alt="" />
                    </Grid>
                </Grid>
            </Box>
       </Container>
    );
};

export default Banner;