<template>
<div class="bar-back">
  <div class="stripe" :style="{'width': 40 * progress / 100 + 'px'}">

  </div>
</div>
</template>

<script>
export default {
  name: "irdom-progress-bar",
  props: {
    progress: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.bar-back {
  background: #A9C0F7;
  border-radius: 20px;
  width: 40px;
  height: 5px;
}
.stripe {
  background: #3D62BB;
  border-radius: 20px;
  height: 5px;
}
</style>