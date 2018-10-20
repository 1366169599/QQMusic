import axios from 'axios'
axios.defaults.baseURL = 'http://101.236.45.250:4000';

const CommonPlugin = {
    install(Vue) {
        Vue.prototype.$axios = axios;
    },
};

export default CommonPlugin;
