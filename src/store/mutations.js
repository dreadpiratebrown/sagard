export default {
    runResetAll(state) {
        state.sagard = {
            level: 2,
            hp: 20,
            xp: 0,
            gear: [],
            trophies: []
        }
        state.lostToKnight = 0;
        state.menInWhite = 0;
    },
    setSagardHp(state, payload) {
        // update HP
        state.sagard.hp = payload;
    },
    setSagardAll(state, payload) {
        // update all properties
        let sagard = state.sagard;
        if(payload.hp) {
            sagard.hp += payload.hp;
        }
        if(sagard.hp > 20) {
            sagard.hp = 20;
        }
        if(payload.xp) {
            sagard.xp += payload.xp;
        }
        if(sagard.xp >= 20 && sagard.level < 3) {
            sagard.level = 3;
        }
        if(sagard.xp >= 60 && sagard.level < 4) {
            sagard.level = 4;
        }
        if(sagard.xp >= 150 && sagard.level < 5) {
            sagard.level = 5;
        }
        if(payload.gear) {
            payload.gear.forEach(function(item) {
                // look for the gear item in current inventory
                const index = sagard.gear.findIndex(gearItem => gearItem.name === item.name);
                // if it's not there, add it
                if(index < 0 && !item.remove) {
                    sagard.gear.push(item);
                }
                // if it's there and remove = true, remove it
                if(index > -1 && item.remove) {
                    sagard.gear.splice(index,1);
                }
            })
        }
        if(payload.trophies) {
            payload.trophies.forEach(function(trophy) {
                const index = sagard.trophies.findIndex(item => item.name === trophy.name)
                if(index < 0 && trophy.add) {
                    sagard.trophies.push(trophy);
                }

                if(index > -1 && trophy.remove) {
                    sagard.trophies.splice(index,1);
                }

                if(index > -1 && trophy.stash) {
                    sagard.trophies[index].stash = true;
                }

                if(index > -1 && !trophy.stash) {
                    sagard.trophies[index].stash = false;
                }
            })
        }
    },
    setTrophyUse(state, payload) {
        const trophies = state.sagard.trophies;
        const index = trophies.findIndex(trophy => trophy.name === payload);
        trophies[index].usable = false;
    },
    setLostToKnight(state, payload) {
        state.lostToKnight += payload;
    },
    setMenInWhite(state, payload) {
        state.menInWhite += payload;
    }
}