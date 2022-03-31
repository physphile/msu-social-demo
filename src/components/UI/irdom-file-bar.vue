<template>
  <div class="file-bar-container">
    <img
        class="file-icon"
        :src="success ? require('../../assets/icons/file_small_black.png') : require('../../assets/icons/file_small_gray.png')"
        alt="">
    <span class="name" :class="{black: success}">{{ name }}</span>
    <irdom-progress-bar :progress="progress" v-show="!success"/>
    <img src="../../assets/icons/close_cross_black.png" alt="" class="close-cross" v-show="success" @click="close">
  </div>
</template>

<script>
export default {
  name: "irdom-file-bar",
  props: {
    name: {
      type: String,
      required: true
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  computed: {
    success() {
      return this.progress === 100
    }
  },
  methods: {
    close() {
      this.$emit('close', this.name)
    }
  },
  unmounted() {
    this.$emit('close', this.name)
  }
}
</script>

<style scoped>
.file-icon {
  width: 21px;
  height: 21px;
  object-fit: contain;
}

.close-cross {
  width: 26px;
  height: 26px;
  object-fit: contain;
}

.file-bar-container {
  display: flex;
  align-items: center;
  width: 496px;
  padding: 0 44px;
  height: 50px;
}

.name {
  font-weight: normal;
  font-size: 14px;
  line-height: 140.52%;
  /* identical to box height, or 20px */
  color: #858585;
  margin-right: auto;
  margin-left: 8px;
}

.black {
  color: black;
}
</style>