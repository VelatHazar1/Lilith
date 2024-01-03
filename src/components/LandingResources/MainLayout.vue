<template>
  <router-view>
    <div class="main">
      <div class="main-container">
        <div class="landing-image" data-aos="fade-left">
          <img
            src="../../assets/images/landing image.png"
            alt="Image of Classic Terra House"
          />
        </div>
        <div class="landing-information" data-aos="fade-right">
          <div class="slogan">
            <h1>STRIKING FORESTS</h1>
            <h1>WITHIN</h1>
            <h1>SMALL WORLDS</h1>
          </div>
          <div class="sum-of-slogan">
            <p>
              In the hushed embrace of miniature realms, where whispers dance
              among blades of grass, there lies a realm of striking forests
              within small worlds.
            </p>
            <router-link to="/discover" class="button"
              ><base-button>Discover</base-button></router-link
            >
          </div>
        </div>
      </div>
    </div>
  </router-view>
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
  height: 100vh;
  background-image: url("../../assets/images/main-background.png");
  background-size: cover;
}
.main-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  .landing-image {
    img {
      width: 100%;
    }
  }
}
.slogan {
  h1 {
    text-align: center;
    font-size: 4.5em;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
}
.sum-of-slogan {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  p {
    max-width: 30rem;
    padding: 1.2rem;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
}
@media (max-width: 600px) {
  .main {
    height: auto;
  }
  .main-container {
    margin: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slogan {
    h1 {
      font-size: 2rem;
    }
  }
  .sum-of-slogan {
    p {
      width: 20rem;
    }
  }
}
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .main {
    height: auto;
  }
  .main-container {
    margin: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slogan {
    h1 {
      font-size: 3rem;
    }
  }
  .sum-of-slogan {
    p {
      text-align: center;
      width: 30rem;
      font-size: 1.5rem;
    }
  }
}
</style>
