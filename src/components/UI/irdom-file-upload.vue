<template>
  <div class="file-upload-container">
    <irdom-file-drop @change="change" ref="drop"/>
    <div class="hline" v-if="files[0]"/>
    <div class="file-list" v-if="files[0]">
      <irdom-file-bar v-for="file in files" :name="file.name" :progress="progress[files.indexOf(file)]" @close="close"/>
    </div>

  </div>
</template>

<script>
export default {
  name: "irdom-file-upload",
  data() {
    return {
      files: [],
      progress: []
    }
  },
  methods: {
    async change(files) {
      const acceptedTypes = ['application/pdf', 'image/jpeg', 'image/pjpeg', 'image/png']
      for (let i = 0; i < files.length; ++i) {
        const type = files[i].type
        if (type === 'application/pdf' || type === 'image/jpeg' || type === 'image/pjpeg' || type === 'image/png') {
          if (this.alreadyExists(files[i])) {
            // alert('Этот файл уже загружен')
            this.$store.commit('addMessage', {type: 'info', text: 'Этот файл уже загружен'})
          } else {
            this.files.push(files[i])
            await this.upload(files[i])
          }

        } else {
          // alert('Такой тип файла недопустим')
          this.$store.commit('addMessage', {type: info, text: 'Такой тип файла недопустим'})
        }
      }
      this.$emit('change')
    },
    alreadyExists(file) {
      for (let i = 0; i < this.files.length; ++i) {
        if (this.files[i].name === file.name) return true
      }
      return false
    },
    async upload(file) {
      const index = this.files.indexOf(file)
      this.progress[index] = 0
      for (let i = 0; i < 2000; ++i) {
        window.setTimeout(() => {
          this.progress[index] += 100 / 2000
          if (i === 1999) {
            this.progress[index] = 100
          }
        }, .5)
      }

    },
    close(name) {
      this.files = this.files.filter(f => f.name !== name)
      this.$emit('change')
    }
  }
}
</script>

<style scoped>
.file-list {
  display: flex;
  flex-direction: column;
}

.file-upload-container {
  border: 1px dashed #E3E3E3;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  width: 496px;
}

.hline {
  border: 1px solid #E3E3E3;
  width: 446px;
  height: 0;
  margin: 0 auto;
}
</style>