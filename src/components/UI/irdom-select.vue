<template>
  <select id="" :class="{'raised': raised, 'gray': modelValue === 'default'}" v-model="modelValue" @change="changeOption">
    <option value="default" disabled selected style="color: #858585">
      <slot></slot>
    </option>
    <option
        v-for="option in options"
        :value="option"
        :key="options.indexOf(option)"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
import Profile from "@/pages/Profile";
export default {
  name: "irdom-select",
  components: {Profile},
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      required: true
    },
    raised: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
select {
  padding: 12px 28px;
  height: 46px;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('../../assets/icons/arrow_down.png') no-repeat right white;
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  border: 1px solid #E3E3E3;
  transition: box-shadow .2s;
}

select:focus {
  border: 1px solid #3D62BB;
}
.raised {
  box-shadow: 0 4px 21px rgba(0, 0, 0, 0.07);
  border-radius: 50px;
  color: black;
  border: none;
}
.raised:hover {
  box-shadow: 0px 5px 21px rgba(0, 0, 0, 0.15);
}
.raised:focus {
  box-shadow: 0px 4.5px 25px -4px rgba(125, 163, 253, 0.4);
}
.gray {
  color: #858585;
}
.gray>option {
  color: black;
}
</style>