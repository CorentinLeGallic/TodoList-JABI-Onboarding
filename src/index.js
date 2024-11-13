import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './styles/index.scss';
import Home from './pages/Home';
import SignUp from './pages/auth/SignUp';
import SignIn from './pages/auth/SignIn';
import NoPage from './pages/NoPage';
import Layout from './pages/auth/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import AuthProvider from './contexts/AuthProvider';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <ProtectedRoute><Home /></ProtectedRoute>,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "/signin",
        element: <SignIn />
      },
    ]
  },
  {
    path: "*",
    element: <NoPage />
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
)