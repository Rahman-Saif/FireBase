import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../firebase_config';

export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);

    }

    const logOut=()=>{
    setLoading(true);
       return signOut(auth);
    }

    useEffect(()=>{
       const unSubscribe= onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser);
           setLoading(false);
           console.log(`observing current user`,currentUser);
        });
        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo={user,createUser,signInUser,logOut,loading};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/***
 * 1.create context
 * 2.Provide Context with value(AuthContext.Provider)
 * 3.main.jsx e AuthProvider er vitore router provider dukay dilam, 
 * tate ekhon whole route takei authprovider nijer children hisebe access korte parbe ,Authprovider.jsx er AuthContext.Provider diye
 * 
 * ** */