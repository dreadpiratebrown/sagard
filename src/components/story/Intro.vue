<template>
    <section>
        <h1>Welcome!</h1>
        <p>In 1985, Gary Gygax and Flint Dille published "Sagard the Barbarian #1 - The Ice Dragon". In 1993, my family moved into a rented house in Timonium, MD, and I found a copy of "Sagard the Barbarian #2 - the Green Hydra" in the basement. I loved it.</p>
        <p>"Sagard the Barbarian" is a series of solo RPG books in the "choose your own adventure" style. You read along, make choices, fight battles, win trophies, and try to stay alive. Sometimes this is not the easiest thing to do.</p>
        <p>When I learned VueJS, I needed a project to make, to strenghten my skills. I remembered the Sagard books and went looking for them, and lo and behold, I found them on the Home of the Underdogs. I decided to see if I could adapt the first book to the computer age using Vue. Here is my attempt.</p>
        <p>Note: I claim no ownership over the Sagard content. IANAL, but I assume the copyright still stands since the books are less than 30 years old, even though they're out of print. If there is a copyright dispute, I'll happily take this down and write my own book.</p>
        <base-button to="/section/introduction" link>Begin your quest!</base-button>
    </section>
</template>

<script>
import BaseButton from '../ui/BaseButton.vue';
export default {
    components: {
        BaseButton
    },
    created() {
        this.$store.dispatch('resetAll');
    }
}
</script>