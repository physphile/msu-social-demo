<template>
  <div class="item" :class="{active: active}">
    <img :src="icon" alt="" class="icon">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "irdom-side-menu-item",
  props: {
    icon: {
      type: String,
      default: 'https://icons.veryicon.com/png/o/miscellaneous/general-icon-collection-face-right-angle/arrow-right-40.png'
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.item {
  border-radius: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 140.52%;
  /* or 25px */
  color: #000000;
  padding: 18px;
  column-gap: 14.33px;
}

.icon {
  max-width: 28px;
  max-height: 28px;
  object-fit: contain;
}

.active {
  background: #E8ECF4;
}
.item:hover {
  cursor: pointer;
}
</style>