<template>
  <img :src="picture" alt="" class="picture" :class="{'active': active, 'through': through}"/>
</template>

<script>
export default {
  name: "irdom-carousel-slide",
  props: {
    active: {
      type: Boolean,
      default: false
    },
    picture: {
      type: String,
      default: 'https://via.placeholder.com/270x209'
    },
    through: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style scoped>
.picture {
  width: 100%;
  height: 100%;
  /*position: absolute;*/
  /*left: 270px;*/
  /*top: 0;*/
  /*z-index: 2;*/
  background-position: center;
  background-size: cover;
  transition: left 1s;
}

.active {
  left: 0;
}

.through {
  left: -270px;
}
</style>