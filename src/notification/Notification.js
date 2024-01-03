import {createToast} from "mosha-vue-toastify";
import 'mosha-vue-toastify/dist/style.css';

export const Notifications = {
    install(app, options) {
        app.config.globalProperties.$notify = (content, options) => {
            notify(content, options);
        }
    }
}

export const notify = (content, options) => {
    createToast(content, options);
}