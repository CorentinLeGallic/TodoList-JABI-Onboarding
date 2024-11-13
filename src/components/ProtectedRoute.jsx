import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const ProtectedRoute = ({ children }) => {

  //  Retrieve the current user from the AuthContext
  const { user } = useContext(AuthContext);

  // If no user is currently connected, redirect the user to the SignIn page...
  if (!user) {
      return <Navigate to="/signin" replace={true} />;
  }

  // ...else, show the child page
  return children;
};

export default ProtectedRoute;