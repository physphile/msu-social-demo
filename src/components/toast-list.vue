<template>
  <div
      class="toast-list-container"

  >
    <transition-group name="list">
      <irdom-toast
          v-for="msg in messages"
          :msg="msg"
          :key="msg.id"
      ></irdom-toast>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "toast-list",
  data() {
    return {
      messages: []
    }
  },
  watch: {
    '$store.state.messages': {
      async handler(val) {
        if (val.length > this.messages.length) {
          const id = val[val.length - 1].id
          setTimeout(() => {
            this.$store.commit('deleteMessage', id)
          }, 3000)
        }
        this.messages = [...val]
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.toast-list-container {
  position: fixed;
  left: 75px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  top: 0;
  height: 100vh;
  pointer-events: none;
  justify-content: flex-end;
  padding-bottom: 50px;
  z-index: 10;
}

.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
</style>