import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import mitt from 'mitt';

import store from './store/index.js';
import App from './App.vue';
import StorySection from './components/story/StorySection.vue';
import StoryBattle from './components/story/StoryBattle.vue';

const router = createRouter({
    routes: [
        {
            path: '/section/:id',
            component: StorySection,
            props: true
        },
        {
            path: '/battle/:id',
            component: StoryBattle,
            props: true
        }
    ],
    history: createWebHistory()
})

const emitter = mitt();

const app = createApp(App);

app.use(router);
app.use(store);
app.config.globalProperties.emitter = emitter;

app.mount('#app')
