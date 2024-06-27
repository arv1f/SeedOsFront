import { create } from "zustand";
import { persist } from "zustand/middleware";
import { TokenStore } from "../interface";
export const useTokenStore = create<TokenStore>()(
      persist((set) => ({
        token: "",
        setToken: (token: string) => set({ token }),
      }), { name: "Token", version: 1 }));