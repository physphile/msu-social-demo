<template>
  <div class="wrapper">
    <irdom-btn-group-item
        left
        :active="modelValue === 'male'"
        @click="change('male')"
        :disabled="disabled"
    >
      М
    </irdom-btn-group-item>
    <irdom-btn-group-item
        right
        :active="modelValue==='female'"
        @click="change('female')"
        :disabled="disabled"
    >
      Ж
    </irdom-btn-group-item>
  </div>

</template>

<script>
export default {
  name: "gender-btn-group",
  props: {
    modelValue: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      gender: 'male'
    }
  },
  methods: {
    change(newValue) {
      if (!this.disabled)
        if (newValue === this.modelValue) {
          this.$emit('update:modelValue', '')
        } else {
          this.$emit('update:modelValue', newValue)
        }
    },
  }
}
</script>

<style scoped>

</style>