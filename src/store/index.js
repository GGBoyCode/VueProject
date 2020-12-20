import Vue from 'vue';
import Vuex from 'vuex';
import mutations from "./mutations";
import getters from "./getters";
import actions from "./actions";

Vue.use(Vuex);

const state = {
    //是否登录
    loading:false,
    //用户信息
    user: {
        nickname: 'user',
        sex: true,
        address: '四川省成都市青白江区',
        email: '1770061644@qq.com',
        telephone: '18180443372'
    },
};

const store = new Vuex.Store({
    state,
    mutations,
    getters,
    actions
});

export default store;