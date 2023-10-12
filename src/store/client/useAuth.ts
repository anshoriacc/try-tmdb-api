import { message } from "antd";
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
      login: () =>
        set(() => {
          message.success("Signed in");
          return { isLoggedIn: true };
        }),
      logout: () =>
        set(() => {
          message.success("Signed out");
          return { isLoggedIn: false };
        }),
    }),
    { name: "auth" }
  )
);

export default useAuthStore;
