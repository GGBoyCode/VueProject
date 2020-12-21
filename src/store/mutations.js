export default {
    //更新登录状态
    updateLoading(state,payload) {
        state.loading = payload.loading;
    },

    //改变用户信息
    changeInformation(state,payload){
        state.user[payload.key] = payload.value;
    },

    //获取用户信息
    updateUserInfo(state,payload) {
        state.user.nickname = payload.name === undefined?'':payload.name;
        state.user.telephone = payload.username === undefined?'':payload.username;
        state.user.email = payload.userEmail === undefined?'':payload.userEmail;
        state.user.sex = payload.sex === 0?true:false;
        state.user.address = payload.userAddress === undefined?'':payload.userAddress;
        state.user.url = payload.userPicture === undefined?'':payload.userPicture;
    }
};