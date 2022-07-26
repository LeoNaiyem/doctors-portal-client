import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();


// register in with email and password
    const handleRegisterUser = (email, password, navigate, from) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
            console.log(user);
            navigate(from, { replace: true });
            setAuthError('');
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
            setAuthError(errorMessage);
        })
        .finally(()=> setLoading(false));
    };

// sign in with email address
    const handleSignInUser = (email, password, navigate, from) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            navigate(from, { replace: true });
            setAuthError('');

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage, errorCode);
            setAuthError(errorMessage);
        })
        .finally(()=> setLoading(false));

    }

// observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
          });
        return () => unsubscribe;
    },[auth])


//sign out
    const handleLogOutUser = () => {
        setLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setAuthError('');
        })
        .catch((error) => {
            console.log(error);
            setAuthError(error);
        })
        .finally(() => setLoading(false));
    };

    //clear messages
    setTimeout(() => {
       setAuthError('');
      }, 5000);



    return {
        user,
        loading,
        authError,
        handleRegisterUser,
        handleSignInUser,
        handleLogOutUser
    }
}
export default useFirebase;