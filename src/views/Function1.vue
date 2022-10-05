<template>
  <vTitle title="Входные данные"/>
  <div class="block">
    <vInput label="Строка А" id="a" v-model.trim="a"/>
    <vInput label="Строка Б" id="b" v-model.trim="b"/>
  </div>
  <vTitle title="Резултат"/>
  <vResult v-if="a === ''" :class="{red: false}" :result="search(a.toLowerCase(), b.toLowerCase())" />
  <vResult v-else :class="{red: true}" :result="search(a.toLowerCase(), b.toLowerCase())" />
</template>

<script>
import vInput from "../ui/vInput"
import vTitle from "../ui/vTitle"
import vResult from "../ui/vResult"
export default {
  name: "FuncOne",
  components: {
    vInput,
    vResult,
    vTitle
  },

  data() {
    return {
      a:'',
      b: ''
    }
  },
  methods: {
    search(a, b, c) {
      a += "";
      b += "";
      if (b.length <= 0) return (a.length + 0);

      let n = 0,
          pos = 0,
          step = c ? 1 : b.length;

      // eslint-disable-next-line no-constant-condition
      while (true) {
        pos = a.indexOf(b, pos);
        if (pos >= 0) {
          ++n;
          pos += step;
        } else break;
      }
      return n;
    }
  }
}
</script>

<style scoped>
  .block {
    display: flex;
  }
  .red {
    color: firebrick;
  }
</style>