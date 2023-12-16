import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from "../Firebase/firebaseConfig";



export const AuthContext = createContext(null);

const googleProvider =new GoogleAuthProvider()

 const AuthProvider = ({children}) => {
    const [user,setUser] = useState({});
    const [loading,setLoading] = useState(true)

const googleLogin = () =>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
}

const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
}

const loginUser =(email,password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
}

const logOut = () =>{
    setLoading(true)
    return signOut(auth)
}

const forgetPassword =(email)=>{
    setLoading(true)
    return sendPasswordResetEmail(auth,email)
}
const profile = () =>{
    return updateProfile(auth,user)
}

useEffect(() => {
    const unSubscribe= onAuthStateChanged(auth, (user) => {
       setUser(user);
       setLoading(false)
     });
     return () => {
       unSubscribe();
     };
   }, []);

  
const authInfo = {
   googleLogin,
   createUser,
   user,
   loginUser,
   logOut,
   forgetPassword,
   profile,
   loading
}

    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={

    children:PropTypes.node
}
export default AuthProvider;