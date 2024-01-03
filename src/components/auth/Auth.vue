<template>
    <div class="main login-pos" id="main">
        <div class="login">
            <div class="login__reg-buttons">
                <div @click="signIn()" class="button-login">
                    Войти
                </div>
                <div @click="signUp()" to="/" class="button-reg">
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
            <div v-show="signin">
                <SignIn />
            </div>
            <div v-show="signup">
                <SignUp />
            </div>
        </div>
    </div>
</template>

<script>
import SignIn from "@/components/auth/SignIn"
import SignUp from "@/components/auth/SignUp"

export default {
    components: {
        SignIn,
        SignUp,
    },
    data: function () {
        return {
            signin: true,
            signup: false,
        };
    },
    methods: {
        signIn() {
            this.signin = true;
            this.signup = false;
        },
        signUp() {
            this.signin = false;
            this.signup = true;
        },
    }
}
</script>

<style scoped>
.login-pos{
    position: fixed;
    z-index: 9;
    display: flex;
    justify-content: center; 
    background: rgba(0, 0, 0, 0.80);
    height: 100vh;
    width: 100%;
}

.login{
    display: flex;
    flex-direction: column;
    width: 646px;
    padding-top: 140px;
}
.login__reg-buttons{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 20px;
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
</style>