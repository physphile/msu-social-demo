<template>
  <div class="dropdown">
    <div class="dropdown-header" :class="{expand: expand}" @click="expand = !expand" ref="toggle">
      <span>{{header}}</span>
      <img src="../../assets/icons/arrow_down_expand.png" alt="" :class="{rotate: expand}">
    </div>

    <div class="dropdown-body" ref="dropdown">
      <div style="margin: 40px;">
        <slot></slot>
      </div>

    </div>
  </div>
</template>

<script>
import Vue from "q";

export default {
  name: "irdom-dropdown",
  mounted() {
    Vue.nextTick(() => {
      this.bodyHeight = this.$refs.dropdown.offsetHeight
    })
    const elToggle = this.$refs.toggle
    const elBlock = this.$refs.dropdown
    elToggle.addEventListener("click", () => {
      if (this.expand) {
        elBlock.style.height = `${elBlock.scrollHeight}px`
      } else {
        elBlock.style.height = `${elBlock.scrollHeight}px`;
        window.getComputedStyle(elBlock, null).getPropertyValue("height");
        elBlock.style.height = "0";
      }
    });
  },
  watch: {
    height(val) {
      const elBlock = this.$refs.dropdown
      elBlock.style.height = (val + 145) + 'px'
    }
  },

  props: {
    height: {
      type: Number,
      required: false
    },
    header: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      bodyHeight: 0,
      expand: false
    }
  },
  computed: {
    transform() {
      if (!this.expand) {
        return 'transform: translateY(' + -this.bodyHeight / 2 + 'px) scaleY(0);'
      }
      return ''
    }
  }
}
</script>

<style scoped>
.dropdown-header {
  box-shadow: 0 2.8125px 12.375px rgba(18, 31, 67, 0.08);
  border-radius: 10px;
  width: 890px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 15px 15px 40px;
  background: white;
}

.expand {
  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #E3E3E3;
}

.rotate {
  transform: rotate(180deg);
}

.dropdown-body {
  background: white;
  width: 890px;
  overflow: hidden;
  box-shadow: 0 2.8125px 12.375px rgba(18, 31, 67, 0.08);
  border-radius: 0 0 10px 10px;
  transition: height .5s ease;
  height: 0;
}
</style>