import React from 'react'
import { Navigate } from 'react-router-dom';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';

let user = auth.currentUser;
onAuthStateChanged(auth, (currentUser) => {
  console.log(currentUser)
  user = currentUser;
});

const ProtectedRoute = ({ children }) => {
    console.log(user)
    if (!user) {
        return <Navigate to="/signin" replace={true} />;
    }

    return children;
};

export default ProtectedRoute