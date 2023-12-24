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

  <Transition name="slide-left">
    <div class="mobile-nav" v-if="mobileNav">
      <ul>
        <router-link to="/main">
          <li><a href="#">Home</a></li></router-link
        >
        <li><a href="#">Shop</a></li>
        <router-link to="/main/about"
          ><li><a href="#">About Us </a></li></router-link
        >
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

<style lang="scss">
$color_1: #fff;
$color_2: antiquewhite;
$background-color_1: #fff;
$background-color_2: #333d29;

.brand {
  z-index: 110;
}
.hamburger-menu {
  z-index: 100;
  div {
    &:nth-child(1) {
      display: block;
      width: 15px;
      height: 3px;
      background-color: $background-color_1;
      margin: 5px 0;
      transition: 0.4s;
    }
    &:nth-child(2) {
      display: block;
      width: 25px;
      height: 3px;
      background-color: $background-color_1;
      margin: 5px 0;
      transition: 0.4s;
    }
    &:nth-child(3) {
      display: block;
      width: 15px;
      height: 3px;
      background-color: $background-color_1;
      margin: 5px 10px;
      transition: 0.4s;
    }
  }
}
.mobile-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  z-index: 98;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    list-style: none;
    border-radius: 0 0 1rem 1rem;
    gap: 1.5rem;
    padding: 4rem;
    background-color: $background-color_2;
  }
  a {
    font-size: 1.5rem;
    color: $color_1;
    text-decoration: none;
    transition: 0.4s;
    &:hover {
      font-size: 2rem;
      color: $color_2;
      text-decoration: none;
    }
  }
}
.active {
  div {
    &:nth-child(1) {
      width: 25px;
      transform: rotate(45deg) translate(5px, 3px);
    }
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      width: 25px;
      transform: rotate(-45deg) translate(-5px, -8px);
    }
  }
}

.slide-left-enter-active {
  transition: all 0.2s ease-out;
}
.slide-left-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-left-enter-from {
  transform: translateX(20px);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
