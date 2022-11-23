<template>
    <div class="main login-pos" id="main">
        <div class="login">
            <div class="login__reg-buttons">
                <div class="button-login" v-on:click="Log()">
                    Войти
                </div>
                <div to="/registration" class="button-reg">
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
            <input type="text" class="login__input" placeholder="Имя пользователя" id="username" name="username" v-model="username">
            <input type="email" class="login__input" placeholder="Email" id="email" name="email" v-model="email">
            <input type="password" class="login__input" placeholder="Пароль" id="password" name="password" v-model="password">
            <input type="password" class="login__input" placeholder="Повторите пароль" id="passwordRepeat" name="passwordRepeat" v-model="passwordRepeat">
            
            <div class="check-pos">
                <input type="checkbox" class="custom-check" id="check" v-model="checked">
                <label class="custom-check__text" for="check">
                    <p> Я согласен с условиями </p>
                    <a> пользовательского соглашения </a> 
                </label>
            </div>

            <p v-if="errors.length">
                <b>Пожалуйста исправьте указанные ошибки:</b>
                <ul>
                    <li v-for="error in errors"
                        :key="error">
                        {{ error }}
                    </li>
                </ul>
            </p>

            <button class="reg__btn" v-on:click="register">
                Зарегестрироваться
            </button>

        </div>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            errors: [],
            email: null,
            name: null,
            password: null,
            passwordRepeat: null,
            checked: false,
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
        Log() {
            this.login = true;
            this.registr = false;
        },
        register(event) {

            this.errors = [];

            if (!this.validEmail(this.email)) {
                this.errors.push('Укажите корректный адрес электронной почты.');
            }
            if (this.password !== this.passwordRepeat) {
                this.errors.push('Пароли не совпадают.');
            }
            if (this.checked == false) {
                this.errors.push('Вы не согласились с обработкой персональных данных.');
            }

            if(this.errors.length != 0) return;
            
            this.$store.dispatch("register", {
                email: this.$data.email,
                name: this.$data.name,
                password: this.$data.password,
            })

            .catch((error) => {
                Swal.fire({
                confirmButtonColor: "#725ec3",
                html: error.message,
                title: "Ошибка регистрации",
                });
            });
        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
}

</script>

<style scss scoped>

.login-pos{
    position: fixed;
    z-index: 99;
    display: flex;
    justify-content: center; 
    background: rgba(0, 0, 0, 0.80);
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

.button-reg{
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

.button-reg:hover{
    transition: 0.3s;
    color: #FFFFFF;
    background: transparent;
    border: 3px solid #FFFFFF;
}

.button-reg:active{
    transition: 0.3s;
    color: #1E1509;
    background: #cccccc;
    border: 3px solid #cccccc;
}

.button-login{
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

.button-login:hover{
    transition: 0.3s;
    color: #1E1509;
    background: #FFFFFF;
    border: 3px solid #FFFFFF;
}

.button-login:active{
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

.reg__btn{
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

.reg__btn:hover{
    transition: 0.3s;
    background: #fc0f0f;
}

.reg__btn:active{
    transition: 0.3s;
    background: #d40404;
}

.check-pos{
    margin-bottom: 40px;
    display: flex;
    flex-direction: row;
}

.custom-check{
    position: absolute;
    z-index: -1;
    opacity: 0;
}

.custom-check+label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}

.custom-check+label::before {
  content: '';
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 2px solid #FFFFFF;
  border-radius: 0.25em;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  margin-right: 20px;
}

.custom-check:checked+label::before {
  border-color: #000;
  background-color: #000;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* .custom-check__text{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
} */

.custom-check__text p{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
}

.custom-check__text a{
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: #FFFFFF;
    margin-left: 5px;
}
</style>