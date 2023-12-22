import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updatePassword, updateProfile } from "firebase/auth";
import { createContext,  useEffect, useState  } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null);
const  provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    
    const [user, setUser] = useState();

    const [loading, setLoading] = useState(true);

    const emailPasswordSignIn = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const handleProfile = (name, profileURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: profileURL
        })
    }
    const emailPasswordLogIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
        });
        return (() => {
            return unsubscribe();
        })
    })
    const AuthInfo = {
        // user,
        emailPasswordSignIn,
        handleProfile,
        googleSignIn,
        emailPasswordLogIn,
        user,
        logOut,
        loading
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;