<template>
    <button
        v-if="category.subCategory && category.subCategory.length"
        class="btn d-inline-flex align-items-center rounded collapsed"
        data-bs-toggle="collapse"
        :data-bs-target="'#extend-collapse-' + category.id"
        :aria-expanded="`${isShow?true:false}`"
    >
        {{ category.name }}
    </button>

    <div :class="`collapse ${isShow}`" :id="'extend-collapse-' + category.id" style="">
        <ul class="list-unstyled fw-normal pb-1 small">
            <li v-for="sub in category.subCategory" v-bind:key="sub.id">
                <a
                    href="/docs/5.0/extend/approach/"
                    class="d-inline-flex align-items-center rounded"
                    >{{ sub.name }}</a
                >
            </li>
        </ul>
    </div>
    <a
        href="/docs/5.0/migration/"
        class="d-inline-flex align-items-center rounded"
        v-if="!category.subCategory"
    >
        {{ category.name }} 
    </a> 
</template>
<script>
export default {
    name: "SingleMenu",
    props: {
        category: Object,
        isShow:String
    },
};
</script>
<style>
.small>li:hover{
    background-color: #00b999;
    color: #fff;
    padding: 0px 5px;
    border-radius: 3px;
}
</style>
