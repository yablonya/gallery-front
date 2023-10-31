import Registration from "@/pages/Registration.vue";
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";

const routes = [
  {path: '/', name: 'Home', component: Home},
  {path: '/registration', name: 'Registration', component: Registration}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router