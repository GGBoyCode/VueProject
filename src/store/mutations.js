export default {
    changeInformation(state,payload){
        state.user[payload.key] = payload.value;
    },

    updateLoading(state,payload) {
        state.loading = payload.loading;
    }
};