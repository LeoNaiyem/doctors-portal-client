import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const auth = getAuth();


// register in with email and password
    const handleRegisterUser = (email, password, name, navigate, from) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            const newUser = {email:email, displayName:name};
            setUser(newUser);
         //update user
            updateProfile(auth.currentUser, {
                displayName: name
              }).then(() => {
                setAuthError('');
              }).catch((error) => {
                console.log(error);
                setAuthError(error);
              });

         //send users information to Database
            // saveUserToDataBase(name, email, 'POST');
            saveUserToDataBase( name, email, 'PUT');

         //send users back to their desire page
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

 //Sign in with google account
    const handleGoogleSignIn = (navigate, from) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;
            console.log(token, user);

         //send users data to database
            saveUserToDataBase(user.displayName, user.email, 'PUT');

         //send users back to their desire page
            navigate(from, { replace: true });
            setAuthError('');

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            console.log(errorMessage, errorCode, email, credential);
            setAuthError(errorMessage);

        });
    }

 // sign in with email address
    const handleSignInUser = (email, password, navigate, from) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);

        //  send data to database
            saveUserToDataBase( user.displayName, email, 'PUT');

         //send back users to their desire page
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
 //save user information to database
    const saveUserToDataBase = (displayName, email, method) => {
        const user = {displayName, email};
        fetch('https://vast-plateau-43537.herokuapp.com/users', {
            method: method,
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('inside token',data);
            const accessToken = data.token;
            localStorage.setItem('accessToken', accessToken);
        })

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
            localStorage.removeItem('accessToken');
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
        setLoading,
        authError,
        handleRegisterUser,
        handleSignInUser,
        handleGoogleSignIn,
        handleLogOutUser
    }
}
export default useFirebase;