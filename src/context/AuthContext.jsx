import React, { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // No longer using context here
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        //Check local Storage for if user is logged, and if it's, set authenticated to true
        const auth = localStorage.getItem('auth');
        if (auth === 'true') {
            setIsAuth(true);
        }
        setIsLoading(false);
    }, [])

    const value = {
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading //Correct the call here
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};