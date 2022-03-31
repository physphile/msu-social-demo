<template>
<span>
  <img :src="icon" alt="">
  <slot></slot>
</span>
</template>

<script>
export default {
  name: "irdom-icon-text",
  props: {
    icon: {
      type: String
    }
  }
}
</script>

<style scoped>
span {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 15px;
  /* identical to box height */
  color: #858585;
}

img {
  margin-right: 6px;
}
</style>