import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Components/Firebase/Firebase.config';

export const AuthContext=createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

   const googleLogin=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
   }
   useEffect(()=>{
     
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
      setLoading(false)
    });
  },[])
  console.log(user)
// useEffect(() => {
//     console.log('Effect is running...');
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       console.log('User changed:', user);
//       setUser(user);
//       setLoading(false);
//     });
  
//     // Cleanup the subscription when the component unmounts
//     return () => {
//       console.log('Effect cleanup...');
//       unsubscribe();
//     };
//   }, []);
  

    const userSingUp=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const userSingIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userSingOut=()=>{
      return signOut(auth)
    }

      
    const usreInfo={
          user,
          loading,
          userSingUp,
          userSingIn,
          googleLogin,
          userSingOut
    }
    return (
        <AuthContext.Provider value={usreInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;