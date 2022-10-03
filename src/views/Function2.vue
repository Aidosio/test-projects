<template>
  <vTitle title="Входные данные"/>
  <vInput label="Введити палиндром" id="a" model-value.trim="a"/>
  <vTitle title="Резултат"/>
  <vResult v-if="a === ''" result="Напишите палиндром" />
  <div v-else :class="{red : true}">
    <vResult v-if="palindrome(a) === true" result="да"/>
    <vResult v-else result="нет"/>
  </div>
</template>

<script>
import vInput from "../ui/vInput"
import vTitle from "../ui/vTitle"
import vResult from "../ui/vResult"

export default {
  name: "FuncTwo",
  components: {
    vInput,
    vResult,
    vTitle
  },

  data() {
    return {
      a:''
    }
  },

  methods: {
    palindrome(str) {
      str = str.toLowerCase().replace(/[^а-я]+/g,"");
      return str === str.split("").reverse().join("")
    }
  }
}
</script>

<style scoped>
  .red {
    color: firebrick;
  }
</style>