<template>
  <div class="gallery-container">
    <swiper 
      :slides-per-view="1" 
      :pagination="{
        clickable: true,
      }"
      :breakpoints="{
        '640': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '768': {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        '1024': {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :spaceBetween="30" 
      :loop="true" 
      :modules="modules"
      class="swiper">
      <swiper-slide v-for="(image, index) in images" :key="index">
        <img class="foto" :src="image" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

// import 'swiper/css/pagination';

export default {
  components: { Swiper, SwiperSlide },
  mounted: () => {

  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      images: [
        '/fotos/1.jpeg', '/fotos/2.jpeg', '/fotos/3.jpeg', '/fotos/4.jpeg', '/fotos/5.jpeg', 
        '/fotos/6.jpeg', '/fotos/7.jpeg', '/fotos/8.jpeg', '/fotos/9.jpeg', '/fotos/10.jpeg', 
        '/fotos/11.jpeg', '/fotos/12.jpeg', '/fotos/13.jpeg', '/fotos/14.jpeg', '/fotos/15.jpeg', 
        '/fotos/16.jpeg', '/fotos/17.jpeg', '/fotos/18.jpeg', '/fotos/19.jpeg', '/fotos/20.jpeg', '/fotos/21.jpeg', 
        '/fotos/22.jpeg', '/fotos/23.jpeg', '/fotos/24.jpeg', '/fotos/25.jpeg', '/fotos/26.jpeg', '/fotos/27.jpeg', 
        '/fotos/28.jpeg', '/fotos/29.jpeg', '/fotos/30.jpeg', '/fotos/31.jpeg', '/fotos/32.jpeg', '/fotos/33.jpeg', 
        '/fotos/34.jpeg', '/fotos/35.jpeg', '/fotos/36.jpeg', '/fotos/37.jpeg', '/fotos/38.jpeg', '/fotos/39.jpeg', 
        '/fotos/40.jpeg', '/fotos/41.jpeg'
      ]
    };
  },
};
</script>

<style scoped>
.gallery-container {
  /* width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center; */
}
.gallery-container img.foto{
  
}

img {
  /* width: 100%;
  height: auto;
  border-radius: 10px; */
}
.swiper {
  width: 100vw;
  height: 100%;
  padding: 2em;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  /* background: #fff; */

  /* Center slide text vertically */
  /* display: flex;
  justify-content: center;
  align-items: center; */
}

.swiper-slide img {
  /* display: block; */
  /* width: 100%; */
  /* height: 100%; */
  /* max-width: 90vw;
  max-height: 90vh; */
  border-radius: 10px;
  /* object-fit: cover; */
}
</style>
