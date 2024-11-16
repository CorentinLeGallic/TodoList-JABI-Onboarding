import { useEffect } from 'react';
import useAuthStore from '../zustand/useAuthStore';
import useTasksStore from '../zustand/useTasksStore';
import useCategoriesStore from '../zustand/useCategoriesStore';

const DatabaseInitializer = ({ children }) => {

    const { initializeAuth } = useAuthStore();
    const { initializeTasks } = useTasksStore();
    const { initializeCategories } = useCategoriesStore();

    useEffect(() => {
        const unsubscribe = initializeAuth();
        return () => unsubscribe();
    }, [initializeAuth]);

    useEffect(() => {
        const unsubscribe = initializeTasks();
        return () => unsubscribe();
    }, [initializeTasks]);

    useEffect(() => {
        const unsubscribe = initializeCategories();
        return () => unsubscribe();
    }, [initializeCategories]);

    return children;
}

export default DatabaseInitializer;