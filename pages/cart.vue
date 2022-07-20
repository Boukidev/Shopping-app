<template>
  <main class="main">
    <hero-section />
    <product-section />
  </main>
</template>

<script>
import HeroSection from "~/components/cart/HeroSection.vue";
import ProductSection from "~/components/cart/ProductSection.vue";

export default {
  components: { HeroSection, ProductSection },
};
</script>

<style lang="scss" scoped>
</style>