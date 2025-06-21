<template>
    <div class="col-lg-12">
        <h3 class="mb-4">{{ title }}</h3>
        <div class="row row-cols-1 g-4" :class="`row-cols-md-${col}`">
            <div class="col position-relative" v-for="product in data" :key="product.id">
                <div class="card h-100 shadow-sm">
                    <span class="position-absolute top-0 start-95 translate-middle badge rounded-pill bg-danger" style="left: 95% !important;">
                        <span class="fa fa-star checked"></span>&ensp;{{ product.ratting }}
                    </span>
                    <img
                        :src="product.images[0]"
                        class="card-img-top"
                        alt="product image"
                    />
                    <div class="card-body">
                        <span class="badge rounded-pill bg-primary">{{ product.category }}</span>
                        <span class="badge rounded-pill bg-success mx-2">{{ product.subcategory }}</span>
                        <h5 class="card-title">{{ product.name }}</h5>
                        <p class="card-text text-success fw-bold">
                            
                        </p>
                    </div>
                    <div class="card-footer bg-transparent justify-content-between d-flex">
                        <h5>{{ product.price }}</h5>
                        <button class="btn btn-primary btn-sm">
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
    props:{
        data:Object,
        title:String ,
        col:Number
    }
};
</script>
