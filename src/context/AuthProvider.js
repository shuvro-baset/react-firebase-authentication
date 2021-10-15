import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';


export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    // calling all function from firebase.
    const allContext = useFirebase()
    return (
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>
    );
};

export default AuthProvider;