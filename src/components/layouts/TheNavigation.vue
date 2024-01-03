<template>
  <nav>
    <div class="container">
      <div class="brand">
        <h1>LILITH</h1>
      </div>
      <div class="navigation">
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
      <div class="social-media">
        <Icon icon="fa6-brands:shopify" color="white" width="25" height="25" />
        <Icon icon="bi:instagram" color="white" width="25" height="25" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style scoped>
.social-media {
  display: flex;
  gap: 1rem;
}
</style>
