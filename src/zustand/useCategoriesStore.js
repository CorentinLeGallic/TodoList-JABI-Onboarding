import { collection, onSnapshot } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../firebase";

const useCategoriesStore = create((set) => ({
    categories: [],
    initializeCategories: () => {
        const unsubscribe = onSnapshot(collection(db, "categories"), (snapshot) => {
            const categories = snapshot.docs.map((doc) => ({
                id: doc.id, // Get the document ID
                ...doc.data(), // Get the document's data
            }));

            set({ categories: categories.toSorted((a, b) => {
                if(a.name < b.name){
                    return -1;
                } else if(a.name > b.name){
                    return 1;
                } else {
                    return 0;
                }
            })});
        });

        return unsubscribe;
    }
}));

export default useCategoriesStore;