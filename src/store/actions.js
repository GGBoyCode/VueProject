import {getUserInfo, updateUserInfo} from "../network/api";

export default {
    //获取用户信息
    getUser(context, payload) {
        getUserInfo(payload)
        .then(res => {
            if(res.code === 20000) {
                context.commit("updateUserInfo", res.data)
            }
        })
        .catch(err => {
            console.log(err);
        })
    },

    //改变用户信息
    updateUser(context, payload) {
        let params = context.state.user;

        params[payload.key] = payload.value;
        let sex = params["sex"]?0:1;
        updateUserInfo({username: params.telephone,name: params.nickname, sex:sex, userType: 0,userEmail: params.email, userAddress: params.address})
            .then(res => {
                if(res.code === 20000) {
                    context.commit('changeInformation', payload);
                }
            })
            .catch(err => {
                console.log(err);
            })
    }

};