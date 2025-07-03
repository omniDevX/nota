import { create } from "zustand";
import { UserDB } from "@/src/types"; // Adjust path as needed

interface UserStore {
  currentUser: UserDB | null;
  setCurrentUser: (user: UserDB) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserStore>((set) => ({
  currentUser: null,
  setCurrentUser: (user) => set({ currentUser: user }),
  clearUser: () => set({ currentUser: null }),
}));
