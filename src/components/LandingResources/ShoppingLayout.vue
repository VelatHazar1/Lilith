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
              clear glass containers, sealed ecosystems, layered composition.
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
              colors, a focus on essential elements, and a clean, uncluttered
              aesthetic.
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
<script></script>
<style scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.main-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 80%;
}

.shopping-card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
.shopping-card p {
  width: 15rem;
  height: 10rem;

  font-size: 1.3rem;
  font-style: italic;
  font-weight: 300;
}
h1 {
  font-weight: 300;
}

@media (max-width: 990px) {
  .main {
    height: auto;
  }
  .main-container {
    flex-direction: column;
  }
  img {
    width: 20rem;
  }
}
</style>
