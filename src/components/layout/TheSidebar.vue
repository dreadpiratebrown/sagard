<template>
    <div class="character-sheet">
        <p class="stat">Level: {{ sagard.level }}</p>
        <p class="stat">HP: {{ sagard.hp }}/20</p>
        <p class="stat">XP: {{ sagard.xp }}</p>
        <p class="list"><strong>Armor &amp; Weapons</strong>
        <ul>
            <li v-for="item in sagard.gear" :key="item">{{ item.name }} ({{ item.effect }})</li>
        </ul></p>
        <p class="list"><strong>Trophies</strong>
        <ul>
            <li v-for="trophy in trophies" :key="trophy">{{ trophy.name }} <a href="#" class="useItem" v-if="trophy.usable" @click="heal(trophy.name, $event)">Use</a></li>
        </ul>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            sagard: null
        }
    },
    created() {
        this.sagard = this.$store.getters['sagard'];
    },
    computed: {
        trophies() {
            return this.sagard.trophies.filter(trophy => !trophy.stash);
        }
    },
    methods: {
        heal(name, event) {
            event.preventDefault();
            this.$store.dispatch('updateSagardHp', 20);
            this.$store.dispatch('updateTrophyUse', name);
        }
    }
}
</script>

<style scoped>
.character-sheet {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
}

.stat {
    flex-basis: 33.333%;
}

.list {
    flex-basis: 100%;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
</style>