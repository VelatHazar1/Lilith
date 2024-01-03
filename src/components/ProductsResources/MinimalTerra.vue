<template>
  <div class="main">
    <div class="detailed-main">
      <div class="slider">
        <TransitionGroup name="list" tag="ul" class="images" ref="el">
          <li
            v-for="item in items.slice(
              currentVisibleImage - 1,
              currentVisibleImage
            )"
            :key="item.id"
          >
            <img :src="item.src" data-aos="fade-left" />
          </li>
        </TransitionGroup>

        <div class="dots">
          <label @click="changeImage(1)" for="img1"></label>
          <label @click="changeImage(2)" for="img2"></label>
          <label @click="changeImage(3)" for="img3"></label>
          <label @click="changeImage(4)" for="img4"></label>
        </div>
      </div>
      <div class="main-information" data-aos="fade-right">
        <div class="slogan">
          <h1>Simplicity in Harmony</h1>
        </div>
        <div class="text">
          <p>
            Minimal encourages individuals to declutter their lives, simplify
            their surroundings, and focus on what truly matters. By adopting
            minimalist principles, people can not only reduce their
            environmental impact but also experience the freedom and tranquility
            that come with a life unburdened by excess.
          </p>
        </div>
        <router-link to="/main"
          ><base-button class="main-button">
            Back to Main
          </base-button></router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

import { reactive, ref, watch } from "vue";
import img1 from "../../assets/minimal/minimal1.webp";
import img2 from "../../assets/minimal/minimal2.webp";
import img3 from "../../assets/minimal/minimal3.webp";
import img4 from "../../assets/minimal/minimal4.webp";

const items = reactive([
  {
    src: img1,
    alt: "m1",
    id: 1,
  },
  {
    src: img2,
    alt: "m2",
    id: 2,
  },
  {
    src: img3,
    alt: "m3",
    id: 3,
  },
  {
    src: img4,
    alt: "m4",
    id: 4,
  },
]);

let currentVisibleImage = ref<number>(1);

const changeImage = (imageNumber: number) => {
  currentVisibleImage.value = imageNumber;
};

AOS.init({
  duration: 800, // values from 0 to 3000, with step 50ms
});

const el = ref(null);
const { isSwiping, direction } = useSwipe(el);

watch(isSwiping, (value) => {
  if (value) {
    if (direction.value === "left") {
      currentVisibleImage.value++;
    } else if (direction.value === "right") {
      currentVisibleImage.value--;
    }
  }

  if (currentVisibleImage.value > 4) {
    // If yes, reset it to 1
    currentVisibleImage.value = 1;
  }
  if (currentVisibleImage.value < 1) {
    // If yes, reset it to 1
    currentVisibleImage.value = 4;
  }
});
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("../../assets/images/main-background.png");
  background-size: cover;
}
.detailed-main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
}
.main-information {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;

  h1 {
    text-align: center;
    font-size: 4rem;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
  p {
    padding: 1.2rem;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
}
.slider {
  position: relative;
  width: 50%;
  overflow: hidden;
}
.images {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
  img {
    padding: 1rem;
    height: 350px;
    width: 100%;
    border-radius: 2rem;
  }
}
.dots {
  display: flex;
  justify-content: center;
  margin: 5px;
  label {
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border: solid #fff 3px;
    cursor: pointer;
    transition: all 0.15s ease;
    margin: 5px;
    &:hover {
      background: #fff;
    }
  }
}

@media (max-width: 990px) {
  .slider {
    width: 100%;
  }

  .detailed-main {
    height: auto;
    flex-direction: column;
  }
  .main-information {
    padding-bottom: 2rem;
    width: 100%;

    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.2rem;
      text-align: center;
    }
  }
  .main-contents {
    margin: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .images {
    padding-top: 4rem;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
