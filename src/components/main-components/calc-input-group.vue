<template>
<div class="wrapper">
  <span class="label">{{label}}</span>
  <slot></slot>
</div>
</template>

<script>
export default {
  name: "calc-input-group",
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.label {
  margin-right: 20px;
  font-size: 18px;
  line-height: 140.52%;
  /* or 25px */
  color: #858585;
}
</style>