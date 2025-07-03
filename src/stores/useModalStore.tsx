// src/stores/useModalStore.ts
import { create } from 'zustand';

type ModalStore = {
    filterIcon: boolean;
    showFilterIcon: () => void;
    hideFilterIcon: () => void;

    filterModalVisible: boolean;
    showFilterModal: () => void;
    hideFilterModal: () => void;
};

export const useModalStore = create<ModalStore>((set) => ({
    filterIcon: true,
    showFilterIcon: () => set({ filterIcon: true }),
    hideFilterIcon: () => set({ filterIcon: false }),
    
    filterModalVisible: false,
    showFilterModal: () => set({ filterModalVisible: true }),
    hideFilterModal: () => set({ filterModalVisible: false }),
}));
