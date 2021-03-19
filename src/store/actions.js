export default {
    updateSagardHp(context, payload) {
        context.commit('setSagardHp', payload);
    },
    updateSagardAll(context, payload) {
        context.commit('setSagardAll', payload);
    },
    updateTrophyUse(context, payload) {
        context.commit('setTrophyUse', payload);
    },
    updateLostToKnight(context, payload) {
        context.commit('setLostToKnight', payload);
    },
    updateMenInWhite(context, payload) {
        context.commit('setMenInWhite', payload);
    },
    resetAll(context) {
        context.commit('runResetAll')
    }
}