import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const fireBaseContext = useFirebase();
    return (
        <AuthContext.Provider value = {fireBaseContext}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthProvider;