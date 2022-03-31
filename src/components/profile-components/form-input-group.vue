<template>
  <div class="wrapper">
    <label :for='id' class="label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "form-input-group",
  props: {
    label: {
      type: String,
      default: ""
    },
    id: {
      type: String,

    }
  }
}
</script>

<style scoped>
.label {
  margin-right: 67px;
  font-size: 18px;
  line-height: 140.52%;
  /* or 25px */
  width: 140px;
  color: black;
  font-weight: 600;
}
</style>