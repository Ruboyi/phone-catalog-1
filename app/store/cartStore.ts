import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const useCartStore = create(
    persist(
        set => ({
            cart: [],

            addToCart: product =>
                set(state => ({
                    cart: [...state.cart, product],
                })),

            removeFromCart: id =>
                set(state => ({
                    cart: state.cart.filter(item => item.id !== id),
                })),

            clearCart: () => set({ cart: [] }),
        }),
        {
            name: 'cart-storage',
            storage: createJSONStorage(() => localStorage),
        }
    )
);

export default useCartStore;
