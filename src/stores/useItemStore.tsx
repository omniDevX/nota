import { create } from 'zustand';
import { ItemDB } from '@/src/types';
import { createEmptyItem4New } from './seeds4store';


type ItemStore = {
    oItem: Partial<ItemDB> | null;
    setOItem: (data: Partial<ItemDB>) => void;
    updateOItem: (Item: Partial<ItemDB>) => void;
    clearOItem: () => void;
    createEmptyItem4New: () => void;
};


export const useItemStore = create<ItemStore>((set) => ({
    oItem: null,
    setOItem: (data) => set({ oItem: { ...data } }),
    updateOItem: (Item) => set((state) => ({ oItem: { ...state.oItem!, ...Item } })),
    clearOItem: () => set({ oItem: null }),
    createEmptyItem4New: () => set({ oItem: createEmptyItem4New() })

}));
