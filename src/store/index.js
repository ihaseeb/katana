import Vue from 'vue'
import Vuex from 'vuex'

import meetup from './meetup'
import user from './user'
import shared from './shared'
import supplier from './supplier'

Vue.use(Vuex)

export const store = new Vuex.Store({
    modules: {
        meetup: meetup,
        user: user,
        shared: shared,
        supplier: supplier
    }
})