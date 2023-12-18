<template>
  <nav>
    <div class="container">
      <div class="brand">
        <h1>LILITH</h1>
      </div>
      <div
        @click="toggleMobileNav"
        class="hamburger-menu"
        :class="{ active: mobileNav }"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </nav>
  <Transition>
    <div class="mobile-nav" v-if="mobileNav">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Shop</a></li>
        <li><a href="#">About Us </a></li>
        <li><a href="#">Contact </a></li>
      </ul>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";
const mobileNav = ref(false);

const toggleMobileNav = function () {
  mobileNav.value = !mobileNav.value;
};
</script>

<style scoped>
.brand {
  z-index: 1000;
}
.hamburger-menu {
  z-index: 1000;
}
.hamburger-menu div:nth-child(1) {
  display: block;
  width: 15px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: 0.4s;
}
.hamburger-menu div:nth-child(2) {
  display: block;
  width: 25px;
  height: 3px;
  background-color: #fff;
  margin: 5px 0;
  transition: 0.4s;
}
.hamburger-menu div:nth-child(3) {
  display: block;
  width: 15px;
  height: 3px;
  background-color: #fff;
  margin: 5px 10px;
  transition: 0.4s;
}

.active div:nth-child(1) {
  width: 25px;
  transform: rotate(45deg) translate(5px, 3px);
}
.active div:nth-child(2) {
  display: none;
}
.active div:nth-child(3) {
  width: 25px;
  transform: rotate(-45deg) translate(-5px, -8px);
}

.v-enter-active {
  transition: all 0.4s ease-out;
}

.v-leave-active {
  transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);
}

.v-enter-from,
.v-leave-to {
  transform: translateX(10rem);
  opacity: 0;
}
.mobile-nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.mobile-nav ul {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  list-style: none;

  border-radius: 0 0 0 1rem;
  gap: 1.5rem;
  padding: 4rem;
  background-color: #333d29;
}
.mobile-nav a {
  font-size: 1.2rem;
  color: #fff;
  text-decoration: none;
}
</style>
