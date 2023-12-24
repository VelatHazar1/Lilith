<template>
  <div class="main">
    <div class="main-contents">
      <div class="slider">
        <div class="images">
          <input type="radio" name="slide" id="img1" checked />
          <input type="radio" name="slide" id="img2" />
          <input type="radio" name="slide" id="img3" />
          <input type="radio" name="slide" id="img4" />
          <img
            src="../../assets/detailedPageImages/8932bd_0ea5dddf65214f5d80d5113e87e7510f~mv2.webp"
            alt=""
            class="m1"
          />
          <img
            src="../../assets/detailedPageImages/8932bd_675ba1374a5a44af80a36a29a62cc37d~mv2.webp"
            alt=""
            class="m2"
          />
          <img
            src="../../assets/detailedPageImages/8932bd_bb5dfe2e309a42869a7948bbbde938aa~mv2.webp"
            alt=""
            class="m3"
          />
          <img
            src="../../assets/detailedPageImages/8932bd_e93c8e6a94214168a71885e9c7b15c09~mv2.webp"
            alt=""
            class="m4"
          />
        </div>
        <div class="dots">
          <label for="img1"></label>
          <label for="img2"></label>
          <label for="img3"></label>
          <label for="img4"></label>
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
<script setup></script>
<style scoped>
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
}

.main-information h1 {
  text-align: center;
  font-size: 4rem;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.main-information p {
  width: 30rem;
  padding: 1.2rem;

  font-size: 1.2rem;
  font-style: italic;
  font-weight: 300;
  line-height: normal;
}
.slider {
  position: relative;
  width: 35%;
  overflow: hidden;
}
.images {
  display: flex;
  width: 100%;
}
.images img {
  height: 400px;
  width: 100%;
  transition: all 0.15s ease;
  border-radius: 1rem;
}
.images input {
  display: none;
}
.dots {
  display: flex;
  justify-content: center;
  margin: 5px;
}
.dots label {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  border: solid #fff 3px;
  cursor: pointer;
  transition: all 0.15s ease;
  margin: 5px;
}
.dots label:hover {
  background: #fff;
}

#img1:checked ~ .m1 {
  margin-left: 0;
}
#img2:checked ~ .m2 {
  margin-left: -100%;
}
#img3:checked ~ .m3 {
  margin-left: -200%;
}
#img4:checked ~ .m4 {
  margin-left: -300%;
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
  .main-information h1 {
    font-size: 1.5rem;
    width: 20rem;
  }
  .main-information p {
    width: 20rem;
    padding: 1.2rem;

    font-size: 1rem;
    font-style: italic;
    font-weight: 300;
    line-height: normal;
  }
  .main-button {
    font-size: 1rem;
  }
}
</style>
