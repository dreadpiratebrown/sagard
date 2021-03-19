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
                        <div v-if="allyHp > 0" class="hp-bar--fg" :style="{width: (allyHp / maxHp) * 100 + '%'}">{{ allyHp }}</div>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    props: ['name','level','hp','hold','icon','goFirst','sagardLevel'],
    data() {
        return {
            allyHp: this.hp,
            maxHp: this.hp,
            damage: [
                [0,0,0,4],
                [0,0,1,1],
                [0,1,1,2],
                [1,1,2,3],
                [1,2,3,3],
                [2,3,3,4]
            ],
            isDefeated: false,
            roundsToHold: this.hold
        }
    },
    methods: {
        attackAlly(enemy, level) {
            let roll = Math.floor(Math.random() * 4);
            let dmg = this.damage[level][roll];
            this.allyHp -= dmg;
            this.$emit('logHit',enemy,dmg);
            this.emitter.emit('allyAttacked', {name: this.name, hp: this.allyHp});
        }
    },
    watch: {
        allyHp(value) {
            if(value <= 0) {
                this.isDefeated = true;
                this.$emit('die');
            }
        }
    },
    emits: ['logHit','die'],
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