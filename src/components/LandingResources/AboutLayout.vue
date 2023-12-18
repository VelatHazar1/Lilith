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
      <div class="img">
        <img src="../../assets/images/about.png" alt="" />
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
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
}
.about-info {
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 3rem;
}
.about-info h1 {
  color: #000;

  font-size: 5rem;
  font-style: italic;
  font-weight: 200;
}
.about-info p {
  width: 37rem;
  color: #000;

  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
}
@media (max-width: 990px) {
  .about {
    flex-direction: column-reverse;
    gap: 2rem;
  }
  .about-info {
    align-items: center;
  }
  .about-info h1 {
    font-size: 2rem;
  }
  .about-info p {
    width: auto;
  }
  img {
    width: 22rem;
  }
}
</style>
