<template>
  <h3>{{result}}</h3>
</template>

<script>
export default {
  name: "vResult",
  props: {
    result: {
      type: [Number, String],
      required: true
    }
  }
}
</script>

<style scoped>
  h3 {
    margin: 0px;
    cursor: pointer;
  }
</style>