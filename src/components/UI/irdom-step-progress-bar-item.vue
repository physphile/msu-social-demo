<template>
  <div
      class="item"
  >
    <div class="for-hover" :class="{'item-active':active, 'not-done': !active && !done}">
      <div
          class="icon-back"
          :class="{'active-back': active || done, 'back-done':done}"
      >
        <img
            :src="url"
            alt=""
            class="icon"
            :class="{'icon-active': active || done, 'icon-done': done}"
        >
      </div>
      <div
          class="text"
          v-show="active || done"
      >
      <span
          class="step"
          :class="{'step-done':done}"
      >
        Шаг {{ number }}/3
          <img
              src="../../assets/icons/tick.png"
              alt=""
              style="margin-left: 5px;"
              v-show="done"
          >
      </span>
        <span
            class="title"
            :class="{'title-done': done}"
        >
        <slot></slot>
      </span>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "irdom-step-progress-bar-item",
  props: {
    number: {
      type: Number,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      required: true
    },
    done: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
span {
  cursor: pointer;
}

.item, .for-hover {
  height: 90px;
  padding: 9px 13px 9px 23px;
  align-self: flex-start;
  display: flex;
  align-items: center;
  border-radius: 25px;
  transition: all .3s ease;
  cursor: pointer;
}

.for-hover {
  align-self: center;
  padding: 9px 20px;
  height: auto;
}

.for-hover:hover {
  background: #F2F2F2;
  border-radius: 50px;
}


.icon {
  filter: grayscale(1);
}

.text {
  display: flex;
  flex-direction: column;
  margin-left: 20px;
}

.step {
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  color: #3D62BB;
  display: flex;
  align-items: center;
}

.title {
  font-size: 16px;
  line-height: 140.52%;
  /* or 22px */
  color: #000000;
}

.icon-active {
  filter: grayscale(1) contrast(100000000%) invert(1);
}

.active-back {
  background: #3D62BB;
}

.icon-back {
  display: flex;
  align-items: center;
  padding: 14px;
  border-radius: 50%;
}

.icon-done {
  filter: none;
}

.back-done {
  background: #E6EDFF;
}

.item-active:hover {
  background: #E5EDFF;;
}

.title-done {
  color: #858585;
}

.step-done {
  color: #445273;
}
.not-done {
  padding: 11px 18px ;
}
.not-done:hover {
  padding: 8px 18px 14px 18px;
}
</style>