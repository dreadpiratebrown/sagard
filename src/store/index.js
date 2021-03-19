import { createStore } from 'vuex';
//import sections from './sections.js';
//import battles from './battles.js';
import getters from './getters.js';
import mutations from './mutations.js';
import actions from './actions.js';
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state() {
        return {
            sagard: {
                level: 2,
                hp: 20,
                xp: 0,
                gear: [],
                trophies: []
            },
            lostToKnight: 0,
            menInWhite: 0
        }
    },
    getters,
    mutations,
    actions,
    plugins: [createPersistedState()]
});

export default store;