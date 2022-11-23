// import { store } from "@/store";

// const API_URL = "https://api.yggdrasilhost.com";

class HttpUtils {
    /**
     * Send async request to URL
     * @param url - target url
     * @param options - fetch options(request method, headers, etc)
     * @param callback - callback function(called if response.ok=true)
     * @param callback - callback function(called if response.ok=false)
     * @returns {Promise<string | void>}
     */
    static async sendAsyncRequest(url, options, callback, failureCallback) {
        return fetch(url, options)
            .then(response => {
                if (response.status === 403) {
                    console.log('statusCode is 403')
                    console.log(response)
                    if (store.getters.useRefresh) {
                        console.log('Refreshing token....');
                        this.sendAsyncPostRequest(API_URL + '/auth/refresh', data => {
                            store.commit('setTokens', data);
                            console.log('Tokens refreshed!');
                        }, store.getters.getRefreshToken);
                    } else {
                        console.log('Clearing tokens....');
                        store.commit('setTokens', { token: null, refreshToken: null });
                    }
                } else if (!response.ok) {
                    console.log('statusCode is not 403')
                    console.log(response)
                    throw response;
                } else {
                    let responseData = response.json();
                    // let contentType = response.headers.get("Content-Type");
                    // if (contentType && contentType.includes("application/json")) {
                    //
                    // } else {
                    //     responseData = response.text();
                    // }
                    return responseData;
                }
            })
            .then(callback)
            // .catch(response => {
            //     console.log(response);
            //     response.then(error => {
            //         alert(error.error);
            //     });
            //
            .catch(failureCallback);
    }

    static async sendAsyncGetRequest(url, callback, authenticationToken, failureCallback) {
        let options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // mode: "cors"
        };
        return this.sendAsyncRequest(url, options, callback, failureCallback);
    }

    static async sendAsyncPostRequest(url, callback, authenticationToken, failureCallback) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (authenticationToken !== null) {
            options.headers["Authorization"] = "Bearer " + authenticationToken;
        }
        return this.sendAsyncRequest(url, options, callback, failureCallback);
    }
    static async sendAsyncPostBodyRequest(url, body, callback, authenticationToken, failureCallback) {
        let options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        };
        if (authenticationToken !== null) {
            options.headers["Authorization"] = "Bearer " + authenticationToken;
        }
        return this.sendAsyncRequest(url, options, callback, failureCallback);
    }

    static async sendAsyncPutRequest(url, callback, authenticationToken, failureCallback) {
        let options = {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (authenticationToken !== null) {
            options.headers["Authorization"] = "Bearer " + authenticationToken;
        }
        return this.sendAsyncRequest(url, options, callback, failureCallback);
    }

    static async sendAsyncDeleteRequest(url, callback, authenticationToken, failureCallback) {
        let options = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        if (authenticationToken !== null) {
            options.headers["Authorization"] = "Bearer " + authenticationToken;
        }
        return this.sendAsyncRequest(url, options, callback, failureCallback);
    }
}

export default HttpUtils;
