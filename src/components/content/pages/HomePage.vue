<template>
    <SideNav />
    <div class="page" >
        <Loader v-if="getLoading" />
        <Card v-show="getLoad" />
    </div>
</template>

<script>

import SideNav from "../../nav/SideNav";
import Card from "../../content/cards/Card.vue";
import Loader from "../../content/pages/Loader.vue";

export default {
    components: {
        SideNav,
        Card,
        Loader,
    },
    computed: {
        getLoading() {
            return this.$store.getters.getLoader;
        },
        getLoad() {
            return this.$store.getters.getLoader === false
        },
    },
}

</script>

<style scoped>
.page{
    background: #FAF7F2;
    padding-top: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2%;
}
</style>