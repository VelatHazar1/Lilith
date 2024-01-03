<template>
  <div class="main">
    <div class="about">
      <div class="about-info">
        <h1>Who Are We?</h1>
        <p>
          At Lilith, we believe in bringing the tranquility of nature into your
          living spaces. Our mission is to craft captivating and sustainable
          terrariums that not only enhance your surroundings but also foster a
          deeper connection with the natural world.
        </p>
        <router-link to="/main/about"
          ><base-button>Learn More</base-button></router-link
        >
      </div>
      <div class="image">
        <img src="../../assets/images/about.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped lang="scss">
$color_1: #000;

.main {
  background-image: url("../../assets/images/about-background.png");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
.about {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
  margin: 5rem;
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
  width: 100%;
}

@media (max-width: 990px) {
  .main {
    width: 100%;
  }
  .about {
    flex-direction: column-reverse;
    gap: 2rem;
    margin: 2rem;
  }
  .about-info {
    align-items: center;

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
