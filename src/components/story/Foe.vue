<template>
    <li>
        <div class="battle-card">
            <div class="battle-card--title">
                {{ name }}
            </div>
            <div class="battle-card--info">
                <img :src="require(`@/assets/${icon}`)" />
                Level: {{ level }}
                <div class="hp-bar">
                    <div class="hp-bar--bg">
                        <div v-if="foeHp > 0" class="hp-bar--fg" :style="{width: (foeHp / maxHp) * 100 + '%'}">{{ foeHp }}</div>
                    </div>
                </div>
            </div>
        </div>
        <base-button v-if="!isDefeated" @click="attackFoe" mode="attack" :disabled="disableOnAttack && roundsToHold > 1">Attack {{ name }}</base-button>
    </li>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
    props: ['name','level','hp','hold','disableOnHold','icon','goFirst','sagardLevel','sagardGear','allies'],
    components: {
        BaseButton
    },
    data() {
        return {
            foeHp: this.hp,
            maxHp: this.hp,
            damage: [
                [0,0,0,1],
                [0,0,1,1],
                [0,1,1,2],
                [1,1,2,3],
                [1,2,3,3],
                [2,3,3,4]
            ],
            isDefeated: false,
            roundsToHold: this.hold,
            disableOnAttack: this.disableOnHold
        }
    },
    methods: {
        roll() {
            return Math.floor(Math.random() * 4);
        },
        attackFoe() {
            // Sagard's attack
            let roll = this.roll();
            let dmg = this.damage[this.sagardLevel][roll];
            // check for weapons
            if(this.sagardGear.findIndex(item => item.name === 'Sword') > -1) {
                dmg++;
            }
            this.foeHp -= dmg;
            this.$emit('logHit','Sagard',dmg);
            if(this.allies) {
                const that = this;
                this.allies.forEach(function(ally) {
                    if(ally.hp <= 0) {
                        return
                    } else {
                        roll = that.roll();
                        dmg = that.damage[ally.level][roll];
                        that.foeHp -= dmg;
                        that.$emit('logHit',ally.name,dmg);
                    }
                })
            }
        },
        attackSagard(dmgModifier) {
            // Foe's attack
            if(!dmgModifier) {
                dmgModifier = 0;
            }
            let roll = this.roll();
            let dmg = this.damage[this.level][roll];
            dmg += dmgModifier;
            this.$emit('hitSagard',dmg);
            this.$emit('logHit',this.name,dmg);
        },
        meltGolem() {
            // logic to handle Ice Golem melting 2 points every turn
            this.foeHp -= 2;
        }
    },
    watch: {
        foeHp(value) {
            if(value <= 0) {
                this.isDefeated = true;
                this.$emit('die');
            }
        }
    },
    emits: ['logHit','hitSagard','die'],
    created() {
        if(this.goFirst) {
            this.attackSagard();
        }
    }
}
</script>

<style scoped>
@import '../../assets/battle-card.css';
</style>