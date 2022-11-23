<template>
    <SideNav />
    <div class="page" v-for:="item in this.loadEvents">
        <p> {{ item.title }} </p>
    </div>
</template>

<script>
import SideNav from "../../nav/SideNav";

export default {
    components: {
        SideNav,
    },
    computed: {
        loadEvents(){
            return this.$store.getters.getEvents;
        },
    },
}
</script>

<style scoped>

.page{
    padding-top: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 2%;
}

</style>