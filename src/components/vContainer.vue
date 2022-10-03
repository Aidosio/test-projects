<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "vContainer"
}
</script>

<style scoped>
  .container {
    display: grid;
    grid-template-columns: 1fr 3fr;
  }

  @media (max-width: 768px) {
    .container {
      grid-template-columns: 1fr;
    }
  }
</style>