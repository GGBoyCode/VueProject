import {signIn} from '../network/api'
export default {
    //登录
    loading(context, payload) {
        signIn(payload)
        .then(res => {
            if(res.code == 20000) {
                console.log(res);
                context.commit('updateLoading', {loading: true});
            } else {
                console.log(payload);
            }
        })
        .catch(err => {
            console.log(err);
        })
    }
};