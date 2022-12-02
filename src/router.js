import { createRouter, createWebHistory } from 'vue-router';

import FullMenu from './components/FullMenu.vue';
import CreatePosition from './components/CreatePosition.vue';
import EditPosition from './components/EditPosition.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: FullMenu },
    { path: '/create', component: CreatePosition },
    { path: '/edit/:id', props: true, component: EditPosition }
  ]
});

export default router;