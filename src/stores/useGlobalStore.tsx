// useGlobalStore.tsx
import { create } from 'zustand';

interface DrawerHeaderState {
    showDrawerHeader: string;
    setShowDrawerHeader: (value: string) => void;
}

export const useDrawerHeaderStore = create<DrawerHeaderState>((set) => ({
    showDrawerHeader: 'normal', // default value as string
    setShowDrawerHeader: (value) => set({ showDrawerHeader: value }),
}));
