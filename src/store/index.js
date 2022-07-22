import Vue from 'vue'
import Vuex from 'vuex'
import banners from './banner'

Vue.use(Vuex)

const store = new Vuex.Store({
        modules: {
            banners,
        },
        strict: true
    }
)

export default store;