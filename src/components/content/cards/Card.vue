<template>
        <div class="card" v-for:="item in this.loadEvents">
            <div class="scale">
                <div class="like-block">
                    <img class="like" src="@/assets/img/demo-card/like.svg" alt="">
                </div>
                <img :src=" item.images[0].image " alt="">
            </div>
            <a :href="'/eventcard/' +item.id" style="text-decoration: none; color: inherit;">
                <p class="title">{{ item.short_title }}</p>
                <p class="desc"> {{ item.title }} </p>
                <div class="price_and_date">
                    <p class="price"> {{ item.price }} </p>
                    <p class="date"> 
                        Начало: {{ item.dates[0].start }} <br>
                        Конец: {{ item.dates[0].end }} 
                    </p>
                </div>
            </a>
        </div>
</template>

<script>

export default {
    data: function () {
        return {
            date: 1667422800,
        }
    },
    computed: {
        loadEvents(){
            return this.$store.getters.getEvents;
        },
        loadEventsisfree(){
            return this.$store.getters.getEventsisfree;
        },
        loadEventsnotfree(){
            return this.$store.getters.getEventsnotfree;
        },
        loadEventsfavorites(){
            return this.$store.getters.getEventsnotfree;
        },
        loadEventsdate(){
            return this.$store.getters.getEventsnotfree;
        },
    },
    methods: {
        getEvents() {
            this.$store.dispatch("loadEvents");
            console.log("bebe", this.events)
        },
        getEventsisfree() {
            this.$store.dispatch("loadEventsisfree");
        },
        getEventsnotfree() {
            this.$store.dispatch("loadEventsnotfree");
        },
        getEventsfavorites() {
            this.$store.dispatch("loadEventsfavorites");
        },
        getEventsdate() {
            this.$store.dispatch("loadEventsdate");
        },
    },
    created() {
        this.getEvents()
        this.getEventsisfree()
        this.getEventsnotfree()
        this.getEventsfavorites()
        this.getEventsdate()
    },
}

</script>

<style scoped>

.card{
    background: #fff;
    margin-top: 50px;
    width: 646px;
    border: 1px solid #dbdbdb;
    border-radius: 10px;
}

.card img{
    width: 100%;
}

.like-block{
    cursor: pointer;
    width: 25px;
    height: 25px;
    position: absolute;
    background: #fff;
    padding: 7px;
    margin: 20px 0px 0px 585px;
    border-radius: 6px;
    
}

.like-block:hover{
    transition: 0.3s;
    background: #ff6666;
}

/* .scale{
    display: inline-block;
    overflow: hidden;
}

.scale img {
    transition: 1s;
    display: block; 
}

.scale img:hover {
    transform: scale(1.05);
} */

.title{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    color: #1E1509;
    padding: 10px 20px 10px 20px;
}

.desc{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    color: #7A7074;
    padding: 10px 20px 20px 20px;
}

.price_and_date{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

.price{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #1E1509;
    padding: 0px 0px 20px 20px;
    text-align: left;
}

.date{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #1E1509;
    text-align: right;
    padding: 0px 20px 20px 0px;
}
</style>