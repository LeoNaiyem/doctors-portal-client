import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import loginImg from '../../images/login.png';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const {handleSignInUser, loading, user, authError, handleGoogleSignIn} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/home";

    const handleInputChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);

    };

    const handleLoginSubmit = e => {
        e.preventDefault();
        handleSignInUser(loginData.email, loginData.password, navigate, from);
    };
    console.log(loginData);
    return (
            <Container sx={{mt:'40px'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={4} sm={4} md={6}>
                        <Typography sx={{my:'20px', textAlign: 'center', width:'70%', color:'#11d1c8', fontWeight:500}} variant="h4"> Login </Typography>              
                        {!loading && <form onSubmit = {handleLoginSubmit}>                        
                            <TextField
                                sx={{width:'70%', my:1, backgroundColor:'white' }}
                                id="standard-basic"
                                label="Email"
                                name="email"
                                variant="standard"
                                onChange={handleInputChange}
                            />
                            <TextField
                                sx={{width:'70%', my:1, backgroundColor:'white' }}
                                id="standard-basic"
                                label="Password"
                                name="password"
                                type="password"
                                variant="standard"
                                onChange={handleInputChange}
                            /> <br />
                            <Button
                                sx={{ width:'70%', backgroundColor:'#11d1c8', my:'15px'}}
                                type="submit" variant="contained"
                                >Submit
                            </Button>
                        <Link style = {{textDecoration:'none'}} to='/register'> 
                            <Button sx={{width:'70%'}} variant="text ">New User? Please Register</Button>
                        </Link>
                        <Button onClick={()=>handleGoogleSignIn(navigate, from)} sx={{width:'70%', mt:'20px'}} variant="contained">Sign in with Google</Button>
                        </form>}
                        {loading && <CircularProgress color="secondary" />}
                        {user?.email && <Alert sx={{width:'65%'}} severity="success">Successfully Logged In</Alert>}
                        {authError && <Alert sx={{width:'65%'}} severity="error">{authError}</Alert>}
                    </Grid>
                    <Grid item xs={4} sm={4} md={6}>
                        <img style={{objectFit:'cover', position:'absolute', top:'0', right:'0', height:'100vh'}} src={loginImg} alt="there is supposed to be a img" />                       
                    </Grid>
                </Grid>
            </Container>
    );
};

export default Login;