// src/stores/useTabStore.ts
import { create } from 'zustand';

type TabStore = {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
};

export const useTabStore = create<TabStore>((set) => ({
    currentTab: '',
    setCurrentTab: (tab) => set({ currentTab: tab }),
}));
