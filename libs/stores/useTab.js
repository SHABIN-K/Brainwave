import { create } from "zustand";

const useTabStore = create((set) => ({
  tabValue: "one",
  setState: (newState) => set({ tabValue: newState.tabValue }),
}));

export default useTabStore;
