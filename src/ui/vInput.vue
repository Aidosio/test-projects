<template>
  <label :for="id">{{label}}
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" type="text" :id="id">
  </label>
</template>

<script>
export default {
  name: "vInput",
  props: {
    label: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    modelValue: {
      type: [String, Number],
      required: true
    },
  }
}
</script>

<style lang="scss" scoped>
  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    color: #3a3a3a;

    input {
      margin-top: 3px;
      padding: 10px;
      font-size: 18px;
      font-weight: bold;
      margin-right: 20px;

    }
  }
</style>