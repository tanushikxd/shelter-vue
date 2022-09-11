import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
import Main from "./modules/main/Main-page.vue";
import Pets from "./modules/main/components/pets/Pets-component.vue";
import Contacts from "./modules/contacts/Contacts-page.vue";
import About from "./modules/about/About-page.vue";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/ourPets",
      name: "ourPets",
      component: Pets,
    },
    {
      path: "/contacts",
      name: "contacts",
      component: Contacts,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
  ],
});
