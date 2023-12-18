import { createRouter, createWebHistory } from "vue-router";
import LandingMain from "./components/LandingResources/LandingMain.vue";

import DetailedPageForLandingPage from "./components/MainResources/DetailedPageForLandingPage.vue";
import MinimalTerra from "./components/ProductsResources/MinimalTerra.vue";
import ModernTerra from "./components/ProductsResources/ModernTerra.vue";
import ClassicTerra from "./components/ProductsResources/ClassicTerra.vue";
import AboutPage from "./components/MainResources/AboutPage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/main" },
    {
      name: "main",
      path: "/main",
      components: { default: LandingMain },
    },
    {
      name: "discover",
      path: "/discover",
      components: { default: DetailedPageForLandingPage },
    },
    { path: "/main/minimal", components: { default: MinimalTerra } },
    { path: "/main/modern", components: { default: ModernTerra } },
    { path: "/main/classic", components: { default: ClassicTerra } },
    { path: "/main/about", components: { default: AboutPage } },
  ],
});

export default router;
