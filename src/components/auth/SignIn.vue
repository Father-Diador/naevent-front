<template>
    <div class="login-pos">
        <div class="login">
            <div class="login__reg-buttons">
                <div class="button-login">
                    Войти
                </div>
                <div class="button-reg" v-on:click="Reg()">
                    Регистрация
                </div>
            </div>
            <button class="button-vk-log">
                <img src="@/assets/img/log-img/vk.svg" alt=""> 
                Войти через VK ID
                <span></span>
            </button>
            <button class="button-google-log">
                <img src="@/assets/img/log-img/google.svg" alt=""> 
                Continue with Google
                <span></span>
            </button>
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
    props: {
        login: {
            type: Boolean,
        },
        registr: {
            type: Boolean,
        }
    },
    methods: {
        Reg() {
            this.login = false;
            this.registr = true;
        },
        login(event) {

            if (!this.password) {
                alert("Пароль не указан");
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

.login-pos{
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: center; 
    background: rgba(0, 0, 0, 0.70);
    height: 100vh;
    width: 100%;
    overflow-y: hidden;
}

.login{
    display: flex;
    flex-direction: column;
    width: 646px;
    padding-top: 140px;
    z-index: 9;
}

.login__reg-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
}

.button-login{
    background: #FFFFFF;
    border: 3px solid #FFFFFF;
    border-radius: 9px;
    padding: 13px 0px 13px 0px;
    width: 46%;
    transition: 0.3s;
    cursor: pointer;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #1E1509;
    text-decoration: none;
    text-align: center;
}

.button-login:hover{
    transition: 0.3s;
    color: #FFFFFF;
    background: transparent;
    border: 3px solid #FFFFFF;
}

.button-login:active{
    transition: 0.3s;
    color: #1E1509;
    background: #cccccc;
    border: 3px solid #cccccc;
}

.button-reg{
    background: transparent;
    border: 3px solid #FFFFFF;
    border-radius: 9px;
    padding: 13px 0px 13px 0px;
    width: 46%;
    cursor: pointer;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 32px;
    color: #FFFFFF;
    text-decoration: none;
    text-align: center;
}

.button-reg:hover{
    transition: 0.3s;
    color: #1E1509;
    background: #FFFFFF;
    border: 3px solid #FFFFFF;
}

.button-reg:active{
    transition: 0.3s;
    color: #1E1509;
    background: #cccccc;
    border: 3px solid #cccccc;
}

.button-vk-log{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #2787F5;
    border: 3px solid #2787F5;
    border-radius: 8px;
    padding: 15px 0px 15px 0px;
    cursor: pointer;
    transition: 0.3s;

    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    margin-bottom: 10px;
}

.button-vk-log:hover{
    transition: 0.3s;
    background: #0b6fe0;
    border: 3px solid #0b6fe0;
}

.button-vk-log:active{
    transition: 0.3s;
    background: #0956ad;
    border: 3px solid #0956ad;
}

.button-vk-log img{
    margin-left: 20px;
    width: 30px;
}

.button-vk-log span{
    margin-right: 20px;
    width: 30px;
}


.button-google-log{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border: 3px solid #FFFFFF;
    border-radius: 8px;
    padding: 15px 0px 15px 0px;
    cursor: pointer;

    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    color: #1E1509;
    margin-bottom: 10px;
}

.button-google-log:hover{
    transition: 0.3s;
    background: #e6e6e6;
    border: 3px solid #e6e6e6;
}

.button-google-log:active{
    transition: 0.3s;
    background: #cccccc;
    border: 3px solid #cccccc;
}

.button-google-log img{
    margin-left: 20px;
    width: 30px;
}

.button-google-log span{
    margin-right: 20px;
    width: 30px;
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
    /* border: 3px solid #FFFFFF; */
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