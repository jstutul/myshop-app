<template>
    <div class="container mt-5">
        <h2>Shopping Cart</h2>
        <div v-if="cart.items.length">
            <div
                v-for="item in cart.items"
                :key="item.id"
                class="card mb-3 p-3"
            >
                <div class="d-flex justify-content-between align-items-center">
                    <div class="d-flex align-items-center">
                        <img
                            :src="item.images[0]"
                            alt=""
                            style="width: 100px; height: auto"
                        />
                        <div class="ms-3">
                            <h5>{{ item.name }}</h5>
                            <p class="mb-1">{{ item.price }} ৳</p>
                            <!-- <p class="mb-0">Quantity: {{ item.quantity }}</p> -->
                            <div class="btn-group">
                                <button
                                    @click="cart.decrement(item.id)"
                                    class="btn btn-sm btn-outline-secondary"
                                >
                                    -
                                </button>
                                <span class="mx-2">{{ item.quantity }}</span>
                                <button
                                    @click="cart.increment(item.id)"
                                    class="btn btn-sm btn-outline-secondary"
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>

                    <button
                        @click="cart.removeFromCart(item.id)"
                        class="btn btn-danger"
                    >
                        Remove
                    </button>
                </div>
            </div>

            <h4 class="text-end">Total: {{ cart.totalPrice }} ৳</h4>
        </div>
        <div v-else>
            <p>Your cart is empty.</p>
        </div>
    </div>
</template>

<script>
import { useCartStore } from "@/store/cartStore";

export default {
    name: "Cart",
    setup() {
        const cart = useCartStore();
        return { cart };
    },
};
</script>
