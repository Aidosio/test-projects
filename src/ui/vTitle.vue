<template>
  <p>{{title}}</p>
</template>

<script>
export default {
  name: "vTitle",
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  p {
    color: #2380ce;
    font-size: 20px;
    text-transform: uppercase;
  }
</style>