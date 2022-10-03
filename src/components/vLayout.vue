<template>
  <main>
    <section>
      <h1>
        {{namePage}}
      </h1>
    </section>
    <section>
      <slot />
    </section>
  </main>
</template>

<script>
export default {
  name: "vLayout",
  data() {
    return {
      namePage: "",
    }
  },
  watch: {
    '$route.name': {
      immediate: true,
      handler() {
        this.namePage = this.$route.name
      },
    },
  },
}
</script>

<style lang="scss" scoped>
  main {
    width: 100%;
  }

  section {
    h1 {
      margin: 0px;
      font-size: 16px;
    }
    &:first-child {
      border: 1px #3a3a3a solid;
      padding: 14.5px;
    }

    &:last-child {
      border: 1px rgba(58, 58, 58, 0.51) solid;
      height: 100vh;
      padding: 20px;
    }
  }
</style>