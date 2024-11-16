import { create } from "zustand";

const useModalStore = create((set) => ({
    modal: null,
    showModal: (modal) => set({ modal: modal }),
    hideModal: () => set({ modal: null })
}));

export default useModalStore;