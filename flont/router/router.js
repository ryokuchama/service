import Vue from 'vue';
import VueRouter from 'vue-router';
import Menu from './components/Menu.vue';
import TimeAndPlace from './components/TimeAndPlace.vue';
import Check from './components/Check.vue';
import Confirmation from './components/Confirmation.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Menu },
    { path: '/TimeAndPlace', component: TimeAndPlace },
    { path: '/Check', component: Check },
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;