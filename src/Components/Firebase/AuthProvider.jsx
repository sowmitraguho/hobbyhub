import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from '../../firebase.init';

const AuthProvider = ({children}) => {

    const [loggedInUser, setLoggedInUser] = useState(auth.currentUser);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (updatedUserData) => {
        console.log('inside update user', updatedUserData);
        return updateProfile(auth.currentUser, updatedUserData);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(()=>{
        const UnSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('inside useeffect after auth state changed', currentUser);
            setLoggedInUser(currentUser);
        });
        return ()=> {
            UnSubscribe();
        }
    }, [])

    const userInfo = {
        createUser,
        signIn,
        updateUser,
        logOut,
        setLoggedInUser,
        loggedInUser
    };
    
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;