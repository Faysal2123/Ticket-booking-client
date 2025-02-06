import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { Children, createContext, useEffect, useState } from 'react';
import auth from './firebase.init';
export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null)
    const[loading,setLoading]=useState(true)
    const googleProvider=new GoogleAuthProvider()

     const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
     }
     const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
     }
     const logOut=()=>{
        return signOut(auth)
     }
     const updateUserProfile=(name,photo)=>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
     }
     useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return ()=>unSubscribe()
     },[])
       const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider)
       }

     const authInfo={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleProvider,
        googleSignIn,
        updateUserProfile
       
      }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;