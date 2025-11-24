import { create } from "zustand"

type State = {
  userId?: string | null;
  setUserId: (id?: string | null) => void;
  // small UI flags:
  bottomTabVisible: boolean;
  setBottomTabVisible: (v: boolean) => void;
};

export const useAppStore = create<State>((set) => ({
  userId: null,
  setUserId: (id) => set({ userId: id }),
  bottomTabVisible: true,
  setBottomTabVisible: (v) => set({ bottomTabVisible: v }),
}));