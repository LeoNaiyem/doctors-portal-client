import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link } from "react-router-dom";
import useAuth from '../../hooks/useAuth';

const Navigation = () => {
    const {user, handleLogOutUser} = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign:'center', fontSize:'26px', fontWeight:'600'}}>
          <Link style = {{color:'white', textDecoration:'none'}}to='/home'>
            Doctors Portal
          </Link>
          </Typography>
          <Link style = {{color:'white', textDecoration:'none'}}to='/appointment'> 
            <Button color="inherit">Appointment</Button>
          </Link>
          <Link style = {{color:'white', textDecoration:'none'}}to='/dashboard'> 
            <Button color="inherit">Dashboard</Button>
          </Link>
          
          {
            user?.email ?
            <Button onClick={handleLogOutUser} color="inherit">Logout</Button>
            :
            <Link style = {{color:'white', textDecoration:'none'}} to='/login'> 
              <Button color="inherit">Login</Button>
            </Link>
          }
          {
            user?.email && <Typography color="inherit" variant="caption">{user?.displayName}</Typography>
          }

        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;