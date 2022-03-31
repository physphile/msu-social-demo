<template>
  <button
      type="button"
      :class="{left: left, right: right, active: (active && !disabled), 'active-disabled': (active && disabled), disabled: (!active && disabled)}"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "irdom-btn-group-item",
  props: {
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
button {
  border: 1px solid #E3E3E3;
  height: 46px;
  background: #FFFFFF;
  text-align: center;
  color: #858585;
  font-size: 16px;
  line-height: 140.52%;
  width: 166px;
  /* or 22px */
}

.left {
  border-radius: 8px 0 0 8px;

}

.right {
  border-radius: 0 8px 8px 0;
}

.active {
  background: #3D62BB;
  color: #FFFFFF;
}

.active-disabled {
  background: #E3E3E3;
  color: black;
  cursor: default;
}

.disabled {
  color: black;
  cursor: default;
}
</style>