<template>
  <router-view>
    <div class="main">
      <div class="main-container">
        <div class="landing-image">
          <img
            src="../../assets/images/landing image.png"
            alt="Image of Classic Terra House"
          />
        </div>
        <div class="landing-information">
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
<script setup></script>

<style scoped>
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
}

.slogan h1 {
  text-align: center;
  font-size: 5rem;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.sum-of-slogan {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.sum-of-slogan p {
  width: 26rem;
  padding: 1.2rem;

  font-size: 1.5rem;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}

@media (max-width: 990px) {
  .main-container {
    margin: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .slogan h1 {
    font-size: 2rem;
  }
  .sum-of-slogan p {
    width: 20rem;
  }
  .landing-image img {
    width: 22rem;
  }
}
</style>
