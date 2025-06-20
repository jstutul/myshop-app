<template>
    <div class="row mb-4">
        <div class="col-lg-3">
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
                        <SingleMenu :category="cat" />
                    </li>
                </ul>
            </nav>
        </div>
        <div class="col-md-9 p-0">
            <div
                id="mainCarousel"
                class="carousel slide"
                data-bs-ride="carousel"
            >
                <div class="carousel-inner">
                    <div
                        class="carousel-item"
                        :class="{ active: index === 0 }"
                        v-for="(slide, index) in sliders"
                        :key="slide.id"
                    >
                        <img
                            :src="slide.src"
                            class="d-block w-100"
                            alt="Slide image"
                        />
                    </div>
                </div>
                <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="prev"
                >
                    <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                </button>
                <button
                    class="carousel-control-next"
                    type="button"
                    data-bs-target="#mainCarousel"
                    data-bs-slide="next"
                >
                    <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                </button>
            </div>
        </div>
    </div>
    <NewArraival />
</template>

<script>
import NewArraival from "@/components/NewArraival.vue";
import SingleMenu from "@/components/SingleMenu.vue";
import axios from "axios";
export default {
    name: "Home",
    components: {
        SingleMenu,
        NewArraival,
    },
    data() {
        return {
            categories: [],
            sliders: [],
        };
    },
    async mounted() {
        const response = await axios.get("http://localhost:3000/categories");
        if (response.status == 200 && response.data.length > 0) {
            this.categories = response.data;
        }
        const sliderResponse = await axios.get("http://localhost:3000/sliders");
        if (sliderResponse.data.length > 0) {
            this.sliders = sliderResponse.data;
        }
    },
};
</script>
<style>
@media (min-width: 768px) {
    .bd-links {
        position: -webkit-sticky;
        position: sticky;
        top: 5rem;
        display: block !important;
        height: calc(100vh - 7rem);
        padding-left: 0.25rem;
        margin-left: -0.25rem;
        overflow-y: auto;
    }
}
.bd-links {
    overflow: auto;
    font-weight: 600;
}
@media (min-width: 768px) {
    .pt-md-1 {
        padding-top: 0.25rem !important;
    }
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
.bd-links .btn {
    padding: 0px 0px;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.65);
    background-color: transparent;
    border: 0;
    width: 100%;
}
.bd-links .btn::after {
    width: 1.5rem;
    line-height: 0;
    content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
    transition: transform 0.35s ease;
    transform-origin: 0.5em 50%;
    position: absolute;
    right: 0;
}
.collapse:not(.show) {
    display: none;
}
.bd-links .btn[aria-expanded="true"]::after {
    transform: rotate(90deg);
}
.bd-links .lv-1 {
    background-color: #00b999;
    padding: 2px 10px;
    margin-bottom: 2px;
    position: relative;
}
.bd-links .lv-1 a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.65);
}
.bd-links .lv-1:hover {
    background-color: rgba(0, 0, 0, 0.65);
    color: #fff;
    button,
    a {
        color: #fff;
    }
}
.collapse.show ul {
    margin-left: 10px;
}
</style>
