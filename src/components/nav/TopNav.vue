<template>
    <div class="header">
        <div class="first-block">
            <router-link to="/" class="first-block__logo">
                <img src="@/assets/img/nav-img/logo-nav.svg" alt="">
            </router-link>
            <!-- <button class="first-block__random-button">
                <img src="@/assets/img/nav-img/dice.svg" alt="" class="first-block__random-button__dice">
                Случайно
            </button> -->
        </div>
        <div class="second-block">
            <button class="second-block__1st-button">Москва</button>
            <div class="second-block__search">
                <input class="second-block__search__input" type="search" placeholder="Поиск...">
                <router-link to="/">
                    <img class="second-block__search__img" src="@/assets/img/nav-img/magnifier.svg" alt="">
                </router-link>
            </div>
            <button class="second-block__2nd-button">Сегодня</button>
        </div>
        <div class="third-block">
            <img class="third-block__alert" src="@/assets/img/nav-img/bell.svg" alt="">
            <div @click="openAuth()" class="third-block__login">
                Войти
            </div>
        </div>
    </div>
    <div v-show="auth">
        <div @click="closeAuth()" class="btn-close">
            X
        </div>
        <Auth />
    </div>
</template>

<script>
import Auth from "@/components/auth/Auth"

export default {
    components: {Auth},
    data: function () {
        return {
            auth: false,
        };
    },
    methods: {
        openAuth() {
            this.auth = true
        },
        closeAuth() {
            this.auth = false
        }
    },
}

</script>

<style scoped>

.btn-close{
    z-index: 99;
    position: fixed;
    background: #FFFFFF;
    border: 3px solid #FFFFFF;
    border-radius: 9px;
    padding: 5px 15px 5px 15px;
    transition: 0.3s;
    margin-top: 15px;
    right: 15px;

    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #1E1509;
    text-decoration: none;
    text-align: center;
}

.btn-close:hover{
    background: #cccccc;
    border: 3px solid #cccccc;
    cursor: pointer;
}

button{
    background: transparent;
    border: none;
    color: #000;
    padding: 0;
    margin: 0;
}

.header{
    z-index: 9;
    width: 100%;
    position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 22px 0px 22px 0px;
    background: #FAF7F2;
}

.first-block{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 15%;
    margin-left: 32px;
}

.second-block{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 646px;
}

.third-block{
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 15%;
    margin-right: 32px;
}

.first-block__random-button{
    transition: 0.3s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 22px;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    text-decoration-line: underline;
    cursor: pointer;
}

.first-block__random-button:hover{
    transition: 0.3s;
    color: #716675;
}

.first-block__random-button__dice{
    margin-right: 10px;
}

.second-block__1st-button{
    transition: 0.3s;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #1E1509;
    cursor: pointer;
}

.second-block__1st-button:hover{
    transition: 0.3s;
    color: #716675;
}

.second-block__2nd-button{
    transition: 0.3s;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
    text-decoration-line: underline;
    color: #1E1509;
    cursor: pointer;
}

.second-block__2nd-button:hover{
    transition: 0.3s;
    color: #716675;
}

.second-block__search{
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #1E1509;
    border-radius: 5px;
    display: flex;
    align-items: center;
}

.second-block__search__input{
    width: 332px;
    height: 36px;
    padding: 0px 10px 0px 10px;
    background: #FFFFFF;
    border: none;
    border-radius: 5px;
    outline: 0;
}

.second-block__search__img{
    padding: 0px 20px 0px 5px;
}

.third-block__alert{
    margin-right: 80px;
    cursor: pointer;
}

.third-block__login{
    transition: 0.3s;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #1E1509;
    padding: 9px 18px 9px 18px;
    border: 1px solid #1E1509;
    border-radius: 3px;
    text-decoration: none;
    cursor: pointer;
}

.third-block__login:hover{
    transition: 0.3s;
    background: #716675;
    border: 1px solid #716675;
    color: #F5F5F5;
}

.third-block__login:active{
    transition: 0.3s;
    background: #3e3740;
    border: 1px solid #3e3740;
    color: #F5F5F5;
}

</style>