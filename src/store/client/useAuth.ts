import { create } from "zustand";
import { persist } from "zustand/middleware";

type AuthState = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isLoggedIn: false,
      login: () => set(() => ({ isLoggedIn: true })),
      logout: () => set(() => ({ isLoggedIn: false })),
    }),
    { name: "auth" }
  )
);

export default useAuthStore;
