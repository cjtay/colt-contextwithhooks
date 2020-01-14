import React, { createContext, useState } from 'react';
import useToggle from '../hooks/useToggle';

export const AuthContext = createContext();

export function AuthProvider(props) {
    const [isLoggedin, toggleLogin] = useToggle(true);
    const [userType, setUserType] = useState('administrator');

    return (
        <AuthContext.Provider
            value={{
                isLoggedin,
                userType,
                spareProps: 'hi!',
                toggleLogin
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
