import Registration from "@/pages/Registration.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import Login from "@/pages/Login.vue";

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/login', name: 'Login', component: Login},
  {path: '/registration', name: 'Registration', component: Registration}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router