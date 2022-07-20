<template>
  <main class="main">
    <hero-section />
    <product-section />
  </main>
</template>

<script>
import HeroSection from "~/components/home/HeroSection.vue";
import ProductSection from "~/components/home/ProductSection.vue";

export default {
  name: "IndexPage",
  components: { HeroSection, ProductSection },
};
</script>
