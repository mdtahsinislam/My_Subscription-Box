


















// import React, { createContext, useEffect, useState } from 'react';
// import app from '../firebase/firebase.config';
// import {
//     createUserWithEmailAndPassword,
//     getAuth,
//     onAuthStateChanged,
//     signInWithEmailAndPassword,
//     signOut,
//     updateProfile,
//     GoogleAuthProvider,
//     signInWithPopup,
// } from 'firebase/auth';

// export const AuthContext = createContext();
// const auth = getAuth(app);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     const createUser = (email, password) => {
//         setLoading(true);
//         return createUserWithEmailAndPassword(auth, email, password);
//     };

//     const updateUser = (updatedData) => {
//         return updateProfile(auth.currentUser, updatedData);
//     };

//     const signIn = (email, password) => {
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     const logOut = () => {
//         setLoading(true);
//         return signOut(auth);
//     };

//     const googleSignIn = () => {
//         setLoading(true);
//         const provider = new GoogleAuthProvider();
//         return signInWithPopup(auth, provider);
//     };

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//             setUser(currentUser);
//             setLoading(false);
//         });
//         return () => unsubscribe();
//     }, []);

//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         updateUser,
//         signIn,
//         logOut,
//         googleSignIn,
//         setLoading,
//         setUser,
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;











import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
    GoogleAuthProvider,
    signInWithPopup,
} from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Update User Profile
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };

    // Sign In
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log Out
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // Google Sign In
    const googleSignIn = () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        loading,
        createUser,
        updateUser,
        signIn,
        logOut,
        googleSignIn,
        setLoading,
        setUser,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;


