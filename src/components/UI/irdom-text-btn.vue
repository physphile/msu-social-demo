<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "irdom-text-btn"
}
</script>

<style scoped>
button {
  background: none;
}

button {
  color: black;
  /* text-2 */
  font-size: 15px;
  line-height: 18px;
}

button:hover {
  color: #3D62BB;
}

button:active {
  font-weight: 600;
  line-height: 18px;
  /* identical to box height */
  color: #3D62BB;
}
</style>