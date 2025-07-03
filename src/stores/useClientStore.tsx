import { create } from 'zustand';
import { ClientDB } from '@/src/types';
import { createEmptyClient4New } from './seeds4store';

type ClientStore = {
    oClient: Partial<ClientDB> | null;
    setOClient: (client: Partial<ClientDB> | null) => void;
    updateOClient: (client: Partial<ClientDB>) => void;
    createEmptyClient4New: () => void;
    clearOClient: () => void;
  };



export const useClientStore = create<ClientStore>((set) => ({
    oClient: null,
    // setOClient: (client: ClientDB | null) => set({ oClient: client }),
    setOClient: (client) => set({ oClient: client }),
    updateOClient: (client) => set((state) => ({ oClient: { ...state.oClient!, ...client } })),
    clearOClient: () => set({ oClient: null }),

    createEmptyClient4New: () => set({ oClient: createEmptyClient4New() })
    
}));


