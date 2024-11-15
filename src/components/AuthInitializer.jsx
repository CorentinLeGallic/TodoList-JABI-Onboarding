import { useEffect } from 'react';
import useAuthStore from '../zustand/useAuthStore';

const AuthInitializer = ({ children }) => {

    const { initializeAuth } = useAuthStore();

    useEffect(() => {
        const unsubscribe = initializeAuth();
        return () => unsubscribe();
    }, [initializeAuth]);

    return children;
}

export default AuthInitializer;