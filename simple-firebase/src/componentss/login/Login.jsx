import React, { useState } from 'react';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase_init';

const Login = () => {
    const [user,setUser]=useState(null);
    const auth = getAuth(app);
    console.log(app);
    const provider=new GoogleAuthProvider;

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
            const loggedInuser=result.user;
            console.log(user);
            setUser(loggedInuser);
        })
        .catch(error=>{
            console.log(error);
        })
    }

    const handleSignOut=()=>{
        signOut(auth)
        .then(result=>{
            console.log(result);
            setUser(null)
        })
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div>
            {
                user?
            <button onClick={handleGoogleSignIn}>Google Login</button>:
            <button onClick={handleSignOut}>Sign Out</button>
            }
            { user && <div>
                <h3>User:{user.displayName}</h3>
                <p>Email:{user.email}</p>
            </div>}
        </div>
    );
};

export default Login;