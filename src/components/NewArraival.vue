<template>
    <div class="container mt-5">
        <h3 class="mb-4">🆕 New Arrivals</h3>
        <div class="row row-cols-1 row-cols-md-4 g-4">
            <div class="col" v-for="product in newArrivals" :key="product.id">
                <div class="card h-100 shadow-sm">
                    <img
                        :src="product.image"
                        class="card-img-top"
                        alt="product image"
                    />
                    <div class="card-body">
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text text-success fw-bold">
                            ৳ {{ product.price }}
                        </p>
                    </div>
                    <div class="card-footer bg-transparent border-top-0">
                        <button class="btn btn-primary w-100">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "NewArraival",
};
</script>
