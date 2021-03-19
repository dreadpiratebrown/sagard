<template>
    <section>
        <h1>{{ title }}</h1>
        <ul class="trophyPoints" v-if="showTrophies">
            <li v-for="item in gear" :key="item.name">{{ item.name }} - {{ item.points }}</li>
            <li v-for="trophy in trophies" :key="trophy.name">{{ trophy.name }} - {{ trophy.points }}</li>
        </ul>
        <div v-html='markdown'></div>
        <base-button v-for="choice in choices" :key="choice.sectionId" :to="choice.sectionId" link>{{ choice.btnText }}</base-button>
        <base-button v-if="rollResult" :to="rollResult.sectionId" link>{{ rollResult.btnText }}</base-button>
    </section>
</template>

<script>
import Marked from 'marked';
import sections from '../../store/sections.js';
import BaseButton from '../ui/BaseButton.vue';

export default {
    props: ['id'],
    components: {
        BaseButton
    },
    data() {
        return {
            currentSection: null,
            rollResult: null,
            showTrophies: false,
            sections
        }
    },
    computed: {
        title() {
            return this.currentSection.title;
        },
        markdown() {
            return Marked(this.currentSection.text);
        },
        choices() {
            return this.currentSection.choices;
        },
        gear() {
            return this.$store.getters['sagard'].gear;  
        },
        trophies() {
            return this.$store.getters['sagard'].trophies;
        }
    },
    created() {
        this.currentSection = this.sections.find(
            (section) => section.id === this.id
        );

        // update Sagard
        if(this.currentSection.updates) {
            this.$store.dispatch('updateSagardAll', this.currentSection.updates);
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.currentSection = this.sections.find(
            (section) => section.id === to.params.id
        );
        // update Sagard
        if(this.currentSection.updates) {
            this.$store.dispatch('updateSagardAll', this.currentSection.updates);
        }
        document.getElementById('main-top').scrollIntoView();
        next();
    },
    watch: {
        // TO DO: change this to replace router on roll instead of 
        // putting link on button for users to see
        'currentSection.roll'(value) {
            if(value) {
                const total = value.length;
                const roll = Math.floor(Math.random() * total);
                this.rollResult = value[roll];
            } else {
                this.rollResult = null;
            }
        },
        'currentSection.section'(value) {
            if(value === 1) {
                this.$store.dispatch('resetAll');
            }
            
            if(value===53) {
                this.$store.dispatch('updateLostToKnight', 1);
                if(this.$store.getters['lostToKnight']===1) {
                    this.$store.dispatch('updateSagardHp', 20);
                    this.currentSection.choices = [
                        {
                            btnText: 'Fight the Plumed Knight again',
                            sectionId: '/battle/fighting-the-plumed-knight'
                        }
                    ]
                } else if(this.$store.getters['lostToKnight']===2) {
                    this.$store.dispatch('updateSagardHp', 20);
                    this.currentSection.choices = [
                        {
                            btnText: 'Go west',
                            sectionId: 'leaving-home'
                        }
                    ]
                }
            }

            if(value===85) {
                if(this.$store.getters['menInWhite'] === 0) {
                    this.currentSection.choices = [
                        {
                            btnText: 'Both are still alive',
                            sectionId: '/battle/the-men-in-white'
                        }
                    ]
                } else if(this.$store.getters['menInWhite'] === 1) {
                    this.currentSection.choices = [
                        {
                            btnText: 'One is dead',
                            sectionId: '/battle/the-man-in-white'
                        }
                    ]
                } else if(this.$store.getters['menInWhite'] === 2) {
                    this.currentSection.choices = [
                        {
                            btnText: 'Both are dead',
                            sectionId: '/section/after-the-yeti-battle'
                        }
                    ]
                }
            }

            if(value === 114) {
                const sagard = this.$store.getters['sagard'];
                const reducer = (accumulator, currentValue) => accumulator + currentValue;

                const gear = sagard.gear;
                let gearPoints = gear.map(item => item.points);
                let gearPointsTotal = gearPoints.reduce(reducer, 0);

                const trophies = sagard.trophies;
                let trophyPoints = trophies.map(trophy => trophy.points);
                let trophyPointsTotal = trophyPoints.reduce(reducer, 0);

                let totalPoints = gearPointsTotal + trophyPointsTotal;
                console.log(totalPoints);

                if(totalPoints < 14) {
                    this.currentSection.choices = [
                        {
                            btnText: 'See the elders\' judgment',
                            sectionId: '1-13-trophy-points'
                        }
                    ]
                } else if(totalPoints > 13 && totalPoints < 27) {
                    this.currentSection.choices = [
                        {
                            btnText: 'See the elders\' judgment',
                            sectionId: '14-26-trophy-points'
                        }
                    ]
                } else {
                    this.currentSection.choices = [
                        {
                            btnText: 'See the elders\' judgment',
                            sectionId: '27-trophy-points-and-up'
                        }
                    ]
                }
            }

            if(value === 115 || value === 116 || value === 117) {
                this.showTrophies = true;
            }
        }
    }
}
</script>

<style scoped>
section { 
    max-width: 38rem;
}

a + a { 
    margin-top: 1rem;
}

.trophyPoints {
    border-bottom: 1px solid #c9c9c9;
    list-style: none;
    padding: 0 0 1rem 0;
}
</style>