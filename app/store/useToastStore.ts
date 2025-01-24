import { create } from 'zustand';

type Toast = {
    message: string;
    actionName?: string;
    action?: () => void;
};

interface ToastStore {
    toast: Toast | null;
    showToast: (
        message: string,
        actionName?: string,
        action?: () => void
    ) => void;
    hideToast: () => void;
}

const useToastStore = create<ToastStore>(set => ({
    toast: null,
    showToast: (message, actionName, action) =>
        set({ toast: { message, actionName, action } }),
    hideToast: () => set({ toast: null }),
}));

export default useToastStore;
