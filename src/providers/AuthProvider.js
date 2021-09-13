import React, { useState, useEffect } from "react";
import {auth} from "../service/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);


    useEffect(() => {
        onAuthStateChanged( auth, setCurrentUser);
    }, []);

    return (

        <AuthContext.Provider value={{ currentUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;