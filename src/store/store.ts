import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { checkList } from "../constants/checkList";

type CheckKeysArray = keyof typeof checkList;

type Insurance = {
  [key in CheckKeysArray]?: boolean;
};

type Data =
  | {
      zip: string;
      location: string;
      insurance?: Insurance;
      email?: string;
    }
  | undefined;

interface userStore {
  modal: number | undefined;
  setModal: (modal: number | undefined) => void;
  data: Data;
  setData: (data: Data) => void;
}

const sessionData = sessionStorage.getItem("data");
const sessionModal = sessionStorage.getItem("modal");

const useStore = create<userStore>()(
  subscribeWithSelector((set) => ({
    modal: sessionModal ? JSON.parse(sessionModal) : undefined,
    setModal: (modal: number | undefined) => set({ modal }),
    data: sessionData ? JSON.parse(sessionData) : undefined,
    setData: (data: Data) => set({ data: data }),
  }))
);
export type { Data };
export default useStore;
