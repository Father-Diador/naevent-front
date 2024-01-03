<template>
<div class="signin">
    <div class="border">
        <img src="@/assets/img/log-img/line.svg" alt="">
        <p class="border__text">ИЛИ</p>
        <img src="@/assets/img/log-img/line.svg" alt="">
    </div>
    <input type="email" class="login__input" placeholder="Email" id="email" name="email" v-model="email">
    <input type="password" class="login__input" placeholder="Пароль" id="password" name="password" v-model="password">
    <button class="login__btn" v-on:click="login">
        Войти
    </button>
    <router-link to="/" class="remember-pass">
        Напомнить пароль
    </router-link>
</div>
</template>

<script>

export default {
    data: function () {
        return {
            email: null,
            name: null,
            password: null,
        };
    },
    methods: {
        login(event) {

            if (!this.password) {
                this.$notify('Пароль не указан', {
                    type: 'danger'
                });
                return;
            }

            this.$store.dispatch("login", {
                email: this.$data.email,
                name: this.$data.name,
                password: this.$data.password,
            });
        },
    },
}

</script>

<style scoped>
.signin{
    display: flex;
    flex-direction: column;
}
.border{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 25px 0px 25px 0px;
}
.border__text{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
}
.login__input{
    background: #FFFFFF;
    border: none;
    border-radius: 8px;
    padding: 13px 0px 13px 0px;
    outline: none;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #7A7074;
    margin-bottom: 30px;
    text-align: center;
}
.login__btn{
    transition: 0.3s;
    margin: 10px 20% 0px 20%;
    width: 60%;
    background: #FD4040;
    border-radius: 9px;
    border: none;
    cursor: pointer;
    padding: 13px 0px 13px 0px;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    color: #FFFFFF;
}
.login__btn:hover{
    transition: 0.3s;
    background: #fc0f0f;
}
.login__btn:active{
    transition: 0.3s;
    background: #d40404;
}
.remember-pass{
    transition: 0.3s;
    margin-top: 13px;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    color: #FFFFFF;
    cursor: pointer;
}
.remember-pass:hover{
    transition: 0.3s;
    color: #e6e6e6e6;
}
</style>