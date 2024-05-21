import React, { createContext, useEffect, useContext, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "../firebase/firebaseConfig";
import axios from 'axios';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
            setLoading(false);
        } else {
            const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
                if (currentUser) {
                    setUser(currentUser);
                    sessionStorage.setItem("user", JSON.stringify(currentUser));
                } else {
                    setUser(null);
                    sessionStorage.removeItem("user");
                }
                setLoading(false);
            });
            return () => unsubscribe();
        }
    }, []);

    const updateUser = (userData) => {
        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = async () => {
        try {
            if (user && user.providerData && user.providerData[0]?.providerId === 'google.com') {
                await auth.signOut(); 
            } else {
                await axios.get('http://localhost:8000/api/logout', { withCredentials: true });
            }
            setUser(null);
            sessionStorage.removeItem("user");
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, updateUser, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
