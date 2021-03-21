<template>
    <div class="modal" v-if="showEvent">
        <div class="backdrop"></div>
        <div class="modal-content">
            <p v-html="event.text"></p>
            <base-button v-for="btn in event.choices" :key="btn.target" :to="btn.target" link>{{ btn.btnText }}</base-button>
            <base-button @click="closeModal" mode="attack">{{ event.closeBtn }}</base-button>
        </div>
    </div>
    <section>
        <h1>{{ title }}</h1>
        <div v-html='markdown'></div>
        <div class="good-guys">
            <div class="battle-card">
                <div class="battle-card--title">
                    Sagard
                </div>
                <div class="battle-card--info">
                    <img src="../../assets/barbarian.svg" />
                    Level: {{ sagard.level }}
                    <div class="hp-bar">
                        <div class="hp-bar--bg"><div class="hp-bar--fg" :style="{width: (sagard.hp / 20) * 100 + '%'}">{{ sagard.hp }}</div></div>
                    </div>
                </div>
            </div>
            <ol class="allies">
                <Ally v-for="ally in allies"
                :key="ally.name"
                :name="ally.name"
                :level="ally.level"
                :hp="ally.hp"
                :icon="ally.icon"
                @logHit="handleAllyHit"
                @die="updateAllies"
                :ref="setAllyRefs"></Ally>
            </ol>
        </div>
        <ol class="foes">
            <Foe v-for="foe in foes" 
            :key="foe.name"
            :name="foe.name"
            :level="foe.level"
            :hp="foe.hp"
            :hold="foe.hold"
            :disableOnHold="foe.disableOnHold"
            :icon="foe.icon"
            :goFirst="foe.goFirst"
            :sagardLevel="sagard.level"
            :sagardGear="sagard.gear"
            :allies="allies"
            @logHit="handleHit"
            @hitSagard="handleDmg"
            @die="updateFoes"
            :ref="setEnemyRefs"></Foe>
        </ol>

        <base-button v-if="canFlee && !(success || failure)" 
        @click="flee" 
        :disabled="fleeDisabled" 
        mode="flee">Flee!</base-button>

        <base-button v-if="special && !(success || failure)" 
        @click="rollSpecial" 
        :disabled="specialDisabled"
        mode="flee">{{ special.button }}</base-button>

        <base-button v-if="success" :to="successLink.target" link>{{ successLink.text }}</base-button>
        <base-button v-if="failure" :to="failureLink.target" link>{{ failureLink.text }}</base-button>
        <div class="battle-log">
            <transition-group tag="ul" name="battle-log">
                <li v-for="msg in battleMsg" :key="msg.id">{{ msg.text }}</li>
            </transition-group>
        </div>
    </section>
</template>

