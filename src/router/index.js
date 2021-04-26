import Vue from "vue";
import VueRouter from "vue-router";
import LoginReg from "../views/Login-Reg.vue";
import Listas from "../views/Listas.vue";
import Lista from "../views/Lista.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginReg",
    component: LoginReg
  },
  {
    path: "/listas",
    name: "Listas",
    component: Listas
  },
  {
    path: "/lista/:id",
    name: "Lista",
    component: Lista
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;