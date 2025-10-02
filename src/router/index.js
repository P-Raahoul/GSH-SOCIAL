import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue'; // ou ton composant cible

const routes = [
  { path: '/login', name: 'Login', component: log },
  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
