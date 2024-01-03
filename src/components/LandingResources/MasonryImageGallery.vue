<template>
  <div class="masonry-container">
    <h1>Gallery</h1>
    <div class="image-container">
      <img src="../../assets/images/galleryImage.webp" alt="" />
      <img src="../../assets/images/galleryImage2.webp" alt="" />
      <img src="../../assets/images/galleryImage3.webp" alt="" />
      <img src="../../assets/images/galleryImage4.webp" alt="" />
      <img src="../../assets/images/galleryImage5.webp" alt="" />
      <img src="../../assets/images/galleryImage6.webp" alt="" />
      <img src="../../assets/images/galleryImage7.webp" alt="" />
      <img src="../../assets/images/galleryImage8.webp" alt="" />
      <img src="../../assets/images/galleryImage9.webp" alt="" />
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.masonry-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 0.3rem;
  margin: 2rem;
}
.masonry-container h1 {
  text-align: center;
  font-size: 3rem;

  font-weight: 300;
  line-height: normal;
}
.image-container {
  width: 80%;
  columns: 3 250px;
  gap: 15px;
  margin: 2rem;
}

.image-container img {
  margin-bottom: 1rem;
  border-radius: 12px;
  width: 100%;
  overflow: hidden;
  transition: 0.25s ease;
  filter: grayscale(100%);
}

.image-container img:hover {
  transform: scale(1.04);
  filter: grayscale(0%);
}

@media (max-width: 990px) {
  .image-container {
    width: 100%;
  }
  .image-container img {
    filter: grayscale(0%);
  }
}
</style>
