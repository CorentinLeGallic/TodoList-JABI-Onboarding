import { addDoc, collection, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../firebase";

const useTasksStore = create((set) => ({
    tasks: [],
    changeIsCompleted: (taskId, newIsCompleted) => {
        return updateDoc(doc(db, "tasks", taskId), {
            isCompleted: newIsCompleted
        })
    },
    addTask: (title, description, categoryId) => {
        return addDoc(collection(db, "tasks"), {
            title: title,
            description: description,
            categoryId: categoryId,
            isCompleted: false
        });
    },
    editTask: (taskId, title, description, categoryId) => {

    },
    deleteTask: (taskId) => {
        return deleteDoc(doc(db, "tasks", taskId));
    },
    initializeTasks: () => {
        const unsubscribe = onSnapshot(collection(db, "tasks"), (snapshot) => {
            const tasks = snapshot.docs.map((doc) => ({
                id: doc.id, // Get the document ID
                ...doc.data(), // Get the document's data
            }));
            set({ tasks: tasks });
        });

        return unsubscribe;
    }
}));

export default useTasksStore;