import { Box, Button, Container, TextField, Typography } from '@mui/material';
import React from 'react';
import bg from '../../images/appointment.png';



const bgImage = {
    background: `url(${bg})`,
}

const Contact = () => {
    return (
        <Container>
            <Box style={bgImage} sx={{textAlign: 'center', minHeight: '400px', padding:'3rem 10rem', my:'80px'}}>
                <Typography sx={{color: '#11d1c8', textTransform: 'uppercase'}} variant="h6">
                    Contact Us
                </Typography>
                <Typography sx={{color: 'white', fontWeight: '600', mb:'40px'}} variant="h4">
                    Always Contact With Us
                </Typography>
                <form>
                    <TextField
                    sx={{width:'80%', backgroundColor:'white', border: 'none', outline:'none' ,borderRadius:'5px' }}
                    id="filled-size-normal"
                    defaultValue="Email Address"
                    variant="outlined"
                    /> <br />
                    <TextField
                    sx={{width:'80%', backgroundColor:'white', border: 'none', outline:'none' ,borderRadius:'5px', my:'20px' }}
                    id="filled-size-normal"
                    defaultValue="Email Address"
                    variant="outlined"
                    /> <br />
                    <TextField
                    sx={{width:'80%', backgroundColor:'white', border: 'none', outline:'none' ,borderRadius:'5px'}}
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    defaultValue="Your Message"
                    /> <br />

                    <Button type="submit" variant='contained' sx={{ backgroundColor:'#11d1c8', mt:'15px'}}> Submit</Button>
                </form>
            </Box>
        </Container>
    );
};

export default Contact;