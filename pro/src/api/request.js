import axios from "axios";
import store from "@/store";

const requests = axios.create({
    //基础路径，requests发出的请求在端口号后面会跟改baseURl
    baseURL: '/api',
    timeout: 5000,
})

requests.interceptors.request.use((config) => {

    if (store.state.user.token) {
        config.headers.authorization=store.state.user.token.replaceAll("\"","")
    }
    return config
});
requests.interceptors.response.use((res) => {
    return res.data;
}, (error) => {
    console.log("error",error.message)
    return Promise.reject(new Error('false'));
});

export default requests;