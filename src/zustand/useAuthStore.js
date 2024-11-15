import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { create } from "zustand";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
    // Store the currently connected user
    user: null,

    // Store whether an authentification process is ongoing
    loading: false,

    // Create a new user
    createUser: async (email, password, username) => {
        set({ loading: true });

        // Create the user using Firebase Authentification and return the associated promise
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {

                // If the user was created successfully, retrieve its uid...
                const uid = userCredentials.user.uid;

                // ...and create a new user document in the users Collection of the Firestore Database whose unique id is the uid
                setDoc(doc(db, 'users', uid), {
                    isAdmin: false,
                    username: username,
                });
            })
            .catch(() => {
                set({ loading: false});
            });
    },

    // Log in the user
    loginUser: async (email, password) => {
        set({ loading: true });

        // Send a login request using Firebase Authentification and return the associated promise
        return signInWithEmailAndPassword(auth, email, password)
            .catch(() => {
                set({ loading: false});
            });
    },

    // Log out the user
    logOut: async () => {
        set({ loading: true });

        // Sign out the user using Firebase Authentification and return the associated promise
        return signOut(auth)
            .catch(() => {
                set({ loading: false});
            });
    },

    initializeAuth: () => {
        // Watch the user authentification's status and create an unsubscribe function
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {

            // Update the currently connected user
            set({ user: currentUser, loading: false });
        });

        // Unsubscribe to the observer's watch on component unmount
        return unsubscribe;
    }
}));

export default useAuthStore;