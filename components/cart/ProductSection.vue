<template>
  <section class="container">
    <div class="wrapper product-section">
      <h2 class="title-h2">
        products in cart
        <span class="total">
          Total:
          <span class="total-price"> {{ formatCartTotal(this.$store.getters.getCartTotal) }}€</span>
        </span>
      </h2>
      <div class="products">
        <div class="product" v-for="item in this.$store.state.cart" :key="item.id">
          <div class="card">
            <div class="card-img">
              <img src="~/assets/images/profile.jpg" :alt="item.alt" />
            </div>
            <div class="card-details">
              <h3 class="title-h3">{{ item.name }}</h3>
              <p class="text">{{ item.price }}€</p>
              <p class="text">x{{ item.quantity }}</p>
            </div>
          </div>
          <button class="btn btn--remove" @click="deleteInCart(item.id)">Remove</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  // computed: {
  //   getTotalPrice() {
  //     this.$store.state.cart.length === 0
  //       ? 0
  //       : this.$store.state.cart
  //           .forEach((el) => (el.totalPrice = el.price * el.quantity))
  //           .reduce((a, b) => a.totalPrice + b, 0);
  //   },
  // },
  methods: {
    ...mapGetters(["getCartTotal"]),
    ...mapActions(["deleteInCart"]),

    formatCartTotal(num) {
      if (num > 0) {
        return num.toFixed(2);
      } else {
        return num;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-section {
  margin-top: 5rem;
}

.title-h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 700;
}

.total {
  font-size: 1.5rem;
  &-price {
    color: aquamarine;
  }
}

.products {
  display: flex;
  flex-direction: column;
}

.product {
  height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.card {
  flex-grow: 1;
  display: flex;
}

.card-img {
  height: 80px;
  width: 80px;
  margin-right: 2rem;
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
  padding: 0.5rem 1rem;
  border-radius: 5px;
  color: #fff;
  background-color: tomato;
}
</style>