<script>
import Marked from 'marked';
import Foe from './Foe.vue';
import Ally from './Ally.vue';
import BaseButton from '../ui/BaseButton.vue';
import battles from '../../store/battles.js';
export default {
    components: {
        Foe,
        Ally,
        BaseButton
    },
    props: ['id'],
    data() {
        return {
            currentBattle: null,
            sagard: null,
            battleMsg: [],
            fleeDisabled: false,
            specialDisabled: false,
            numFoes: 0,
            success: false,
            failure: false,
            enemyRefs: [],
            allyRefs: [],
            event: null,
            showEvent: false,
            dmgModifier: 0,
            battles
        }
    },
    computed: {
        markdown() {
            return (this.currentBattle.text ? Marked(this.currentBattle.text) : null);
        },
        title() {
            return this.currentBattle.title;
        },
        foes() {
            return this.currentBattle.foes;
        },
        allies() {
            return this.currentBattle.allies;
        },
        canFlee() {
            return this.currentBattle.canFlee;
        },
        isDisabled() {
            return this.fleeDisabled;
        },
        successLink() {
            return this.currentBattle.success;
        },
        failureLink() {
            return this.currentBattle.failure;
        },
        special() {
            return this.currentBattle.special;
        }
    },
    created() {
        document.getElementById('main-top').scrollIntoView();

        this.currentBattle = this.battles.find(
            (battle) => battle.id === this.id
        );

        this.sagard = this.$store.getters['sagard'];

        this.numFoes = this.currentBattle.foes.length;

        this.event = this.currentBattle.event;
    },
    mounted() {
        this.emitter.on('allyAttacked', allyInfo => {
            this.allies[this.allies.findIndex(ally => ally.name === allyInfo.name)].hp = allyInfo.hp;
        });
    },
    beforeUpdate() {
        this.enemyRefs = [];
        this.allyRefs = [];
    },
    methods: {
        flee() {
            const roll = Math.floor(Math.random() * 4);
            if(roll%2 === 0) {
                this.$router.replace(this.currentBattle.flee);
            } else {
                this.battleMsg.unshift({
                    text: 'You failed to flee',
                    id: new Date().getTime().toString()
                });
            }
            this.fleeDisabled = true;
        },
        rollSpecial() {
            const roll = Math.floor(Math.random() * 4) + 1;
            console.log(roll);
            if(this.special.rollNeeded.find(val => val === roll)) {
                this.$router.replace(this.special.target);
            } else {
                this.battleMsg.unshift({
                    text: this.special.failText,
                    id: new Date().getTime().toString()
                });
            }
            if(!this.special.attackAfterRoll) {
                this.enemiesAttack();
            }
            this.specialDisabled = true;
        },
        handleHit(fighter,amount) {
            // mail shirt; possibly change this to an armor attribute?
            if(fighter != "Sagard" && this.sagard.gear.findIndex(item => item.name==="Mail shirt") > -1 && amount > 0) {
                amount--;
            }

            // log the message
            if(amount===0) {
                this.battleMsg.unshift({
                    text: `${fighter} missed!`,
                    id: new Date().getTime().toString()
                })
            } else {
                this.battleMsg.unshift({
                    text: `${fighter} hit for ${amount} damage!`,
                    id: new Date().getTime().toString()
                });
            }

            // start the enemy attack
            if(fighter==="Sagard") {
                this.enemiesAttack();
                // if there's an event, check to see if it should fire
                if(this.event) {
                    this.event.rounds--;

                    if(this.event.rounds===0) {
                        this.showEvent = true;
                    }
                }
            }
            this.fleeDisabled = false;
            this.specialDisabled = false;
        },
        enemiesAttack() {
            // handle melting Ice Golem logic
            if(this.currentBattle.section === 105 || this.currentBattle.section === 109) {
                this.enemyRefs[0].meltGolem();
                this.battleMsg.unshift({
                    text: 'Ice Golem melted for 2 damage!',
                    id: new Date().getTime().toString()
                })
            }

            // handle all enemy attacks
            if(this.currentBattle.oneByOne) {
                // only let the first surviving enemy attack
                const enemy = this.enemyRefs.find(el => el.foeHp > 0 && !el.roundsToHold);
                enemy.attackSagard(this.dmgModifier);
            } else {
                // all surviving enemies attack
                for(let x = 0; x < this.enemyRefs.length; x++) {
                    let enemy = this.enemyRefs[x];

                    if(enemy.roundsToHold && enemy.roundsToHold > 0) {
                        enemy.roundsToHold--;
                    }

                    if(enemy.foeHp > 0 && !enemy.roundsToHold) {
                        // if there surviving allies, attack first one
                        // otherwise attack sagard
                        if(this.allyRefs.length > 0 && this.allyRefs.findIndex(ally => ally.hp > 0) > -1){
                            this.allyRefs[this.allyRefs.findIndex(ally => ally.hp > 0)].attackAlly(enemy.name, enemy.level);
                        } else {
                            enemy.attackSagard(this.dmgModifier);
                        }
                    }
                }
            }
        },
        handleAllyHit(fighter, amount) {
            if(amount===0) {
                this.battleMsg.unshift({
                    text: `${fighter} missed!`,
                    id: new Date().getTime().toString()
                })
            } else {
                this.battleMsg.unshift({
                    text: `${fighter} hit for ${amount} damage!`,
                    id: new Date().getTime().toString()
                });
            }
        },
        handleDmg(amount) {
            // mail shirt; possibly change this to an armor attribute?
            if(this.sagard.gear.findIndex(item => item.name==="Mail shirt") > -1 && amount > 0) {
                amount--;
            }

            // shield - absorb 
            if(this.sagard.gear.findIndex(item => item.name==="Tehnite shield") > -1 && amount > 0) {
                const index = this.sagard.gear.findIndex(item => item.name==="Tehnite shield");
                const shield = this.sagard.gear[index];
                if(shield.max > 0 && shield.max > amount) {
                    this.battleMsg.unshift({
                        text: `Shield absorbed ${amount} damage`,
                        id: new Date().getTime().toString()
                    })
                    // if more shield than damage, absorb all of it and set damage to 0
                    shield.max-=amount;
                    amount = 0;
                } else if(shield.max > 0 && shield.max <= amount) {
                    this.battleMsg.unshift({
                        text: `Shield absorbed ${shield.max} damage and is now useless`,
                        id: new Date().getTime().toString()
                    })
                    // if less shield than damage, subtract shield from damage and set shield to 0
                    amount-=shield.max;
                    shield.max = 0;
                }

                // if shield is 0 or less, remove it and add raven trophy
                if(shield.max <= 0) {
                    this.sagard.gear.splice(index,1);
                    this.sagard.trophies.push({name: 'Raven from shield', points: 2})
                }
            }
            this.sagard.hp-=amount;
            if(this.sagard.hp < 0) {
                this.sagard.hp = 0;
            }
            this.$store.dispatch('updateSagardHp', this.sagard.hp);
        },
        updateFoes() {
            this.numFoes--;
        },
        updateAllies() {
            this.numAllies--;

            if(this.currentBattle.section === 84) {
                this.$store.dispatch('updateMenInWhite', 1)
            }
        },
        setEnemyRefs(el) {
            if(el) {
                this.enemyRefs.push(el);
            }
        },
        setAllyRefs(el) {
            if(el) {
                this.allyRefs.push(el);
            }
        },
        closeModal() {
            this.showEvent = false;
        }
    },
    watch: {
        numFoes(value) {
            if(value === 0) {
                this.success = true;
                this.fleeDisabled = true;
            }
        },
        'sagard.hp'(value) {
            if(value <= 0) {
                this.failure = true;
                this.fleeDisabled = true;
            }
        },
        'currentBattle.section'(value) {
            // frusti sage gets sword
            if(value === 63) {
                this.dmgModifier = 1;
            }

            // Section 67 - roll for initiative
            if(value === 67) {
                const roll = Math.floor(Math.random() * 2);
                if(roll === 1) {
                    this.currentBattle.foes[0].goFirst = true;
                }
            }
        }
    }
}
</script>

<style scoped>
@import '../../assets/battle-card.css';
section { 
    max-width: 38rem;
    position: relative;
}

.good-guys { display: flex; }

.foes, .allies {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
}

.allies {
    margin: 0 0 0 4px;
    max-width: 400px;
}

.foes li,
.allies li { margin: 0 4px 8px 0; }

.battle-log {
    left: 100%;
    position: absolute;
    top: 0;
}

.battle-log ul {
    list-style: none;
    margin: 0;
    white-space: nowrap;
}

.battle-log-enter-from {
    color: red;
    font-weight: bold;
}

.battle-log-enter-active {
    transition: all 2s ease-out;
}

.battle-log-enter-to {
    color: #202020;
    font-weight: normal;
}

.backdrop {
    background: rgba(0,0,0,0.35);
    height: 100vh;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 90;
}

.modal-content {
    background: #ffffff;
    left: 30%;
    padding: 1.5rem;
    position: absolute;
    top: 30%;
    width: 40%;
    z-index: 100;
}

.modal-content button { display: block; }
</style>