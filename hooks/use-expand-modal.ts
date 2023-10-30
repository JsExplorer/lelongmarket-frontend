import { create } from "zustand";
import { Product } from "@/types";

interface ExpandModalStore {
    isOpen: boolean
    data?: Product
    onOpen: (data: Product) => void;
    onClose: () => void;
};

const useExpandModal = create<ExpandModalStore>((set) => ({
    isOpen: false,
    data: undefined,
    onOpen: (data:Product) => set({ data: data, isOpen: true}),
    onClose: () => set({ isOpen : false})
}))

export default useExpandModal;