import { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from "firebase/auth";
import app from '../../firebase/Firebase.init';

const auth = getAuth(app)
export const AuthContext = createContext(null)

const AuthProviders = ({children}) => {
    const [user , setUser] = useState(null)

    const createUser = ( email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const SignInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

  const AuthInfo = {
    user,
    createUser,
    SignInUser
  }
   
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;