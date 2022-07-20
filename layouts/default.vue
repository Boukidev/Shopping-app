<template>
  <div>
    <nav class="navbar">
      <ul class="navlist">
        <li class="navitem">
          <nuxt-link to="/">Home</nuxt-link>
        </li>
        <li class="navitem">
          <nuxt-link to="/cart">
            Cart
            <span>({{ this.$store.state.cart.length }})</span>
          </nuxt-link>
        </li>
      </ul>
    </nav>
    <nuxt />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  padding: 1rem;
  background-color: blueviolet;
}
.navlist {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}
.navitem {
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    a {
      color: aquamarine;
    }
  }
}
</style>