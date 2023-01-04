import { createRouter, createWebHistory } from "vue-router";
import PageOne from "../views/PageOne.vue";
import PageTwo from "../views/PageTwo.vue";
import PageThree from "../views/PageThree.vue";
import PageZero from "../views/PageZero.vue";
import CongratulationsPage from "../views/CongratulationsPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "page-zero",
      component: PageZero,
    },
    {
      path: "/screen-one",
      name: "page-one",
      component: PageOne,
    },
    {
      path: "/screen-two",
      name: "page-two",
      component: PageTwo,
    },
    {
      path: "/screen-three",
      name: "page-three",
      component: PageThree,
    },
    {
      path: "/completion",
      name: "Congratulations",
      component: CongratulationsPage,
    },
  ],
});

export default router;
