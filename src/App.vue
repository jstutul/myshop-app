<template>
    <Header />
    <main class="container">
        <Home />
        <route-view />
    </main>
    <Footer />
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Home from "./views/Home.vue";
export default {
    name: "App",
    components: {
        Home,
        Header,
        Footer,
    },
};
</script>
