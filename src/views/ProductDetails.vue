<template>
    <div class="row">
        <div class="col-lg-4">
            <div>
                <img class="card-img-top" :src="mainImage" />
            </div>
            <div class="d-flex img-list">
                <img
                    v-for="(img, index) in product.images"
                    :key="index"
                    :src="img"
                    class="me-2 thumb"
                    @click="mainImage = img"
                />
            </div>
        </div>
        <div class="col-lg-8">
            <h2>{{ product.name }}</h2>
            <span class="badge rounded-pill bg-primary">{{
                product.category
            }}</span>
            <span class="badge rounded-pill bg-success mx-2">{{
                product.subcategory
            }}</span>
            <div id="details">
                <h3>Description</h3>
                <p>
                    {{ product.description }}
                </p>
            </div>

            <div class="">
                <button class="btn btn-success btn-sm" @click="buyNow(product)">
                    Buy Now
                </button>
                <button
                    class="btn btn-primary btn-sm mx-2"
                    @click="addToCart(product)"
                >
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import { useCartStore } from "@/store/cartStore";

export default {
    name: "ProductDetails",
    data() {
        return {
            product: {},
            images: [],
            mainImage: "",
        };
    },
    methods: {
        addToCart(product) {
            const cart = useCartStore();
            cart.addToCart(product);
            // alert("Product added to card");
        },
        buyNow(product) {
            const cart = useCartStore();
            cart.addToCart(product);
            this.$router.push({ name: "Cart" });
        },
    },
    async mounted() {
        var response = await axios.get("http://localhost:3000/products");
        if (response.data.length > 0) {
            this.product = response.data.filter(
                (x) => x.id == this.$route.params.id
            )[0];
            this.images = this.product.images;
            this.mainImage = this.images[0];
        }
    },
};
</script>
<style>
.img-list img {
    height: 100px;
    cursor: pointer;
}
</style>
