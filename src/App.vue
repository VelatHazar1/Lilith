<template>
  <mobile-nav v-if="isScreenBelow990"></mobile-nav>
  <the-navigation v-if="!isScreenBelow990"></the-navigation>

  <router-view></router-view>

  <mobile-footer v-if="isScreenBelow990"></mobile-footer>
  <the-footer v-if="!isScreenBelow990"></the-footer>
</template>

<script setup>
import TheNavigation from "./components/layouts/TheNavigation.vue";
import TheFooter from "./components/layouts/TheFooter.vue";
import MobileNav from "./components/layouts/MobileNav.vue";
import MobileFooter from "./components/layouts/MobileFooter.vue";

import { ref, onMounted, onBeforeUnmount } from "vue";

const isScreenBelow990 = ref(window.innerWidth < 990);

const handleResize = () => {
  isScreenBelow990.value = window.innerWidth < 990;
};

onMounted(() => {
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped>
* {
  position: relative;
}
</style>
