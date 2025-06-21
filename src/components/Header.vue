<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <a class="navbar-brand" href="#">🛍 MyShop</a>
            <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/products" class="nav-link"
                            >Products</router-link
                        >
                    </li>
                    <li class="nav-item">
                        <router-link to="/cart" class="nav-link"
                            >Cart({{ cart.totalQuantity }})</router-link
                        >
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
import { useCartStore } from "@/store/cartStore";
export default {
    name: "Header",
    setup() {
        const cart = useCartStore();
        return { cart };
    },
};
</script>
