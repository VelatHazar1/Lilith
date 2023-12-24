<template>
  <div class="main">
    <div class="slider">
      <TransitionGroup name="list" tag="ul" class="images">
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
    <div class="main-information">
      <div class="slogan">
        <h1>Inspiring Green Living, One Room at a Time.</h1>
      </div>
      <div class="text">
        <p>
          At LILITH, our mission is to redefine modern living by integrating
          sustainable practices into every aspect of life. From eco-conscious
          home products to green technologies, we strive to inspire a lifestyle
          that not only enhances the well-being of individuals but also
          preserves the beauty of our planet.
        </p>
      </div>
      <router-link to="/main"
        ><base-button class="main-button">
          Back to Main
        </base-button></router-link
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
  initClassName: "aos-init", // class applied after initialization
  animatedClassName: "aos-animate", // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 800, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});

import { reactive, ref } from "vue";
import img1 from "../../assets/detailedPageImages/8932bd_0ea5dddf65214f5d80d5113e87e7510f~mv2.webp";
import img2 from "../../assets/detailedPageImages/8932bd_675ba1374a5a44af80a36a29a62cc37d~mv2.webp";
import img3 from "../../assets/detailedPageImages/8932bd_bb5dfe2e309a42869a7948bbbde938aa~mv2.webp";
import img4 from "../../assets/detailedPageImages/8932bd_e93c8e6a94214168a71885e9c7b15c09~mv2.webp";

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
</script>

<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/images/main-background.png");
  background-size: cover;
  padding: 2rem 0;
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
    width: 30rem;
    padding: 1.2rem;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
}
.slider {
  position: relative;
  width: 35%;
  overflow: hidden;
}
.images {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style: none;
  img {
    height: 400px;
    width: 100%;
    border-radius: 1rem;
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
    width: 90%;
  }
  .main {
    height: auto;
  }
  .main-contents {
    margin: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .main-information {
    h1 {
      font-size: 1.5rem;
      width: 20rem;
    }
    p {
      width: 20rem;
      padding: 1.2rem;
      font-size: 1rem;
      font-style: italic;
      font-weight: 300;
      line-height: normal;
    }
  }
  .main-button {
    font-size: 1rem;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
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
