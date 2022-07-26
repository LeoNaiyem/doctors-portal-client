import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import registerImg from '../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };

    const handleRegisterSubmit = e => {
        e.preventDefault();
        alert('successfully logged in')

    };
    return (
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                
                <Grid item xs={4} sm={4} md={6}>
                <Box sx={{px:'8rem', py:'5rem', position:'sticky', top:'0', left:'0'}}>
                        <Typography 
                            sx={{my:'20px', textAlign: 'center', width:'70%', color:'#11d1c8', fontWeight:500}}
                            variant="h4"
                        > Register
                        </Typography>              
                        <form onSubmit = {handleRegisterSubmit}>                        
                            <TextField
                                sx={{width:'70%', my:1, backgroundColor:'white' }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                variant="standard"
                                onChange={handleInputChange}
                            />
                            <TextField
                                sx={{width:'70%', my:1, backgroundColor:'white' }}
                                id="standard-basic"
                                label="Your Password"
                                name="password"
                                type="password"
                                variant="standard"
                                onChange={handleInputChange}
                            />
                            <TextField
                                sx={{width:'70%', my:1, backgroundColor:'white' }}
                                id="standard-basic"
                                label="Re-type Your Password"
                                name="confirmPassword"
                                type="password"
                                variant="standard"
                                onChange={handleInputChange}
                            /> <br />
                            <Button
                                sx={{ width:'70%', backgroundColor:'#11d1c8', my:'15px'}}
                                type="submit" variant="contained"
                                >Submit
                            </Button>
                        </form>
                        <Link style = {{textDecoration:'none'}} to='/login'> 
                            <Button sx={{width:'70%'}} variant="text ">Already Registered? Login</Button>
                        </Link>
                   </Box>
                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                    <img 
                        style={{objectFit:'cover', width: '100%'}}
                        src={registerImg}
                        alt="there is supposed to be a img" 
                    />                       
                </Grid>
            </Grid>
    );
};

export default Register;