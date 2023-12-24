<template>
  <div class="main">
    <div class="main-contents">
      <div class="slider">
        <TransitionGroup name="list" tag="ul" class="images">
          <li
            v-for="item in items.slice(
              currentVisibleImage - 1,
              currentVisibleImage
            )"
            :key="item.id"
          >
            <img :src="item.src" />
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
            home products to green technologies, we strive to inspire a
            lifestyle that not only enhances the well-being of individuals but
            also preserves the beauty of our planet.
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
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("../../assets/images/main-background.png");
  background-size: cover;
}
.main-contents {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  gap: 1rem;
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
  transition: all 0.5s ease;
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
