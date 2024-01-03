<template>
  <div class="main">
    <div class="about">
      <div class="about-info" data-aos="fade-right">
        <h1>Nurturing Sustainable Legacies for Generations</h1>
        <p>
          Welcome to LILITH, where we embark on a journey rooted in commitment,
          innovation, and a profound respect for our planet. Our story is a
          testament to the vision of creating sustainable legacies that endure,
          leaving a positive impact on both the environment and the lives we
          touch.
        </p>
        <router-link to="/main"
          ><base-button>Back to Main</base-button></router-link
        >
      </div>
      <div class="image" data-aos="fade-left">
        <img src="../../assets/images/aboutUsPage.webp" alt="" />
      </div>
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
$color_1: #000;

.main {
  background-image: url("../../assets/images/about-background.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.about {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 5rem;
  flex-direction: row-reverse;
}
.about-info {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 3rem;
  width: 50%;
  padding: 3rem;
  h1 {
    color: $color_1;
    font-size: 4rem;
    font-style: italic;
    font-weight: 200;
  }
  p {
    color: $color_1;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 300;
  }
}
.image img {
  border-radius: 1rem;
  width: 100%;
}

@media (max-width: 990px) {
  .main {
    height: auto;
    width: 100%;
  }
  .about {
    flex-direction: column-reverse;
    gap: 2rem;
    margin: 2rem;
  }
  .about-info {
    align-items: center;
    text-align: center;

    gap: 1;
    width: 100%;
    padding: 1rem;
    h1 {
      font-size: 2.5rem;
    }
    p {
      text-align: center;
    }
  }
}
@media only screen and (min-width: 601px) and (max-width: 1024px) {
  .main {
    height: auto;
    width: 100%;
  }
  .about {
    flex-direction: column-reverse;
    gap: 2rem;
    margin: 2rem;
  }
  .about-info {
    align-items: center;
    h1 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
      text-align: center;
      width: 30rem;
    }
  }
  img {
    width: 30rem;
  }
}
</style>
