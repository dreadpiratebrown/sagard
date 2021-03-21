import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import mitt from 'mitt';

import store from './store/index.js';
import App from './App.vue';
import Intro from './components/story/Intro.vue';
import StorySection from './components/story/StorySection.vue';
import StoryBattle from './components/story/StoryBattle.vue';
import Combat from './components/story/Combat.vue';

const router = createRouter({
    routes: [
        {
            path: '/sagard/',
            component: Intro
        },
        {
            path: '/sagard/section/:id',
            component: StorySection,
            props: true
        },
        {
            path: '/sagard/battle/:id',
            component: StoryBattle,
            props: true
        },
        {
            path: '/sagard/combat/',
            component: Combat
        }
    ],
    history: createWebHistory(),
    base: '/sagard/'
})

const emitter = mitt();

const app = createApp(App);

app.use(router);
app.use(store);
app.config.globalProperties.emitter = emitter;

app.mount('#app')
