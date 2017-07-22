import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    isLogin:false
}

const mutations={
    LOGIN(state){
        state.isLogin=true;
    },
    LOGOUT(state){
        state.isLogin=false;
    }
}

export default new Vuex.Store({
    state,
    mutations
})
