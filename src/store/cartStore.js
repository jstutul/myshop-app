// store/cartStore.js
import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
    persist: true,
    state: () => ({
        items: [],
    }),
    actions: {
        addToCart(product) {
            const existing = this.items.find((p) => p.id === product.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                this.items.push({ ...product, quantity: 1 });
            }
        },
        removeFromCart(id) {
            this.items = this.items.filter((p) => p.id !== id);
        },
        increment(id) {
            const item = this.items.find((p) => p.id === id);
            if (item) item.quantity++;
        },
        decrement(id) {
            const item = this.items.find((p) => p.id === id);
            if (item && item.quantity > 1) item.quantity--;
            else this.removeFromCart(id); // remove if quantity is 1 and user decrements
        },
    },
    getters: {
        totalQuantity: (state) =>
            state.items.reduce((sum, item) => sum + item.quantity, 0),
        totalPrice: (state) =>
            state.items.reduce((sum, item) => {
                const price = Number(
                    String(item.price).replace(/[^0-9.-]+/g, "")
                );
                const quantity = Number(item.quantity);
                if (isNaN(price) || isNaN(quantity)) return sum;
                return sum + price * quantity;
            }, 0),
    },
});
