<template>
  <div class="carousel">
    <div class="slides" :style="{'left': -270*active + 'px'}">
      <irdom-carousel-slide
          v-for="(picture, i) in pictures"
          :picture="picture"
          :active="this.active === i"
      />
    </div>


    <div class="left-control" @click="minus" v-show="active !==  0">
      <img src="../../assets/icons/left_control.png" alt="" class="control">
    </div>
    <div class="right-control" @click="plus" v-show="active !== pictures.length - 1">
      <img src="../../assets/icons/left_control.png" alt="" class="control">
    </div>
  </div>

</template>

<script>
export default {
  name: "irdom-carousel",
  data() {
    return {
      count: 0,
      left: false,
      right: false
    }
  },
  props: {
    pictures: {
      type: Array,
      default: [require('../../assets/krasnovidovo.png'), require('../../assets/universitetskiy.jpg'), require('../../assets/burevestnik.jpg'), require('../../assets/burevestnik.jpg')]
    }
  },
  computed: {
    active() {
      return this.countActive(this.count)
    }
  },
  methods: {
    countActive(val) {
      let len = this.pictures.length
      if (val >= 0) {
        return val % len
      } else {
        return (len + (val % len)) % len
      }
    },
    minus() {
      --this.count
      this.left = true
      this.right = false
    },
    plus() {
      ++this.count
      this.right = true
      this.left = false
    }
  }
}
</script>

<style scoped>
.carousel {
  position: relative;
  border-radius: 10px;
  width: 270px;
  height: 210px;
  display: flex;
  object-fit: cover;
  overflow: hidden;
}


.left-control {
  position: absolute;
  z-index: 3;
  height: 100%;
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.right-control {
  position: absolute;
  left: 220px;
  z-index: 3;
  height: 100%;
  transform: rotate(180deg);
  padding-left: 10px;
  display: flex;
  align-items: center;
}

.control {
  height: 40px;
  width: 40px;
}

.slides {
  display: flex;
  position: absolute;
  width: 270px;
  height: 100%;
  transition: left 0.5s ease;
}
</style>