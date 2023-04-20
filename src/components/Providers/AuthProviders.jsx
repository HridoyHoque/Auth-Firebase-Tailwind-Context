import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from "firebase/auth";
import app from '../../firebase/Firebase.init';

const auth = getAuth(app)
export const AuthContext = createContext(null)

const googleAuthProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)
    const [loading , SetLoading] = useState(true)

    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const SignInWithGoogle = () => {
        return signInWithPopup(auth , googleAuthProvider)
    }
    useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth , currentUser => {
            console.log('Auth state changed' , currentUser)
            setUser(currentUser)
            SetLoading(false)
        })

        return () => {
            unSubscribe()
        }
    }, [])

  const AuthInfo = {
    user,
    loading,
    createUser,
    SignInUser,
    logOut,
    SignInWithGoogle
  }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;