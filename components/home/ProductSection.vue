<template>
  <section class="container">
    <div class="wrapper product-section">
      <h2 class="title-h2">our products</h2>
      <div class="products">
        <div class="product" v-for="item in this.$store.state.products" :key="item.id">
          <div class="card-img">
            <img :src="item.url" :alt="item.alt" />
          </div>
          <div class="card-details">
            <h3 class="title-h3">{{ item.name }}</h3>
            <p class="text">{{ item.price }}€</p>
          </div>
          <button class="btn btn--add" @click="addToCart(item)">Add to cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions(["addToCart"]),
  },
};
</script>

<style lang="scss" scoped>
.product-section {
  margin-top: 5rem;
}

.title-h2 {
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
}

.products {
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
}

.product {
  width: 200px;
  margin-bottom: 2rem;
}

.card-details {
  .title-h3 {
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
  }
  .text {
    color: aquamarine;
  }
}
.btn {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  background-color: tomato;
}
</style>