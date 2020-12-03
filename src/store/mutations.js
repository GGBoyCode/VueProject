export default {
    changeInformation(state,payload){
        state.user[payload.key] = payload.value;
    }
};