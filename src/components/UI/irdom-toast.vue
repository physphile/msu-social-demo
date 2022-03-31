<template>
    <div class="toast">
      <img :src="getIcon()" alt="" class="toast-icon">
      <div class="toast-body">
        <span class="toast-title">{{title}}</span>
        <span class="toast-text">{{ msg.text }}</span>
      </div>
    </div>
</template>

<script>
export default {
  name: "irdom-toast",
  props: {
    msg: {
      type: Object,
      required: true
    }
  },
  computed: {
    title () {
      if (this.msg.type === 'error') {
        return 'Ошибка'
      } else if (this.msg.type === 'info') {
        return 'Информация'
      } else if (this.msg.type === 'success') {
        return 'Успешно'
      }
    }
  },
  methods: {
    getIcon () {
      const type = this.msg.type
      if (type === 'success') {
        return require('../../assets/icons/toast-ok-icon.png')
      } else if (type === 'error') {
        return require('../../assets/icons/toast-error-icon.png')
      } else if (type === 'info') {
        return require('../../assets/icons/toast-info-icon.png')
      }
    }
  },
  watch: {
    async show(val) {
      if (val) {
        await setTimeout(() => {
          this.$emit('close')
        }, 5000)
      }
    }
  }
}
</script>

<style scoped>
.toast {
  width: 500px;
  height: 110px;
  background: #FFFFFF;
  box-shadow: 0 2.8125px 12.375px rgba(18, 31, 67, 0.16);
  border-radius: 8px;
  display: flex;
  padding: 20px 25px;
  column-gap: 20px;
}

.toast-icon {
  width: 34px;
  height: 34px;
  object-fit: contain;
}

.toast-title {
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 140.52%;
  /* or 28px */
  color: #000000;
}

.toast-text {
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #858585;
}

.toast-body {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
}
</style>