<template>
  <scroll-parallax
    class="parallax-section"
    :src="image"
    :alt="alt"
    height="100vh"
    speed="0.3"
  >
    <div class="content">
      <h1>{{ title }}</h1>
      <p v-if="subtitle">{{ subtitle }}</p>
      <slot></slot>
    </div>
  </scroll-parallax>
</template>

<script>
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';

export default {
  components: { ScrollParallax },
  props: {
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.parallax-section {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
}

.content {
  z-index: 2;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.8);
}
</style>
