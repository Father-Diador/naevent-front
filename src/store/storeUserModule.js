import router from "@/router/index";
import HttpUtils from '@/util/httpUtils';

// import store, {API_URL} from "@/store";

class UserModule {
    constructor() {
        this.state = {
            useRefresh: false,
            token: null,
            refreshToken: null,
            user: null,
        };
        this.getters = {
            getLoader: (state) => { //Loader
                return state.load;
            },
            isLogged: (state, getters) => {
                return state.token !== null && !getters.isTokenExpired && state.user !== null;
            },
            isTokenExpired(state) {
                const base64Url = state.token.split(".")[1];
                const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
                const jsonPayload = decodeURIComponent(
                    atob(base64)
                        .split("")
                        .map(function (c) {
                            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
                        })
                        .join("")
                );

                const {exp} = JSON.parse(jsonPayload);
                return Date.now() >= exp * 1000;
            },
            useRefresh: (state) => {
                return state.user.useRefresh;
            },
            getToken: (state) => {
                return state.token;
            },
            getRefreshToken: (state) => {
                return state.refreshToken;
            },
            getUser: (state) => {
                return state.user;
            },
        };
        this.mutations = {
            loadingForms (state, payload) { //Loader
                state.load = payload;   
            },
            setTokens(state, payload) {
                state.token = payload.token;
                if (payload.refresh !== null) {
                    state.useRefresh = true;
                    state.refreshToken = payload.refresh;
                }
            },
            setUser(state, payload) {
                state.user = payload;
            },
            setUserData(state, payload) {
                state.user.name = payload.name;
                state.user.email = payload.email;
            },
            logout(state) {
                router.push({name: '/'});
                state.token = null;
            }
        };
        this.actions =  {
            loadingForms({commit, state}, payload) { //Loader
                commit('loadingForms', payload);
            },
            register({commit, state}, payload) {
                let email = payload.email
                let name = payload.name
                let password = payload.password

                return HttpUtils.sendAsyncPostRequest(API_URL + 'user/signup?email=' +
                    email +
                    '&name=' + name +
                    '&password=' + password
                    , data => {
                        router.push({name: 'login'})
                    }, null,
                    response => {
                        console.log(response);
                        switch (response.status) {
                            case 400:
                                throw Error('Пользователь уже существует')
                            case 302:
                                router.push({name: 'login'});
                                return;
                            default:
                                throw Error(response.status)
                        }
                    }
                );
            },
            login({commit, state}, payload) {
                let emailOrUsername = payload.email
                let password = payload.password

                HttpUtils.sendAsyncPostRequest(API_URL + '/api/auth/login?username=' +
                    emailOrUsername +
                    '&password=' +
                    password
                    , data => {
                        this.dispatch('setTokens', data);
                    }, '', response => {
                        console.log(response);
                        let error = response.status;
                        switch (response.status) {
                            case 410:
                                error = "Неверный пароль";
                                break;
                            case 411:
                                error = "Аккаунт не подтвержден";
                                break;
                            case 412:
                                error = "Аккаунт не существует";
                                break;
                            case 413:
                                error = "Аккаунт не найден";
                                break;
                            default:
                                error = "Обратитесь к администратору!";
                                break;
                        }
                        Swal.fire({
                            confirmButtonColor: "#72BFBB",
                            html: error,
                            title: "Ошибка входа",
                        });
                    }).then(() => {
                    store.dispatch('loadUser');
                    store.dispatch('loadUniversities');
                    store.dispatch('loadRegions');
                });
            }
        };
    }
}

export default new UserModule();