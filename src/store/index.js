import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

Vue.use(Vuex);

const state = {
    //是否登录
    loading:false,
    //网络前缀
    path:"/api",
    //用户信息
    user: {
        nickname: '',
        sex: true,
        address: '',
        email: '',
        telephone: '',
        url:''
    },
};

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store;