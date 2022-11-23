<template>
    <div class="sidenav">
        <p>
            <img src="@/assets/img/nav-img/dice.svg" alt="">
            Случайно
        </p>
        <div class="block-1st">
            <p v-on:click="loadEventsfavorites()"><img src="@/assets/img/side-img/fire.svg" alt=""> Популярное</p>
            <p v-on:click="loadEventsdate()">Сегодня</p>
            <p>На выходных</p>
            <p>Следующий месяц</p>
        </div>
        <div class="block-2nd">
            <p v-on:click="loadEventsisfree()">
                <img src="@/assets/img/side-img/no-money.svg" alt="">
                Бесплатные
            </p>
            <p v-on:click="loadEventsnotfree()">
                <img src="@/assets/img/side-img/money.svg" alt="">
                Платные
            </p>
        </div>
        <div class="block-3rd">
            <p>
                <img src="@/assets/img/side-img/microphone.svg" alt="">
                Онлайн трансляции
            </p>
            <p>
                <img src="@/assets/img/side-img/music.svg" alt="">
                Музыка
            </p>
            <p>
                <img src="@/assets/img/side-img/theatre.svg" alt="">
                Театры
            </p>
            <p>
                <img src="@/assets/img/side-img/science.svg" alt="">
                Наука
            </p>
            <p>
                <img src="@/assets/img/side-img/sport.svg" alt="">
                Спорт
            </p>
            <p>
                <img src="@/assets/img/side-img/art.svg" alt="">
                Творчество
            </p>
            <p>
                <img src="@/assets/img/side-img/museum.svg" alt="">
                Музеи
            </p>
            <p>
                <img src="@/assets/img/side-img/for-family.svg" alt="">
                Для семьи
            </p>
            <p>
                <img src="@/assets/img/side-img/for-adult.svg" alt="">
                Для взрослых
            </p>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        loadEventsisfree(){
            this.$store.commit('setEventsisfreeSet')
            console.log('ddd' + this.$store.state.events)
        },
        loadEventsnotfree(){
            this.$store.commit('setEventsnotfreeSet')
            console.log('ddd' + this.$store.state.events)
        },
        loadEventsfavorites(){
            this.$store.commit('setEventsfavoritesSet')
            console.log('ddd' + this.$store.state.events)
        },
        loadEventsdate(){
            this.$store.commit('setEventsdateSet')
            console.log('ddd' + this.$store.state.events)
        },
    }
}
</script>

<style scoped>
.sidenav{
    position: fixed;
    padding: 100px 60px 0px 60px;
}

.block-1st{
    margin-bottom: 65px;
}

.block-2nd{
    margin-bottom: 65px;
}

/* .block-3rd{

} */

p{
    transition: 0.3s;
    cursor: pointer;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 42px;
    color: #7A7074;
    display: flex;
    align-items: center;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;
}

p:hover{
    transition: 0.3s;
    border-top: 1px solid #7A7074;
    border-bottom: 1px solid #7A7074;
    background: #fffafa;
}

p img{
    width: 16px;
    height: 16px;
    margin-right: 12px;
}
</style>