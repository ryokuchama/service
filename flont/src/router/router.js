import Vue from 'vue';
import VueRouter from 'vue-router';
import Menu from '../views/Menu.vue';
import TimeAndPlace from '../views/TimeAndPlace.vue';
import Check from '../views/Check.vue';
import Confirmation from '../views/Confirmation.vue';

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Menu },
    { path: '/TimeAndPlace', component: TimeAndPlace },
    { path: '/Check', component: Check },
    { path: '/Confimation', component: Confirmation }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;