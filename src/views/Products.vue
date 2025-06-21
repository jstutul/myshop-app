<template>
    <div class="row mb-4">
        <div class="col-lg-3">
            <h1>Categories</h1>
            <nav
                class="collapse bd-links"
                id="bd-docs-nav"
                aria-label="Docs navigation"
            >
                <ul class="list-unstyled mb-0">
                    <li
                        class="lv-1"
                        v-for="cat in categories"
                        v-bind:key="cat.id"
                    >
                        <SingleMenu
                            :getCategory="getCategory"
                            :category="cat"
                            isShow="show"
                        />
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-lg-9">
            <NewArraival :data="products" title="Product Lsit" col="3" />
        </div>
    </div>
</template>

<script>
import axios from "axios";
import NewArraival from "../components/NewArraival.vue";
import SingleMenu from "../components/SingleMenu.vue";
export default {
    name: "Products",
    data() {
        return {
            categories: [],
            products: [],
        };
    },
    methods: {
        getCategory(cat, sub = "") {
            this.products = this.products.filter((x) => {
                if (sub) {
                    return x.category === cat && x.subcategory === sub;
                } else {
                    return x.category === cat;
                }
            });
        },
    },
    components: {
        NewArraival,
        SingleMenu,
    },
    async mounted() {
        const response = await axios.get("http://localhost:3000/categories");
        if (response.status == 200 && response.data.length > 0) {
            this.categories = response.data;
        }
        var result = await axios.get("http://localhost:3000/products");
        if (result.data.length > 0) {
            this.products = result.data;
        }
    },
};
</script>
