<template>
  <div class="counter-container">
    <div class="icon minus" @click="minus"
         :style="{'height': 46*scale + 'px',  'width': 46*scale + 'px', 'background-size': 46*scale*0.48 + 'px'}">

    </div>
    <span class="count" :style="{'margin': '0 ' + 28*scale + 'px', 'font-size': fontSize}">{{ modelValue }}</span>
    <div class="icon plus" @click="plus"
         :style="{'height': 46*scale + 'px',  'width': 46*scale + 'px','background-size': 46*scale*0.48 + 'px'}"></div>
  </div>
</template>

<script>
export default {
  name: "irdom-counter",
  props: {
    modelValue: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: false
    },
    min: {
      type: Number,
      required: false
    },
    scale: {
      type: Number,
      default: 1
    },
    fontSize: {
      type: String,
      default: '20px'
    }
  },
  methods: {
    minus() {
      if (typeof this.min === 'undefined' || this.modelValue > this.min) {
        this.$emit('update:modelValue', this.modelValue - 1)
      }
    },
    plus() {
      if (typeof this.max === 'undefined' || this.modelValue < this.max) {
        this.$emit('update:modelValue', this.modelValue + 1)
      }
    }
  }
}
</script>

<style scoped>
.count {
  font-weight: 500;
  font-size: 20px;
  line-height: 140.52%;
  /* or 28px */
  color: #000000;
  width: 13px;
}

.counter-container {
  display: flex;
  align-items: center;
}

.icon {
  border: 1px solid #858585;
  border-radius: 50%;
  transition: background-color .2s;
  cursor: pointer;
}

.minus {
  background: url('../../assets/icons/minus.png') no-repeat center;
}

.plus {
  background: url('../../assets/icons/plus.png') no-repeat center;
}

.minus:hover, .plus:hover {
  background-color: #ECECEC;
}
</style>