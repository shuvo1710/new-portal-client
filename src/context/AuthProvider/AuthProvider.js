import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../firebase/firebase.init';

const auth = getAuth(app)
export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    const ProviderLogIn =(provider)=>{
        return signInWithPopup(auth, provider)
    }

    const cerateUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const LoginUser= (email, password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        })
        return ()=>{
            unSubscribe()
        }

    },[])
    const authInfo = {user, ProviderLogIn, logOut,cerateUser,LoginUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;