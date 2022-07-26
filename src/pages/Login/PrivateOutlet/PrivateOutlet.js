import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateOutlet = () => {
        const {user, loading} = useAuth();
        const location = useLocation();
        if (loading) {
            return <CircularProgress />
        }
    return user.email ? <Outlet /> : <Navigate to="/login" state = {{from: location}} />
};

export default PrivateOutlet;