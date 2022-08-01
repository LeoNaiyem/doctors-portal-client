import { CircularProgress } from '@mui/material';
import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import useAdmin from '../../../hooks/useAdmin';
import useAuth from '../../../hooks/useAuth';

const RequireAdmin = () => {
    const {user, loading} = useAuth();
    const [isAdmin, adminLoading] =useAdmin(user);
        const location = useLocation();
        if (loading || adminLoading) {
            return <CircularProgress />
        }
    return user.email && isAdmin ? <Outlet /> : <Navigate to="/home" state = {{from: location}} />
};

export default RequireAdmin;