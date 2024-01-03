<template>
  <div class="main">
    <div class="main-container">
      <base-card>
        <div class="shopping-card">
          <h1>Modern</h1>
          <div class="image">
            <img src="../../assets/images/modern 1.png" alt="" />
          </div>
          <div class="shopping-info">
            <p>
              Modern terrarium design emphasizes sleek aesthetics, innovative
              materials, and a blend of form and function.
            </p>
          </div>
          <router-link to="/main/modern">
            <base-button>Learn</base-button>
          </router-link>
        </div>
      </base-card>
      <base-card>
        <div class="shopping-card">
          <h1>Classic</h1>
          <div class="image">
            <img src="../../assets/images/Classic.png" alt="" />
          </div>
          <div class="shopping-info">
            <p>
              Classic terrarium design revolves around the timeless beauty of
              clear glass containers, layered composition.
            </p>
          </div>

          <router-link to="/main/classic">
            <base-button>Learn</base-button>
          </router-link>
        </div>
      </base-card>
      <base-card>
        <div class="shopping-card">
          <h1>Minimal</h1>
          <div class="image">
            <img src="../../assets/images/minii 1.png" alt="" />
          </div>
          <div class="shopping-info">
            <p>
              Minimal terrarium design is characterized by simplicity, neutral
              colors, and a clean, uncluttered aesthetic.
            </p>
          </div>
          <router-link to="/main/minimal">
            <base-button>Learn</base-button>
          </router-link>
        </div>
      </base-card>
    </div>
  </div>
</template>
<script setup>
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
AOS.init({
  duration: 800, // values from 0 to 3000, with step 50ms
});
</script>
<style scoped lang="scss">
.main {
  display: flex;
  justify-content: center;
  align-items: center;
}
.main-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 80%;
  gap: 3rem;
}
.shopping-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
  }
  p {
    font-size: 1.3rem;
    font-style: italic;
    font-weight: 300;
    padding: 2rem;
    text-align: center;
  }
  h1 {
    font-weight: 300;
  }
}

@media (max-width: 990px) {
  .main {
    height: auto;
  }
  .main-container {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
    gap: 0;
  }
  img {
    width: 20rem;
  }
}
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .main {
    height: auto;
  }
  .main-container {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
  img {
    width: 30rem;
  }
  .shopping-card {
    p {
      width: 25rem;
      text-align: center;
      font-size: 1.5rem;
    }
  }
}
</style>
