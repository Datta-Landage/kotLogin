import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  name: string;
  email: string;
  phone: string;
  role: string;
  customRole: CustomRole[];
  password: string;
  id: string;
}

interface CustomRole {
  businessId: string;
  customRoleId: string;
}

interface IUserLogin {
  phoneNumber: string;
  password: string;
  isLogin: boolean;
  businessId: string;
  user: User;
  kitchenName: string;

  setPhoneNumber: (d: string) => void;
  setPassword: (d: string) => void;
  setIsLogin: (d: boolean) => void;
  setBusinessId: (d: string) => void;
  setUser: (d: User) => void;
  setKitchenName: (d: string) => void;
}

export const useUserLogin = create(
  persist<IUserLogin>(
    (set, get) => ({
      phoneNumber: "",
      password: "",
      businessId: "",
      isLogin: false,
      user: {
        name: "",
        email: "",
        phone: "",
        role: "",
        customRole: [],
        password: "",
        id: "",
      },
      kitchenName: "",

      setPhoneNumber: (d: string) => set({ phoneNumber: d }),
      setPassword: (d: string) => set({ password: d }),
      setIsLogin: (d: boolean) => set({ isLogin: d }),
      setBusinessId: (d: string) => set({ businessId: d }),
      setUser: (d: User) => set({ user: d }),
      setKitchenName: (d: string) => set({ kitchenName: d }),
    }),
    {
      name: "kitchenLogin",
    }
  )
);
