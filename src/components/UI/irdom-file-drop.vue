<template>
  <div class="attach-field">
    <input type="file" multiple ref="input" v-on:change="change" accept="application/pdf, image/jpeg, image/pjpeg, image/png">
    <img src="../../assets/icons/file_attach.png" alt="" class="attach-icon">
    <div>
      <irdom-text-btn style="color: #3D62BB" class="attach-text">Загрузите</irdom-text-btn>
      <span class="attach-text" style="color: black"> или перетащите<br>документ-подтверждение статуса в МГУ<br>
      (файлы формата pdf, jpg, png)</span>
    </div>

  </div>
</template>

<script>
export default {
  name: "irdom-file-drop",
  data() {
    return {
      data: '',
    }
  },
  methods: {
    change(ev) {
      const files = ev.target.files
      const promise = []
      for (let i = 0; i < files.length; ++i) {
        promise.push(files[i])
      }
      this.$emit('change', promise)
      this.$refs.input.value = ''
    },
  }
}
</script>

<style scoped>
.attach-field {
  display: flex;
  width: 496px;
  height: 100px;
  align-items: center;
  background: white;
  position: relative;
}

.attach-text {
  font-weight: normal;
  font-size: 14px;
  line-height: 140.52%;
  /* or 20px */
}

.attach-icon {
  object-fit: contain;
  width: 36px;
  height: 36px;
  margin: 24px 16px 0 44px;
  align-self: flex-start;
}

input {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
</style>