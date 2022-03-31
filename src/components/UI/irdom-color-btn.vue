<template>
  <button :class="{'dark': dark, 'disabled': disabled}">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "irdom-color-btn",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    dark: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
button {
  height: 51px;
  border-radius: 50px;
  /* blue */
  background: #3D62BB;
  font-size: 16px;
  line-height: 19px;
  padding: 0 32px;
  color: #FFFFFF;
}

button:hover {
  /* blue */
  background: #3D62BB;
}

.disabled, .disabled:hover {
  /* lightgray */
  background: #E3E3E3;
  /* darkgray */
  color: #858585;
  cursor: default;
}

.dark {
  /* darkblue */
  background: #445273;
}

</style>