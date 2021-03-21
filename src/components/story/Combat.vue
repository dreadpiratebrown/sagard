<template>
    <section>
        <h1>Combat</h1>
        <p>In a number of places in this game, you will encounter enemies and choose to (or <em>have to</em>) fight them. There can be only three possible outcomes to a fight: you can win, lose, or flee.</p>
        <p><strong>Win</strong>: All enemies' hit points have been reduced to 0.</p>
        <p><strong>Lose</strong>: Your hit points have been reduced to 0.</p>
        <p><strong>Flee</strong>: You may only attempt to flee once per round. If you succeed, you'll be taken to the next section of the game. If you fail, the "flee" button will be disabled until you attack an enemy and it becomes your turn again. Some enemies cannot be escaped. In those cases, the "flee" button will not appear.</p>
        <p>For combat, Sagard and his opponent (or opponents) take turns. Unless otherwise stated, Sagard strikes first. After he strikes, the opponent strikes. That completes one round of combat. Combat can go for several rounds and ends when Sagard wins, loses, or flees.</p>
        <p>Every battle you fight will be different. The difficulty of each battle will be determined by how many hit points your opponent has and what their fighting level is. The higher the fighting level, the more dangerous the opponent.</p>
        <p>Hit points are the number of points of damage a player may take before they are out of the combat. As Sagard, you are given 20 hit points in the beginning of the game. This number will change in the course of the game, though it will never exceed 20. That means you will have to take 20 points of damage before you are out of the game.</p>
        <base-button @click="goBack">Good luck!</base-button>
    </section>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
    components: {
        BaseButton
    },
    methods: {
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
section { 
    max-width: 38rem;
}
</style>