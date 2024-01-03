<template>
    <div class="signup">
            <div class="border">
                <img src="@/assets/img/log-img/line.svg" alt="">
                <p class="border__text">ИЛИ</p>
                <img src="@/assets/img/log-img/line.svg" alt="">
            </div>
            <input type="text" class="login__input" placeholder="Имя пользователя" id="username" name="username" v-model="username">
            <input type="email" class="login__input" placeholder="Email" id="email_check" name="email" v-model="email"> 
            <input type="password" class="login__input" placeholder="Пароль" id="password_check" name="password" v-model="password"> 
            <input type="password" class="login__input" placeholder="Повторите пароль" id="passwordRepeat" name="passwordRepeat" v-model="passwordRepeat"> 

            <div class="check-pos">
                <input type="checkbox" class="custom-check" id="check" v-model="checked">
                <label class="custom-check__text" for="check" id="checkbox">
                    <p> Я согласен с условиями </p>
                    <a> пользовательского соглашения </a> 
                </label>
            </div>

            <button class="reg__btn" v-on:click="register">
                Зарегестрироваться
            </button>
    </div>
</template>

<script>

export default {
    data: function () {
        return {
            email: null,
            name: null,
            password: null,
            passwordRepeat: null,
            checked: false,
        };
    },
    methods: {
        register(event) {

            if (!this.checkUsername()) {
                this.$notify('Не корректное имя пользователя', {
                    type: 'danger'
                });
                return;
            }
            if (!this.checkEmail(this.email)) {
                this.$notify('Не корректный email', {
                    type: 'danger'
                });
                return;
            }
            if (!this.password) {
                this.$notify('Не корректный пароль', {
                    type: 'danger'
                });
                return;
            }
            if (this.password !== this.passwordRepeat) {
                this.$notify('Пароли не совпадают', {
                    type: 'danger'
                });
                return;
            }
            if (this.checked == false) {
                this.$notify('Вы не согласились с пользовательским соглашением', {
                    type: 'danger'
                });
                return;
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
        checkUsername() {
            return this.username && String(this.username).match(
                /^([a-zA-Z0-9_]){4,16}$/
            );
        },
        checkEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
    },
}

</script>

<style scss scoped>

.signup{
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
.custom-check__text{
    color: #FFFFFF;
}
.custom-check__text p{
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
}
.custom-check__text a{
    text-decoration: underline;
    cursor: pointer;
    font-family: 'Fira Mono', monospace;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    margin-left: 5px;
}
</style>