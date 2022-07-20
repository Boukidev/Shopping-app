<template>
  <section class="container">
    <div class="wrapper hero-section">
      <h1 class="title-h1">shopping app</h1>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.title-h1 {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3rem;
  &::after {
    content: "";
    display: block;
    height: 5px;
    width: 150px;
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translate(-50%);
    background-color: aquamarine;
    transition: width 0.5s;
  }
  &:hover {
    &::after {
      width: 300px;
    }
  }
}
</style>