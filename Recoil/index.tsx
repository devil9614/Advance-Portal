import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const sidebarCollapsed = atom({
  default: false,
  key: "sidebarCollapsed",
  effects_UNSTABLE: [persistAtom],
});

export const formStateAtom = atom({
  key: "formState",
  default: {
    step: 1,
    formData: {
      name: "",
      email: "",
      comment: "",
    },
  },
  effects_UNSTABLE: [persistAtom],
});
