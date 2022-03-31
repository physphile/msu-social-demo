<template>
  <transition name="fade">
    <div class="blackout" @click="closePopup" v-show="show">
      <transition name="slide" v-show="show">
        <div class="popup" @click.stop>
          <slot></slot>
        </div>
      </transition>

    </div>
  </transition>


</template>

<script>
export default {
  name: "irdom-popup",
  methods: {
    closePopup() {
      this.$emit('close')
    }
  },
  props: {
    show: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style scoped>
.blackout {
  background: rgba(13, 19, 35, 0.4);
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 200vh;
  z-index: 3;
}

.popup {
  position: fixed;
  width: 374px;
  height: 527px;
  z-index: 4;
  background: white;
  box-shadow: 0 4px 32px rgba(0, 16, 61, 0.16);
  border-radius: 15px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.blackout {
  background: rgba(13, 19, 35, 0.4);
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
}

.slide-enter-from, .slide-leave-to {
  transform: translateY(1000px);
}

.slide-enter-active, .slide-leave-active {
  transition: transform .5s ease;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>