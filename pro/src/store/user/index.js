import { login,reqGetUserInfo,reqLogOut,getCollect } from "@/api";
import { setToken,getToken,removeToken } from "@/utils/token"
const state = {
    token: getToken(),
    userInfo:{},
    col:''
}

const mutations = {
    LOG(state, token){
        state.token=token
    },
    GETUSERINFO(state, userInfo){
        state.userInfo = userInfo
    },
    CLEAR(){

    },
    GETCOL(state,col){
        state.col = col
    }


}

const actions = {
    async log({ commit }, data) {
        const res = await login(data);
        if (res.status == 200) {
            // this.$message.success('登录成功');
            commit('LOG',res.token)
            setToken(res.token)
            return 'ok'
        } else {
            console.log(error)
            this.$message.error('账号或密码错误');
            return Promise.reject(new Error('登录失败'))
        }
    },

    async getUserInfo({ commit }) {
        let result = await reqGetUserInfo()
        console.log(result)
       if (result.status == 200) {
           commit('GETUSERINFO', result.data)
           return 'ok'
       } else {
           return Promise.reject(new Error('faile'))
        }
    },

    async userLogOut({ commit }) {
        let result = await reqLogOut()
        if (result.status == 200) {
            commit('CLEAR')
            return 'ok'
        } else {
             return Promise.reject(new Error('faile'))
        }
    },
}

export default {
    state, mutations, actions
}