import axios from 'axios'
axios.defaults.baseURL = 'http://101.132.157.83:3000';
axios.defaults.withCredentials = true;

const CommonPlugin = {
    install(Vue) {
        Vue.prototype.$axios = axios;
    },
};

export default CommonPlugin;
