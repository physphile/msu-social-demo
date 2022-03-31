<template>
  <div class="wrapper">
    <irdom-btn-group-item
        left
        :active="modelValue === 'STUDENT'"
        @click="change('STUDENT')"
        :disabled="disabled"
    >
      Студент
    </irdom-btn-group-item>
    <irdom-btn-group-item
        :active="modelValue === 'STAFF'"
        @click="change('STAFF')"
        :disabled="disabled"
    >
      Сотрудник
    </irdom-btn-group-item>
    <irdom-btn-group-item
        right
        :active="modelValue === 'OTHER'"
        @click="change('OTHER')"
        :disabled="disabled"
    >
      Другой
    </irdom-btn-group-item>
  </div>

</template>

<script>
export default {
  name: "status-btn-group",
  props: {
    modelValue: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    change(newValue) {
      if (!this.disabled) {
        if (newValue === this.modelValue) {
          this.$emit('update:modelValue', '')
        } else {
          this.$emit('update:modelValue', newValue)
        }

      }
    },
  }
}

</script>

<style scoped>

</style>