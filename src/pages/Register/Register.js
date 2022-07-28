import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import registerImg from '../../images/login.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const {handleRegisterUser, loading, user, authError, handleGoogleSignIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/home";

    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };

    const handleRegisterSubmit = e => {
        e.preventDefault();
        if (loginData.password !== loginData.confirmPassword) {
            alert('Password is not matching')
            return
        }
        handleRegisterUser(loginData.email, loginData.password, loginData.name, navigate, from);
    };
    return (
        <Container sx={{mt:'40px'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                                
                <Grid item xs={4} sm={4} md={6}>
                    <Typography 
                    sx={{my:'20px', textAlign: 'center', width:'70%', color:'#11d1c8', fontWeight:500}}
                    variant="h4"
                    >
                        Register
                    </Typography>              
                    { !loading && <form onSubmit = {handleRegisterSubmit}>                        
                        <TextField
                            sx={{width:'70%', my:1, backgroundColor:'white' }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            type="text"
                            variant="standard"
                            onChange={handleInputChange}
                            />
                        <TextField
                            sx={{width:'70%', my:1, backgroundColor:'white' }}
                            id="standard-basic"
                            label="Your Email"
                            name="email"
                            type="email"
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
                            <Link style = {{textDecoration:'none'}} to='/login'> 
                                <Button sx={{width:'70%'}} variant="text ">Already Registered? Login</Button>
                            </Link>
                            <Button onClick={()=>handleGoogleSignIn(navigate, from)} sx={{width:'70%', mt:'20px'}} variant="contained">Sign in with Google</Button>
                        </form>}
                        {loading && <CircularProgress color="secondary"/>}
                        {user?.email && <Alert sx={{width:'65%'}} severity="success">User Created Successfully</Alert>}
                        {authError && <Alert sx={{width:'65%'}} severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={4} sm={4} md={6}>
                    <img 
                        style={{objectFit:'cover', position:'absolute', top:'0', right:'0', height:'100vh'}}
                        src={registerImg}
                        alt="there is supposed to be a img" 
                    />                       
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;