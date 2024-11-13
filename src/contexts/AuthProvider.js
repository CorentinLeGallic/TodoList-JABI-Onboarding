import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

// Create an authentification context, that will handle all the authentification processes
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    // Store the currently connected user
    const [user, setUser] = useState(null);

    // Store whether an authentification process is ongoing
    const [loading, setLoading] = useState(true);

    // Create a new user
    const createUser = async (email, password, username) => {
        setLoading(true);

        // Create the user using Firebase Authentification and return the associated promise
        return createUserWithEmailAndPassword(auth, email, password).then(async (userCredentials) => {

            // If the user was created successfully, retrieve its uid...
            const uid = userCredentials.user.uid;

            // ...and create a new user document in the users Collection of the Firestore Database whose unique id is the uid
            await setDoc(doc(db, 'users', uid), {
                isAdmin: false,
                username: username,
            });
        });
    };

    // Log in the user
    const loginUser = (email, password) => {
        setLoading(true);

        // Send a login request using Firebase Authentification and return the associated promise
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Log out the user
    const logOut = () => {
        setLoading(true);

        // Sign out the user using Firebase Authentification and return the associated promise
        return signOut(auth);
    };

    useEffect(() => {

        // Watch the user authentification's status and create an unsubscribe function
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            // Update the currently connected user
            setUser(currentUser);
            setLoading(false);
        });

        // Unsubscribe to the observer's watch on component unmount
        return () => {
            unsubscribe();
        };
    }, []);

    // All of the context privider's values
    const authValue = {
        createUser,
        user,
        loginUser,
        logOut,
        loading,
    };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;